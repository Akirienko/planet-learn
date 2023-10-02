<script>
export default {
  data() {
    return {
      duration: 10,
      isTime: true,
    };
  },
  computed: {
    timer() {
      return this.duration;
    },
    progressBarWidth() {
      return (1 - this.duration / 10) * 100;
    },
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    },
  },
  mounted() {
    setInterval(() => {
      this.duration--;
      if (this.duration <= 0) {
        this.duration = 0;
        this.isTime = false;

        
        console.log("Таймер завершено!");
      }
    }, 1000);
  },
};
</script>

<template>
  <div class="timer-card" :class="isTime ? '' : 'time-over'">
    <div class="timer-card__price">
      <h5 class="timer-card__price_title">
        3-day trial for
        <span class="special-planet-text">
          $0.99
        </span>
      </h5>
      <p class="timer-card__price_discont">
        Then $9.99
      </p>
      <span class="timer-card__price_full_price">
         {{ isTime ? '$39.99/week' : 'Then $39.99/week' }}
      </span>
    </div>
    <div class="timer-card__timer">
      <div class="green_line" :style="{ width: 'calc(100% - ' + progressBarWidth + '%)' }"></div>
      <span class="time">{{ formatTime(timer) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timer-card {
  border: 1px solid #CDCDCD;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06);
  padding: 12px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  &.time-over {
    justify-content: center;
    text-align: center;
    .timer-card__timer {
      display: none;
    }
    .timer-card__price {
      &_discont {
        display: none;
      }
      &_full_price {
        font-size: 16px;
        text-decoration: none;
        opacity: 1;
      }
    }
  }
  &__price {
    &_title {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    &_full_price {
      font-size: 14px;
      font-weight: 600;
      line-height: 140%;
      opacity: 0.4;
      text-decoration: line-through;
    }
  }
  &__timer {
    width: 110px;
    height: 47px;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .green_line {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: #00CA14;
      left: 0;
      top: 0;
    }
    .time {
      z-index: 2;
      color: #FFF;
      font-size: 24px;
      font-weight: 600;
      line-height: 140%;
    }
  }
}
</style>
