import Vue from 'vue'
import Vuex from 'vuex'
// import { stringify } from 'querystring'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 获取user个人信息，存到本地，并且转换成json形式，发送给头部。
    // 初始化的时候，从本地获取用户信息，里面有token等内容
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    // 接收 state和user，让传进来的user给state中的user
    // 持久化到本地存储，防止页面刷新，数据丢失
    setUser (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {

  }
})
