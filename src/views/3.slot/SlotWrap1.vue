<template>
  <SlotDemo>
    <template v-slot:title>
      <h2>我是标题君</h2>
    </template>

    <p>我是段落1</p>
    <p>我是段落2</p>

    <template v-slot:content>
      <p class="cont">我是正文君</p>
      <p class="cont">我是正文君</p>
      <p class="cont">我是正文君</p>
      <p class="cont">我是正文君</p>
    </template>

    <p>我是段落3</p>
    <p>我是段落4</p>

  </SlotDemo>
</template>
<script>
import SlotDemo from "./Slot1";
export default {
  name: "",
  components: {
    SlotDemo
  },
  filters: {},
  mixins: [],
  props: {},
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
  .cont {
    color:blue;
  }
</style>
