<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <ul class="custom-list">
    <li v-for="(item, index) in list" :key="index" class="custom-list__item">
      <img :src="icon" alt="Icon" />
      <span v-html="item.item"></span>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
.custom-list {
  padding: 0;
  margin-bottom: 24px;
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
    img {
      width: 24px;
      margin-right: 10px;
    }
    span {

    }
  }
}
</style>
