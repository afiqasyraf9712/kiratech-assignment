<template>
  <div
    class="card shadow border-light mb-3"
    style="width: 104%; margin-left: -2%; height: 5rem"
    role="button"
    data-bs-toggle="modal"
    :data-bs-target="`#userModal` + user.login.uuid"
  >
    <div class="card-body">
      <div class="row align-items-center" style="height: 3rem">
        <div class="col-md-2">
          <div class="d-flex justify-content-center">
            <span class="col-name">{{ getDateFormat }}</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex justify-content-start">
            <span class="name">{{ getFullName }}</span>
          </div>
        </div>
        <div class="col-md-1">
          <div class="d-flex justify-content-start">
            <span class="col-name capitalize">{{ user.gender }}</span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="d-flex justify-content-start">
            <span class="country">{{ user.location.country }}</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="d-flex justify-content-end me-4">
            <span class="col-name">{{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    :id="`userModal` + user.login.uuid"
    tabindex="-1"
    aria-labelledby="user-modal-label"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content px-5 py-3">
        <div class="modal-header border-0">
          <h5
            class="modal-title"
            id="userModalLabel"
            style="font-size: 3rem; font-weight: bold"
          >
            {{ getFullName }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4"><p>Date of Birth:</p></div>
            <div class="col-8">
              <p>{{ getDateFormat }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4"><p>Gender:</p></div>
            <div class="col-8">
              <p class="capitalize">{{ user.gender }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4"><p>Address:</p></div>
            <div class="col-8">
              <p>{{ getAddress }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4"><p>Email:</p></div>
            <div class="col-8">
              <p>{{ user.email }}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-4">Phone Number:</div>
            <div class="col-8">
              {{ user.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "User Card",
  props: {
    user: Object,
  },
  components: {},
  computed: {
    getDateFormat() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const date = new Date(this.user.dob.date);
      const year = date.getFullYear();
      const month = months[date.getMonth()];
      const dt = date.getDate();
      return `${dt} ${month} ${year}`;
    },
    getFullName() {
      return `${this.user.name.first} ${this.user.name.last}`;
    },
    getAddress() {
      return `${this.user.location.street.number} ${this.user.location.street.name}, ${this.user.location.city}, ${this.user.location.state}, ${this.user.location.country}, ${this.user.location.postcode}`;
    },
  },
  methods: {},
};
</script>
<style lang="scss">
.capitalize::first-letter {
  text-transform: capitalize;
}

.name {
  font-weight: bold;
  color: #000;
}

.country {
  color: #000;
}

.modal-content {
  padding: 1rem 1rem 1rem 1rem;
}
</style>
