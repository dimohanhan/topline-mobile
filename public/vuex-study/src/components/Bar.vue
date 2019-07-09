<template>
  <div class="com">
    <h4>Bar Component</h4>
    <!-- <p>count: {{ count }}</p>
    <p>countAlias: {{ countAlias }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p> -->

    <!-- <p>count：{{ count }}</p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BarCom',
  data () {
    return {
      localCount: 10
    }
  },

  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })

  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   // 等价于 count: state => state.count,
  //   'count'
  // ])

  // computed: {
  //   localComputed () { /* ... */ },
  //   // 使用对象展开运算符将此对象混入到外部对象中
  //   ...mapState({
  //     // ...
  //   })
  // }
}
</script>

<style>

</style>
