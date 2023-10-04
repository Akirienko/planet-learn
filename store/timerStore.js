import { defineStore } from 'pinia';

export const useTimerStore = defineStore({
  id: 'timer',
  state: () => ({
    duration: 180,
  }),
  getters: {
    progressBarWidth(state) {
      return (1 - state.duration / 180) * 100;
    },
    localDuration() {
      if (localStorage.getItem('duration')) {
        return this.duration = +localStorage.getItem('duration')
      }
    },
  },
  actions: {
    decrementDuration() {
      this.duration--;
      this.saveDurationToLocalStorage(this.duration);
    },
    saveDurationToLocalStorage(duration) {
      localStorage.setItem("duration", duration);
    },
    initTimer() {
      return this.duration = +localStorage.getItem('duration');
    }
  },
});
