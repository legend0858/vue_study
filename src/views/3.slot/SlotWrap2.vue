<template>
  <SlotDome :list="list">
    <template v-slot:personInfo="personInfoProp">
      {{personInfoProp.index + 1}}.
      <span>{{personInfoProp.user.name}}，</span>
      <span>今年{{personInfoProp.user.age}}岁，</span>
      <span v-if="personInfoProp.user.single">单身，</span>
      <span v-else>不是单身，</span>
      <span v-if="personInfoProp.user.stu">学生</span>
      <span v-else>不是学生</span>
    </template>
  </SlotDome>
</template>
<script>
import SlotDome from "./Slot2";
export default {
  name: "SlotWrap2",
  components: {
    SlotDome
  },
  filters: {},
  mixins: [],
  props: {},
  data() {
    return {
      list: [
        {
          name: "Kate",
          age: 26,
          single: true,  // 是否单身
          stu: false     // 是否是学生
        },
        {
          name: "Kevin",
          age: 23,
          single: true,
          stu: true
        },
        {
          name: "Harden",
          age: 28,
          single: false,
          stu: false
        },
        {
          name: "Jimmy",
          age: 29,
          single: false,
          stu: true
        },
      ]
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>
<style lang="less"></style>
