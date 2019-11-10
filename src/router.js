import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// const Home = ()=>{import('./views/Home.vue')}
const Category = () => import('./views/Category.vue')
const MustList = () => import('./views/MustList.vue')
const Chart = () => import('./views/Chart.vue')
const Profile = () => import('./views/Profile.vue')
const Login = () => import('./views/Login.vue')
const Good_Detail = () => import('./views/Good_Detail.vue')
const Search_route_path = () => import('./views/Search_route_path.vue')
// const ShopUnit = () => import('./views/ShopUnit.vue')
const shopHomePage = () => import('./components/ShopUnit/shopHomePage.vue')
const ShopHitGoods = () => import('./components/ShopUnit/ShopHitGoods.vue')
const ShopGoodsDisplay = () => import('./components/ShopUnit/ShopGoodsDisplay.vue')
const ShopNew = () => import('./components/ShopUnit/ShopNew.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/category',
      name: 'category',
      component: Category
    },

    {
      path: '/mustlist',
      name: 'mustlist',
      component: MustList
    },

    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },

    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/good_detail',
      name: 'good_detail',
      component: Good_Detail
    },
    {
      path: '/search_route_path',
      name: 'search_route_path',
      component: Search_route_path
    },
    {
      path: '/shophomepage',
      name: 'shophomepage',
      component: shopHomePage
    },
    {
      path: '/shophitgoods',
      name: 'shophitgoods',
      component: ShopHitGoods
    },
    {
      path: '/shopgoodsdisplay',
      name: 'shopgoodsdisplay',
      component: ShopGoodsDisplay
    },
    {
      path: '/shopnew',
      name: 'shopnew',
      component: ShopNew
    }

  ]
})
