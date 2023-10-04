<script>
export default {
  methods: {
    redirectToRandom() {
      const variants = ['/variantOne', '/variantTwo'];
      const randomIndex = Math.floor(Math.random() * variants.length);
      const randomVariant = variants[randomIndex];

      this.$router.push(randomVariant);
    }
  }
}
</script>

<template>
  <section class="welcome">
    <div class="container">
      <div class="welcome-backgroung absolute-center">
        <img src="~/assets/image/moon.webp" alt="moon">
      </div>
      <div class="welcome-block">
        <h1 class="welcome-block__title">Welcome to <span>Planet</span> test mode</h1>
        <p class="welcome-block__subtitle">Please make your choice</p>
        <div class="welcome-block__buttons">
          <Nuxt-link to="/variantOne" class="btn btn-warning">Variant 1</Nuxt-link>
          <Nuxt-link to="/variantTwo" class="btn btn-primary">Variant 2</Nuxt-link>
          <button class="btn btn-outline-info" @click="redirectToRandom">Random</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.welcome {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &-backgroung {
    opacity: .3;
    img {
      max-width: 1200px;
    }
  }
  &-block {
    background: rgba($color: #fff, $alpha: .9);
    padding: 40px 20px;
    text-align: center;
    border: 2px solid #FF8D24;
    border-radius: 20px;
    max-width: 740px;
    margin: 0 auto;
    &__title {
      font-weight: 800;
      span {
        color: #FF8D24;
      }
    }
    &__subtitle {
      margin-bottom: 20px;
      @media (min-width: 1024px) {
        font-size: 20px;
      }
    }
    &__buttons {
      display: flex;
      justify-content: center;
      a {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
