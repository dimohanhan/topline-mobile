/**
 * 初始化
 * 使用容器中的数据
 *  在任何组件中都可以通过 this.$store 来访问这里的 store 容器实例
 *    因为 Vue 将 store 挂载到了 Vue.prototype 原型对象中了，而所有组件都是 Vue 的实例
 *    1. 直接在模板中 this.$store.state（不推荐）
 *    2. 将容器数据初始化到组件的 data 中
 *       可以使用，普通数据类型不会响应更新了，引用类型可以（知道就行，不要这样使用）
 *       使用场景：初始化的时候使用一下，之后不希望被数据改变了
 *    3. 使用计算属性（推荐）
 *       计算属性会将第1次的运算结果缓存起来，下次使用直接从缓存中拿
 *       只有当属性方法中使用的数据发生改变的时候，才会重新调用
 *       提示：计算属性是 Vue 本身的特性，不是 Vuex 提供的，也可以使用 computed 计算属性基于组件其它数据成员（例如data、props）进行派生
 *    4. 使用 methods 方法（不推荐）
 *       每次使用都会进行调用，数据改变也会重新调用
 *       注意：事件处理函数还是 methods 方法
 *    5. mapState 辅助函数
 *  非组件模块需要单独加载访问
 *    import store from 'store模块路径
 *    store.xxxx
 * 修改容器中的数据
 *    注意：不要直接 store.state.xxx = xxx（调试工具观测不到数据改变的历史记录）
 *    正确做法：通过mutation修改数据状态
 *    异步操作：使用 Action，提交 mutation
 *    注意：注意：注意：mutation 中不能执行异步操作修改 state。
 *        历史记录中的数据状态是有问题的
 *
 *    如果需要执行异步操作修改 state 状态，则：使用 action
 *       在action 中做两件事儿：1. 执行异步操作 2. 提交 mutation 修改容器状态
 *       注意：不要在 action 中直接修改容器状态，无法被调试工具观测记录到
 *        因为调试工具只能记录 mutation 的历史改变
 */

// 1. npm i vuex

// 2. 配置
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'

Vue.use(Vuex)

// 3. 创建容器实例
const store = new Vuex.Store({
  /**
   * 容器的状态（驱动视图更新的数据）
   */
  state: {
    count: 0,
    message: 'Hello Vuex!',
    todos: [
      { id: 1, title: '吃饭', completed: false },
      { id: 2, title: '睡觉', completed: false },
      { id: 3, title: '吃饭22', completed: true },
      { id: 4, title: '吃饭33', completed: false }
    ]
  },

  /**
   * 容器的 getters，说白了就是容器的计算属性
   * 容器的计算属性接收一个默认参数：state 数据状态对象
   */
  getters: {
    remaining: state => {
      return state.todos.filter(item => !item.completed).length
    },
    remainingA: (state, getters) => {
      return getters.remaining + 10
    },
    hello: state => {
      return id => {
        return state.todos.find(todo => todo.id === id)
      }
    }
    // hello: () => () => {

    // }
  },

  /**
   * 容器的 methods，用来修改 state 数据状态的
   * mutation 函数默认接收 state
   */
  mutations: {
    increment (state) {
      state.count++
    },
    asyncIncrement (state) {
      setTimeout(() => {
        state.count++
      }, 1000)
    }
  },

  /**
   * 容器的 action
   * 1. 执行异步操作
   * 2. 提交 mutation 修改数据
   * 注意：不要在 action 中直接修改容器状态
   */
  // actions: {
  //   increment (context) {
  //     setTimeout(() => {
  //       // state.count++
  //       // context.commit('increment')
  //       context.state.count++
  //     }, 1000)
  //   }
  // }
  actions
})

// 4. 导出容器
export default store

// 5. 在 main.js 中将 store 配置到 Vue 实例的 store 选项中
