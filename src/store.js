import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 购物车列表
    chartList: {},
    // 购物车选中列表
    chartActiveList: {},
    // 购物车是否全部选中
    isChartAllSelected: false,
    // 商品全部选中的店铺列表
    chartShopAllList: {}
  },
  mutations: {
    // 选中商品
    addChartActiveList(state, payload) {

      if (state.chartActiveList[payload.sugGoodsCode]) {
        // 此处对已选中商品数目进行增减，以便总金额进行相应
        state.chartActiveList[payload.sugGoodsCode].count += payload.count
      }else {
        // 此处为新增选中商品
        Vue.set(state.chartActiveList, payload.sugGoodsCode, {count: payload.count, price: payload.price})
      }
      // 判断店铺是否所有商品全部选中
      for (let i in state.chartList[payload.shopCode]) {
        if (!state.chartActiveList[i]) {
          // 若有一个未选中即退出
          return
        }
      }
      // 到此处即全部选中
      Vue.set(state.chartShopAllList, payload.shopCode, {shopCode: payload.shopCode})

      // 判断购物车是否所有商品全部选中
      for (let i in state.chartList) {
        if (!state.chartShopAllList[i]) {
          // 若有一个未选中即退出
          return
        }
      }
      // 到此处即全部选中
     state.isChartAllSelected = true
    },
    // 取消选中
    removeFromChartActiveList(state, payload) {
      // 从选中列表中删除商品
      Vue.delete(state.chartActiveList, payload.sugGoodsCode)
      // 并且将全部选中标志设为false
      state.isChartAllSelected = false
      // 若state中的chartShopAllList有该商铺，则进行移除；
      if (state.chartShopAllList[payload.shopCode]) {
        Vue.delete(state.chartShopAllList, payload.shopCode)
      }
    },
    // 加入购物车
    addToChart(state, payload) {
      // 判断店铺是否已存在
      if (state.chartList[payload.shopCode]) {
        if (state.chartList[payload.shopCode][payload.sugGoodsCode]) {
          // 该店铺已存在，商品已存在，数量+1
          const  countForChange = state.chartList[payload.shopCode][payload.sugGoodsCode].count + 1
          Vue.set(state.chartList[payload.shopCode][payload.sugGoodsCode], 'count', countForChange)
          // state.chartList[payload.shopCode][payload.sugGoodsCode].count += 1
        }else {
          // 该店铺已存在，商品不存在，新增商品
          Vue.set(state.chartList[payload.shopCode], payload.sugGoodsCode, {gInfo: payload.good_datail_info, count: 1, sugGoodsCode: payload.sugGoodsCode})
          // 新增商品后，全选商品置为false，同店铺全选置为false
          state.isChartAllSelected = false
          // 此前全店选中，现从chartShopAllList删除店铺
          Vue.delete(state.chartShopAllList, payload.shopCode)
        }
      }else {
        // 店铺、商品均不存在
        // 增加店铺
        Vue.set(state.chartList, payload.shopCode, {})
        // 往店铺中增加商品
        Vue.set(state.chartList[payload.shopCode], payload.sugGoodsCode, {gInfo: payload.good_datail_info, count: 1, sugGoodsCode: payload.sugGoodsCode})
        // 新增商品后，全选商品置为false
        state.isChartAllSelected = false
      }
    },
    // 商品数量减少
    decFromChart(state, payload) {
      const  countForChange = state.chartList[payload.shopCode][payload.sugGoodsCode].count - 1
      Vue.set(state.chartList[payload.shopCode][payload.sugGoodsCode], 'count', countForChange)
      // state.chartList[payload.shopCode][payload.sugGoodsCode].count -= 1
    },
    // 输入商品数量
    inputChangeGoodCount(state, payload) {
      Vue.set(state.chartList[payload.shopCode][payload.sugGoodsCode], 'count', parseInt(payload.count))
      // 判断若已选中，则选中列表的商品数量也需要加1
      if (state.chartActiveList[payload.sugGoodsCode]) {
        Vue.set(state.chartActiveList[payload.sugGoodsCode], 'count', parseInt(payload.count))
      }
    },
    // 全选购物车
    chartAllSelected(state) {
      // 判断若购物车为空则返回
      if (JSON.stringify(state.chartList) === '{}') {
        return;
      }
      // 改变全部选中标志
      state.isChartAllSelected = !state.isChartAllSelected
      // 购物车选中激活列表置空
      state.chartActiveList = {}
      // 若全部选中标志为false,则返回
      if (!state.isChartAllSelected) {
        state.chartShopAllList = {}
        return
      }
      // 若全部选中标志为true,则遍历购物车，往选中激活列表加入商品
      for (let i in state.chartList) {
        Vue.set(state.chartShopAllList, i, {shopCode: i})
        for (let j in state.chartList[i]) {
          Vue.set(state.chartActiveList, state.chartList[i][j].sugGoodsCode, {count: state.chartList[i][j].count, price: state.chartList[i][j].gInfo.price.saleInfo[0].promotionPrice})
        }
      }
    },

    // 选中同店铺商品
    chartShopAll(state, payload) {
      // 判断此前是否全店选中
      if (state.chartShopAllList[payload.shopCode]) {
        state.isChartAllSelected = false
        // 此前全店选中，现从chartShopAllList删除店铺
        Vue.delete(state.chartShopAllList, payload.shopCode)
        // 和遍历chartActiveList删除商品
        for (let i in state.chartList[payload.shopCode]) {
          if (state.chartActiveList[i]) {
            Vue.delete(state.chartActiveList, i)
          }
        }
      }else {
        // 现在进行全店选中，往chartShopAllList增加店铺
        Vue.set(state.chartShopAllList, payload.shopCode, {shopCode: payload.shopCode})
        // 和遍历chartActiveList增加未选中的商品
        for (let i in state.chartList[payload.shopCode]) {
          if (!state.chartActiveList[i]) {
            Vue.set(state.chartActiveList, i, {count: state.chartList[payload.shopCode][i].count, price: state.chartList[payload.shopCode][i].gInfo.price.saleInfo[0].promotionPrice})
          }
        }
        // 判断购物车是否所有商品全部选中
        for (let i in state.chartList) {
          if (!state.chartShopAllList[i]) {
            // 若有一个未选中即退出
            return
          }
        }
        // 到此处即全部选中
        state.isChartAllSelected = true

      }
    }
  },
  actions: {

  },
  getters: {
    // 购物车选中商品总金额
    totalMoney:(state)=>{
      let tempMoney = 0
      // 价格为字符串，带两位小数会出错，字符串去除小数点，直接以整数运算
      for(let i in state.chartActiveList) {
        let tm = state.chartActiveList[i].price
        if(tm.indexOf('.') !== -1) {
          tm = tm.replace('.', '')
        }else {
          tm += '00'
        }
        tm = parseInt(tm)
        // 整数相乘
        tempMoney += state.chartActiveList[i].count * tm
      }
      tempMoney = tempMoney.toString()
      // 往计算结果后两位插入一个小数点，之后转成浮点数并返回结果
      return (parseFloat(tempMoney.slice(0,-2) + '.' + tempMoney.slice(-2))).toFixed(2)
    },
    // 购物车选中商品数量
    totalCount:(state)=>{
      let tempCount = 0
      for(let sug in state.chartActiveList) {
        tempCount += state.chartActiveList[sug].count
      }
      return  tempCount
    },
    // 购物车中猜你喜欢参考商品
    chartGuessLikeParams: (state)=>{
      if (JSON.stringify(state.chartList) === '{}') {
        return []
      }
      let n = 0
      // let randomArr = ['000000010448419552', '000000010619133126', '000000000826141590']
      let randomArr = []
      let tempArr = []
      for (let i in state.chartList) {
        for (let j in state.chartList[i]) {
          if (n < 3) {
            tempArr.push(state.chartList[i][j].sugGoodsCode || randomArr[n])
            // Vue.set(state.chartGuessLikeParams, n, state.chartList[i][j].sugGoodsCode)
            n++
          }
        }
      }
      return tempArr
    }
  }
})
