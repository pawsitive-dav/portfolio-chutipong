import { defineStore } from 'pinia';

export const useWebStore = defineStore('webStore', {
  state: () => ({
    websiteRunning: false,
  }),
  actions: {
    enableWebsiteRunning() {
      this.websiteRunning = true;
    },

    disableWebsiteRunning() {
      this.websiteRunning = false;
    },
  },
});
