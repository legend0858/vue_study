<template>
  <ul>
    <li v-for="(user,index) in list" :key="index" class="li">
      <slot name="personInfo" :user="user" :index="index"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  name: "",
  components: {},
  filters: {},
  mixins: [],
  props: {
    list:Array,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>
<style lang="less">
  .li {
    border-bottom: 1px dashed #CCC;
    list-style: none;
  }
</style>
