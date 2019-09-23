<template>
  <div>
    <a-tabs>
      <a-tab-pane key="common" tab="基础用法">
        <SlotWrap1 />
      </a-tab-pane>
      <a-tab-pane key="scope" tab="作用域插槽">
        <SlotWrap2 />
      </a-tab-pane>
      <a-tab-pane key="abbr" tab="各种缩写">
        <SlotWrap3 />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import SlotWrap1 from "./SlotWrap1";
import SlotWrap2 from "./SlotWrap2";
import SlotWrap3 from "./SlotWrap3";

export default {
  name: "SlotIndex",
  components: {
    SlotWrap1,
    SlotWrap2,
    SlotWrap3
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
<style lang="less"></style>
