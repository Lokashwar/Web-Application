<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="email"><b>Email</b></label>
      <input
        v-model="user.email"
        type="email"
        class="input"
        placeholder="Enter Email"
        id="email"  
        required
      />

      <label for="password"><b>Password</b></label>
      <input
        v-model="user.password"
        type="password"
        class="input"
        placeholder="Enter Password"
        id="password" 
        required
      />

      <button @click.prevent="login" class="button">Login</button>

      <!-- Display error message -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'nuxt/app';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from '../store/auth.ts';  // Corrected import path

// Get the auth store and methods
const { authenticateUser } = useAuthStore();
const { authenticated, errorMessage } = storeToRefs(useAuthStore()); 

// Define the user data model
const user = ref({
  email: '',
  password: '',
});

// Get the router instance for navigation
const router = useRouter(); // Added this line to get the router instance

const login = async () => {
  await authenticateUser(user.value); // Call the authenticateUser action with the user data
  // Redirect to the homepage if the user is authenticated
  if (authenticated.value) {
    router.push('/StudentPage'); // Redirect to the home page
  }
};
</script>

<style lang="scss">
.title {
  display: flex;
  justify-content: center;
}

.container {
  padding: 16px;
}

.form {
  border: 3px solid #f1f1f1;
  border-radius: 10px;

  .input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .button {
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    opacity: 0.8;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }

  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }

    .cancelbtn {
      width: 100%;
    }
  }
}
</style>
