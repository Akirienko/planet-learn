<script>
import { useTimerStore } from '@/store/timerStore'

export default {
  data() {
    return {
      isTime: true,
      useTimer: useTimerStore(),
      lastSecond: false,
    };
  },
  props: {
    customClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    },
  },
  mounted() {
    const timer = +this.useTimer.localDuration;

    if (timer) {
      this.useTimer.initTimer()
    }

    const intervalId = setInterval(() => {
      this.useTimer.decrementDuration()
      if (this.useTimer.duration <= 10) {
        this.lastSecond = true;
      }
      if (this.useTimer.duration <= 0) {
        clearInterval(intervalId);
        this.isTime = false;
      }
    }, 1000);
  },
};

</script>

<template>
  <div class="timer-card" :class="[customClass, isTime ? '' : 'time-over']">
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
    <div class="timer-card__timer" :class="lastSecond ? 'last-second' : ''">
      <div class="line" :style="{ width: 'calc(100% - ' + useTimer.progressBarWidth + '%)' }"></div>
      <span class="time">{{ formatTime(useTimer.duration) }}</span>
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
  &.absolute {
    position: absolute;
    width: 100%;
    top: -120px;
    left: 0;
    width: -webkit-fill-available;
    @media (min-width:1024px) {
      position: relative;
      top: 0;
    }
  }
  &.smart-timer {
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.60);
    border: none;
    .timer-card__price_title {
      color: #66EDFF;
      span {
        color: #66EDFF;
      }
    }
    .line {
      background: #4EAAFF;
    }
    @media (min-width:1024px) {
      background: transparent;
    }
  }
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
    &.last-second {
      border: 2px solid rgb(255, 0, 0);
      box-shadow: 0px 0px 10px 0px rgba(255, 0, 0, 0.80);
    }
    .line {
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
  @media (min-width:1024px) {
    border: none;
    box-shadow: none;
    &.time-over {
      justify-content: flex-start;
      text-align: left;
      .timer-card__price {
        &_full_price {
          font-size: 20px;
        }
      }
    }
    &__price {
      &_title {
        font-size: 24px;
      }
      &_discont {
        font-size: 20px;
      }
      &_full_price {
        font-size: 16px;
      }
    }
  }
}
</style>
