<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const defaultLayout = "master";

export default {
  name: "app",
  components: {},
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    },
  },
};
</script>

<style lang="scss">
@import "assets/styles/app.scss";
</style>
