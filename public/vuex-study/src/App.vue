<template>
  <div>
    <p>{{ $store.state.count }}</p>
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from './components/Foo'
import Bar from './components/Bar'

export default {
  name: 'App',
  components: {
    Foo,
    Bar
  }
}
</script>

<style>
.com {
  border: 1px solid #000;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
