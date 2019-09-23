<template>
  <div>
    <a-tabs>
      <a-tab-pane key="ChildrenA0" tab="开发">
        <ChildrenA0 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA1" tab="完成">
        <ChildrenA1 />
      </a-tab-pane>
      <a-tab-pane key="ChildrenA2" tab="优化实现">
        <ChildrenA2 />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import ChildrenA0 from "./1.dev/ChildrenA";
import ChildrenA1 from "./1.dev/ChildrenA";
import ChildrenA2 from "./1.dev/ChildrenA";
/*import ChildrenA1 from "./2.release/ChildrenA";
import ChildrenA2 from "./3.optimize/ChildrenA";*/
export default {
  name: "VdomeKey",
  components: {
    ChildrenA0,
    ChildrenA1,
    ChildrenA2,
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
.border,
.border1,
.border2 {
  border: 1px solid #000;
  padding: 10px 0;
  margin: 10px 10px 0;
}
.border1 {
  border-color: #ccc;
}
.border2 {
  border-color: #eee;
}
</style>
