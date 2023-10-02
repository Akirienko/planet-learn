<script>
export default {
  props: {
    logo: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="logo">
    <img :src="logo" alt="logo">
  </div>
</template>


<style lang="scss" scoped>
  .logo {
    width: 100%;
    position: fixed;
    padding-top: 10px;
    top: 0;
    left: 20px;
    z-index: 100;
    backdrop-filter: blur(2px);
    img {
      width: 180px;
      height: 40px;
    }
  }

</style>
