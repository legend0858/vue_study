<template>
  <div class="border">
    <h1 :style="{color:color}">A 结点</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
import Vue from "vue";
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  data() {
    return {
      color: "blue",
    };
  },
  provide() {
    this.colorWrap = Vue.observable({
      color: this.color
    });
    return {
      colorWrap: this.colorWrap,
      changeColor: this.changeColor
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.color = color;
      } else {
        this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
