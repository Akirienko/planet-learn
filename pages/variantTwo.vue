<script>
export default {
    data() {
      return {
          myList: [
              { item: 'Exclusive access to <span class="special-smatr-text-light">350+</span> learning programs' },
              { item: 'Personalized course plan' },
              { item: 'Comfy learning schedule made by you' },
              { item: '<span class="special-smatr-text-light">24/7</span> tutor support in a secure chat' },
              { item: 'Lifetime access to materials' },
          ],
          mainIcon: '/icons/smartStar.svg',
          logo: '/icons/smartLogo.svg',
          isOpenModal: false,
          mobile: false,
      };
  },
  methods: {
    openModal() {
      this.isOpenModal = true;
    },
  },
};
</script>

<template>
  <section class="smart">
    <LogoComponent :logo="logo" />
    <div class="bacground-image">
      <img src="~/assets/image/smart/smartBG.webp" alt="">
    </div>
    <div class="container">
      <div class="smart-wrap">
        <div class="smart-buy">
          <h1>
            <span class="special-smatr-text">Start</span> your learning journey
            <span class="special-smatr-text">now</span>
          </h1>
          <h5>
            Get a <span class="special-smatr-text">Planet</span><span>Learn</span> plan to rock self-learning
          </h5>
          <button
            class="btn smart-buy__button special-smatr-text"
            type="button"
            @click="openModal()"
          >
            Get my plan
          </button>
        </div>
        <div class="smart-card">
          <img class="rocket" src="@/assets/image/smart/rocket.webp" alt="rocket">
          <img class="ball" src="/icons/ball.svg" alt="ball">
          <TimerComponent :custom-class="`absolute smart-timer`" />
          <ListComponent :list="myList" :icon="mainIcon" />
          <button class="btn smart-card__button special-smatr-text-light">
            <img src="/icons/blueLock.svg" alt="">
            Safe & secure payment
          </button>
          <p class="smart-card__rules">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
            you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
            at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy ,
            Money Back , and Subscription Terms .
          </p>
        </div>
      </div>
    </div>
    <PaymentModalComponent v-model="isOpenModal" :page-class="`planet`" />

  </section>
</template>


<style lang="scss" scoped>
.smart {
  padding: 200px 0 24px;
  height: 100vh;
  color: #FFF;
  .bacground-image {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
  }
  &-wrap {
    .mobile {
      @media (min-width:1024px) {
        display: none;
      }
    }
    .desktop {
      display: none;
      @media (min-width:1024px) {
        display: flex;
      }
    }
    .smart-buy {
      border-radius: 24px 24px 0 0;
      background: rgba(0, 0, 0, 0.60);
      padding: 16px 16px 0 16px;
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
        width: 100%;
        padding: 16px 0;
        background: #FFF;
        font-weight: 700;
        &:hover {
          background: #00CA14;
        }
      }
    }
    .smart-card {
      border-radius: 0 0 24px 24px;
      background: rgba(0, 0, 0, 0.60);
      padding: 16px;
      .ball, .rocket {
        display: none;
      }
      position: unset;
      &__button {
        width: 100%;
        padding: 16px 0;
        border: 1px solid rgba(0, 0, 0, 0.20);
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 24px;
        background: rgba(0, 0, 0, 0.20);
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
  @media (min-width:1024px) {
    padding: 140px 0;
    display: flex;
    align-items: center;
    &-wrap {
      display: flex;
      justify-content: center;
      .smart-buy {
        max-width: 480px;
        background: transparent;
        h1 {
          margin-bottom: 24px;
          font-size: 40px;
          text-transform: uppercase;
          font-weight: 400;
        }
        h5 {
          max-width: 375px;
        }
        &__button {
          width: 280px;
        }
      }
      .smart-card {
        border-radius: 32px;
        border: 4px solid rgba(255, 255, 255, 0.40);
        background: rgba(0, 0, 0, 0.40);
        backdrop-filter: blur(10px);
        max-width: 480px;
        padding: 24px;
        position: relative;
        .rocket {
          display: block;
          position: absolute;
          right: -155px;
          top: 115px;
          width: 277px;
          height: 277px;
          z-index: 11;
        }
        .ball {
          display: block;
          position: absolute;
          width: 80px;
          object-fit: contain;
          z-index: -1;
          height: 80px;
          top: -50px;
          left: -50px;
        }
        &__button {
          width: 100%;
        }
      }
    }
  }
}
</style>
