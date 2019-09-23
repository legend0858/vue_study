<template>
  <div>
    <slot name="title"></slot>
    <slot name="content"></slot>
    <slot></slot>
    <slot name="anthor">liuyue</slot>
  </div>
</template>
<script>
export default {
  name: "Slot1",
  components: {},
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
