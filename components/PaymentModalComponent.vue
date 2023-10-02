<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    isOpenModal: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },

    },
  },
  watch: {
    value(newValue) {
      if (newValue) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  },
  methods: {
    closeModal() {
      this.isOpenModal = false;
    },
  },
};
</script>

<template>
  <div class="modal fade show" tabindex="-1" role="dialog" v-if="isOpenModal" >
    <div class="overlay" @click="closeModal"></div>
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <h3>Payment method</h3>
        <button class="btn btn-warning">
          <img src="/icons/payPal.svg" alt="paypal logo">
          BUY NOW
        </button>
        <button class="btn btn-google">
          <img src="/icons/google.svg" alt="google logo">
          PAY
        </button>
        <div class="line">
          <span>OR</span>
        </div>
        <!-- FORM -->
        <CardInfoComponent />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &-content {
    padding: 24px 16px 16px 16px;
    min-width: 320px;
    text-align: center;
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.05);
    .line {
      height: 18px;
      margin-bottom: 16px;
      span {
        z-index: 2;
        background: #fff;
        font-size: 12px;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: -0.36px;
        color: rgba(0, 0, 0, 0.40);
        padding: 0 8px;
      }
      &::after {
        content: '';
        position: absolute;
        background: #E1E1E1;
        width: 100%;
        height: 2px;
        top: 9px;
        left: 0;
      }
    }
    .btn {
      font-weight: 600;
      height: 56px;
    }
    .btn-warning {
      margin-bottom: 16px;
      img {
        width: 50px;
        height: 32px;
        margin-right: 10px;
      }
    }
    .btn-google {
      border: 1px solid #E1E1E1;
      margin-bottom: 16px;
      img {
        width: 24px;
        height: 24px;
        margin-right: 6px;
      }
    }
  }
}
</style>
