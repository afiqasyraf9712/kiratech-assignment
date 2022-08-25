<template>
  <main>
    <div id="main-wrapper">
      <Header />
      <!-- page wrapper -->
      <div class="page-wrapper">
        <Intro />
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <!-- end page wrapper -->
    </div>
  </main>
</template>
<script>
import Header from "@/components/Header.vue";
import Intro from "@/components/Intro.vue";

export default {
  name: "Master",
  components: {
    Header,
    Intro,
  },
};
</script>
