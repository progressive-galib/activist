export const useSidebar = defineStore("sidebar", {
  state: () => ({
    collapsed: useLocalStorage("collapsed", false),
    collapsedSwitch: useLocalStorage("collapsedSwitch", false),
  }),

  actions: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    toggleCollapsedSwitch() {
      this.collapsedSwitch = !this.collapsedSwitch;
    },
  },
});
