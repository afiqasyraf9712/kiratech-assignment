<template>
  <div class="intro">
    <!-- intro here -->
    <div class="container">
      <div class="row position-relative">
        <div class="col position-absolute">
          <div class="d-grid gap-2">
            <div class="p-3"></div>
            <div class="d-flex align-items-center">
              <img
                src="../assets/images/Avatar.png"
                alt=""
                class="img-fluid img"
              />
              <div class="intro-text mb-4 mx-3">
                <span class="name-text">John Doe</span>
                <span>Last online: 2 days ago</span>
              </div>
              <div class="row cards mb-2">
                <div class="col card">
                  <div class="card-body">
                    <font-awesome-icon
                      class="icon"
                      icon="fa-solid fa-paper-plane"
                    />
                    <span class="text"> Send Message </span>
                  </div>
                </div>
                <div class="col card card-alternate">
                  <div class="d-flex justify-content-center card-body">
                    <font-awesome-icon class="icon" icon="fa-solid fa-plus" />
                    <span class="text"> Add Friend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
};
</script>
<style lang="scss">
.intro {
  margin-top: 1.5rem;
  height: 11rem;
  background-color: #34bad8;

  img {
    width: 11rem;
  }
}

.fill {
  margin-top: 1rem;
}

.intro-text {
  //   margin-left: 2rem;
  color: #fff;

  .name-text {
    font-size: 3rem;
    font-weight: bold;
    display: block;
  }

  .extra-text {
    font-size: 1rem;
  }
}

.cards {
  margin-left: 1rem;

  .card {
    width: 13rem;
    margin-left: 1rem;
    justify-content: center;

    .icon {
      height: 1rem;
      margin-right: 0.5rem;
      color: #34bad8;
    }

    .text {
      font-size: 1rem;
      color: #34bad8;
      font-weight: bold;
    }
  }

  .card:hover {
    background-color: transparent;
    color: #fff;

    .icon {
      color: #fff;
    }

    .text {
      color: #fff;
    }
  }

  .card-alternate {
    background-color: transparent;
    width: 13rem;
    margin-left: 1rem;

    .icon {
      height: 1rem;
      margin-right: 0.5rem;
      color: #fff;
      margin-top: 0.3rem;
    }

    .text {
      font-size: 1rem;
      color: #fff;
      font-weight: bold;
    }
  }

  .card-alternate:hover {
    background-color: #fff;
    color: #34bad8;

    .icon {
      color: #34bad8;
    }

    .text {
      color: #34bad8;
    }
  }
}

.border {
  padding-bottom: 9rem;
  padding-right: 10rem;
  border-width: 5px !important;
}
</style>
