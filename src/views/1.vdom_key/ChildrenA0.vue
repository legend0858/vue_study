<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="orderAsc = !orderAsc">无子节点换位</button>
    <div v-if="orderAsc">
      <ChildrenB />
      <ChildrenD />
    </div>
    <div v-else>
      <ChildrenD />
      <ChildrenB />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenD from "./ChildrenD";

export default {
  components: {
    ChildrenB,
    ChildrenD
  },
  data() {
    return {
      orderAsc: true
    };
  }
};
</script>
