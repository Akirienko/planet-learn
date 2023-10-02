<script>
import TimerComponent from '~/components/TimerComponent.vue';

export default {
    data() {
        return {
            myList: [
                { item: 'Exclusive access to <span class="special-planet-text">350+</span> learning programs' },
                { item: 'Personalized course plan' },
                { item: 'Comfy learning schedule made by you' },
                { item: '<span class="special-planet-text">24/7</span> tutor support in a secure chat' },
                { item: 'Lifetime access to materials' },
            ],
            mainIcon: '/icons/orangeStar.svg',
            logo: '/icons/planetLogo.svg',
            isOpenModal: false,
        };
    },
    components: { TimerComponent },
    methods: {
      openModal() {
        this.isOpenModal = true;
      },
    }
};
</script>

<template>
  <section class="planet">
    <LogoComponent :logo="logo" />
    <div class="bacground-image">
      <img src="~/assets/image/planet/planetBG.webp" alt="">
    </div>
    <div class="container">
      <div class="planet-wrap">
        <TimerComponent />
        <div class="planet-buy">
          <h1>
            Start your learning journey now
          </h1>
          <h5>
            Get a <span class="special-planet-text">Planet</span><span>Learn</span> plan to rock self-learning
          </h5>
          <button
            class="btn btn-dark planet-buy__button"
            type="button"
            @click="openModal()"
          >
            Get my plan
          </button>
        </div>
        <div class="planet-card">
          <ListComponent :list="myList" :icon="mainIcon" />
          <button class="btn planet-card__button">
            <img src="/icons/orangeLock.svg" alt="">
            Safe & secure payment
          </button>
          <p class="planet-card__rules">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
            you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
            at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy ,
            Money Back , and Subscription Terms .
          </p>
        </div>
      </div>
    </div>
    <PaymentModalComponent v-model="isOpenModal"  />

  </section>
</template>


<style lang="scss" scoped>
.planet {
  padding: 80px 0 24px;
  .bacground-image {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0.04;
  }
  &-wrap {
    .planet-buy {
      h1 {
        margin-bottom: 16px;
      }
      h5 {
        margin-bottom: 32px;
        font-size: 24px;
        font-weight: 600;
        span {
          font-weight: 800;
        }
      }
      &__button {
        width: 320px;
        padding: 16px 0;
        margin-bottom: 32px;
      }
    }
    .planet-card {
      &__button {
        width: 320px;
        padding: 16px 0;
        border: 1px solid rgba(0, 0, 0, 0.20);
        color: #01C120;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 24px;
        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
          object-fit: contain;
        }
      }
      &__rules {
        font-size: 12px;
        opacity: .5;
        text-align: center;
      }
    }
  }
}
</style>
