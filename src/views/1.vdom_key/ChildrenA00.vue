<template>
  <div class="border">
    <h1>A 结点</h1>
    <button @click="orderAsc = !orderAsc">带子节点换位</button>
    <div v-if="orderAsc">
      <ChildrenB />
      <ChildrenC>
        <ChildrenE />
        <ChildrenF />
      </ChildrenC>
    </div>
    <div v-else>
      <ChildrenC>
        <ChildrenE />
        <ChildrenF />
      </ChildrenC>
      <ChildrenB />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";

export default {
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenE,
    ChildrenF
  },
  data() {
    return {
      orderAsc: true
    };
  }
};
</script>
