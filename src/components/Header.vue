<template>
  <div class="topbar">
    <nav class="top-navbar navbar-expand-md navbar-dark">
      <div class="d-flex navbar-collapse justify-content-between mt-4">
        <div class="logo">
          <router-link to="/">
            <img
              src="../assets/images/Logo.png"
              alt="kiratech-logo"
              class="img-fluid"
            />
          </router-link>
        </div>
        <div class="m-4 p-5">
          <div class="row">
            <div class="col-md-4">
              <font-awesome-icon
                class="header-icon"
                icon="fa-regular fa-bell"
              />
            </div>
            <div class="col-md-4">
              <font-awesome-icon class="header-icon" icon="fa-solid fa-gear" />
            </div>
            <div class="col-md-4">
              <font-awesome-icon
                class="header-icon"
                icon="fa-solid fa-arrow-right-from-bracket"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss">
.header-icon {
  height: 1.5rem;
  margin-left: 1rem;
}

.logo {
  display: block;
  padding-left: 5rem;

  img {
    width: 50%;
  }
}
</style>
