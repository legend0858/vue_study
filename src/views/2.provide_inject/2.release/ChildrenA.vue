<template>
  <div class="border">
    <h1 :style="{color:colorWrap.color}">A 结点</h1>
    <button @click="() => changeColor()">改变color</button>
    <ChildrenB />
    <ChildrenC />
    <ChildrenD />
  </div>
</template>
<script>
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
      colorWrap: {
        color: "red"
      },
    };
  },
  provide() {
    return {
      colorWrap: this.colorWrap,
      changeColor: this.changeColor,
    };
  },
  methods: {
    changeColor(color) {
      if (color) {
        this.colorWrap.color = color;
      } else {
        this.colorWrap.color = this.colorWrap.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
