<template>
  <div class="com">
    <h4>Foo Component</h4>
    <!-- <p>{{ $store.state.count }}</p> -->
    <!-- <p>{{ count }}</p> -->
    <!-- <p>{{ $store.state.message.split('').reverse().join('') }}</p> -->
    <!-- <p>计算属性：</p>
    <p>{{ message }}</p>
    <p>{{ message }}</p>
    <p>{{ message }}</p>
    <p>{{ message }}</p>
    <p>localMessage：{{ localMessage }}</p>
    <p>方法：</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p>
    <p>{{ getMessage() }}</p> -->

    <p>{{ $store.getters.remaining }}</p>
    <p>{{ $store.getters.remainingA }}</p>
    <p>{{ $store.getters.hello(2).title }}</p>
    <p>{{ $store.getters.hello(2).title }}</p>
    <p>{{ $store.getters.hello(2).title }}</p>
    <p>{{ $store.getters.hello(2).title }}</p>
    <p>{{ $store.state.count }}</p>

    <div>
      <button @click="$store.commit('increment')">提交 mutation 改变 state</button>
      <br>
      <button @click="$store.commit('asyncIncrement')">提交 mutation 异步改变 state</button>
      <br>
      <button @click="$store.dispatch('increment')">发布 dispatch 执行异步操作</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooCom',
  data () {
    return {
      // const count = this.$store.state.count
      // count: this.$store.state.count
      fooMessage: 'hello foo'
    }
  },

  /**
   * 组件的实例选项，类似于 methods 方法，但是只能当作属性来使用
   * 属性值是什么：就是这个属性方法返回值
   * 注意：这是特殊的属性，不能当做方法去调用，不能 count()，更不能作为事件处理函数
   * 它的作用一般用于：基于原始数据通过一些业务处理产出一些新的派生数据
   */
  computed: {
    message () {
      console.log('computed count called')
      return this.$store.state.message.split('').reverse().join('')
    },
    localMessage () {
      return this.fooMessage.split('').reverse().join('')
    }
    // remaining () {
    //   return this.$store.state.todos.filter(item => !item.completed).length
    // }
    // count () {
    //   return this.$store.state.count
    // }
    // hello () {
    //   const ret = this.$store.getters.hello(2)
    //   console.log(ret)
    //   return 123
    // }
  },

  methods: {
    getMessage () {
      console.log('method getCount called')
      return this.$store.state.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>
