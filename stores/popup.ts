import { defineStore } from "pinia";

export const usePopupStore = defineStore("popup", {
  state: () => ({
    state: false,
    name: "",
  }),
  getters: {},
  actions: {
    setPopup(values: string) {
      this.state = true;
      this.name = values;
      document.querySelector("#__nuxt")?.classList.add("blur");
    },
    clearPopup() {
      this.state = false;
      this.name = "";
      document.querySelector("#__nuxt")?.classList.remove("blur");
    },
  },
});
