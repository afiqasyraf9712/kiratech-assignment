<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="input-group search">
        <input
          class="form-control"
          type="text"
          v-model="searchName"
          id="searchName"
          placeholder="Search for a user..."
        />
      </div>
    </div>
    <div class="card border-white" style="width: 104%; margin-left: -2%">
      <div class="card-body">
        <div class="d-flex row">
          <div class="col-md-2">
            <div class="d-flex justify-content-start ms-5">
              <p class="col-name ms-4">Date of Birth</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="d-flex justify-content-start">
              <p class="col-name">Name</p>
            </div>
          </div>
          <div class="col-md-1">
            <div class="d-flex justify-content-start">
              <p class="col-name">Gender</p>
            </div>
          </div>
          <div class="col-md-2">
            <div class="d-flex justify-content-start">
              <p class="col-name">Country</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="d-flex justify-content-end me-4">
              <p class="col-name">Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-for="user in filterList" :key="user.id">
      <UserCard :user="user" />
    </div>
    <div class="d-flex justify-content-center">
      <button class="btn btn-refresh" @click="getUsers">
        <font-awesome-icon class="icon" icon="fa-solid fa-rotate" />
        Refresh
      </button>
    </div>
  </div>
</template>
<script>
import UserCard from "./Card.vue";
import axios from "axios";

export default {
  name: "UserList",

  components: {
    UserCard,
  },

  data() {
    return {
      users: [],
      searchName: "",
    };
  },

  async created() {
    await this.getUsers();
  },

  methods: {
    getUsers() {
      axios.get("https://randomuser.me/api/?results=20.").then((response) => {
        console.table(response.data.results);
        this.users = [];
        this.users = response.data.results;
      });
    },
  },
  computed: {
    filterList() {
      return this.users.filter((user) => {
        var fullName = `${user.name.first} ${user.name.last}`;
        return fullName.toLowerCase().includes(this.searchName.toLowerCase());
      });
    },
  },
};
</script>
<style lang="scss">
.col-name {
  color: #979797;
}

.btn-refresh {
  width: 10rem;
  height: 3.5rem;

  .icon {
    height: 1rem;
    padding-right: 1rem;
    color: #fff;
  }
}

.btn-refresh:hover {
  background-color: #00cffd !important;
}

.search {
  height: 3rem;
  width: 50% !important;
}
</style>
