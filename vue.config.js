// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 37.5
      })
  },
  devServer: {
    open: true,
    host: '172.20.10.6',
    port: 8080,
    https: false,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/lib': {
        target: 'https://lib.suning.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/lib': ''//请求的时候使用这个api就可以
        }
      },
      '/homeRecom': {
        // https://f.m.suning.com/api/getWapIndexProTag.do?u=7194426173&c=156913720153348882&cityCode=010&sceneIds=11-37&count=100&flag=1&channel=322&sceneIds2=11-37&count2=20&terminal=wap&callback=Zepto1570410027455
        target: 'https://f.m.suning.com/api/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/homeRecom': ''//请求的时候使用这个api就可以
        }
      },
      '/toutiao': {
        // https://f.m.suning.com/wapIndex/getShjcsh.do
        // ?u=7194426173&c=156913720153348882&cityId=010&sceneIds1=10-61&sceneIds2=10-62&sceneIds3=10-69
        // &sceneIds4=10-56&sceneIds5=10-57&sceneIds6=15-35&sceneIds7=19-16&sceneIds8=12-62&sceneIds9=19-28
        // &sceneIds10=19-38&sceneIds11=19-15&sceneIds13=9-63&sceneIds14=13-50&sceneIds15=13-47&sceneIds16=13-71
        // &sceneIds18=25-74&districtCode=0100100&scount=2&count=6&num10=3&date=1&_=1570412080143&callback=recPd
        target: 'https://f.m.suning.com/wapIndex/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/toutiao': ''//请求的时候使用这个api就可以
        }
      },
      '/gdetail': {
        target: 'https://pas.suning.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/gdetail': ''//请求的时候使用这个api就可以
        }
      },
      '/productm': {
        target: 'https://product.m.suning.com/pds-web/ajax/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/productm': ''//请求的时候使用这个api就可以
        }
      },
      // https://mzfs.suning.com/mzis/biQiang5.do?custNum=7194426173&c=156913720153348882&cityId=025&sceneIds=22-12&page=1&size=10&ids=bq-jx-head-lb,bq-jx-head-fk&id=undefined&_=1570677450554&callback=Zepto1570677450390
      '/mzfsmzis': {
        target: 'https://mzfs.suning.com/mzis/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/mzfsmzis': ''//请求的时候使用这个api就可以
        }
      },
      // https://show.m.suning.com/higou/enroll/jsonpNew/listEnrollNew_100414_2_10_1570693433322_cateCallback.html?_=1570693433323&callback=cateCallback
      '/showM': {
        target: 'https://show.m.suning.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/showM': ''//请求的时候使用这个api就可以
        }
      },
      '/tuijian': {
        target: 'https://tuijian.suning.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/tuijian': ''//请求的时候使用这个api就可以
        }
      },
      '/aaa1': {
        // http://ds.suning.com/
        target: 'https://ds.suning.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/aaa1': ''//请求的时候使用这个api就可以
        }
      },
      '/msinode': {
        // http://ds.suning.com/
        target: 'https://msinode.suning.com/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: true,
        changOrigin: true,//允许跨域
        pathRewrite: {
          '^/msinode': ''//请求的时候使用这个api就可以
        }
      }

    }
  }
}
