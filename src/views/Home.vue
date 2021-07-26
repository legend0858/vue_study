<template>
  <div id="nav">
    <p><router-link :to="`/vdom_key`">1. 虚拟DOM与key</router-link></p>
    <p><router-link :to="`/provide_inject`">2. provide/inject</router-link></p>
    <p><router-link :to="`/slot`">3. slot插槽</router-link></p>
    <p><router-link :to="`/exercise`">4. 思考题答案</router-link></p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="less">
#nav {
  /*display: inline-block;
  width: 250px;
  text-align: left;*/
  padding: 30px;
  a {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
