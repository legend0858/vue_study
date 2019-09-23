<template>
  <div class="border2">
    <h3 :style="{color:colorWrap.color}">E 结点</h3>
    <button @click="handleClick">改变color为green</button>
  </div>
</template>
<script>
export default {
  components: {},
  inject: [
    'colorWrap',
    'changeColor'
  ],
  methods: {
    handleClick() {
      this.changeColor('green');
    }
  }
};
</script>
