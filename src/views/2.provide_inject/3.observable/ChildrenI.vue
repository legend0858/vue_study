<template>
  <div class="border2">
    <h3 :style="{color:colorWrap.color}">I 结点</h3>
  </div>
</template>
<script>
export default {
  components: {},
  inject: [
    'colorWrap'
  ],
};
</script>
