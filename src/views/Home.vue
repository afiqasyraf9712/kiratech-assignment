<template>
  <div class="home">
    <user-list />
  </div>
</template>

<script>
import UserList from "../components/UserList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { UserList },
};
</script>
<style lang="scss"></style>
