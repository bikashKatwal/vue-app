<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          ref="first"
          v-focus
          type="text"
          v-model.lazy="employee.name"
          class="form-control"
          id="name"
          placeholder="Enter Name"
          autocomplete="off"
          :class="{'has-error': submitting && invalidName}"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
      </div>
      <div class="form-group">
        <label for="description">Email</label>
        <input
          type="email"
          v-model.lazy="employee.email"
          class="form-control"
          id="email"
          placeholder="Enter Email"
          autocomplete="off"
          :class="{ 'has-error': submitting && invalidEmail }"
          @focus="clearStatus"
        />
      </div>
      <p v-if="error && submitting" class="error-message">❗ Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Employee successfully added</p>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      employee: {
        name: "",
        email: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();
      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }
      this.$emit("add:employee", this.employee);
      this.$refs.first.focus();
      this.employee = {
        name: "",
        email: ""
      };
      this.success = true;
      this.error = false;
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidName: function() {
      return this.employee.name === "";
    },
    invalidEmail: function() {
      return this.employee.email === "";
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}

[class*="-message"] {
  font-weight: 500;
}
</style>