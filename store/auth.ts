import { useCookie, useFetch } from 'nuxt/app';
import { defineStore } from 'pinia';

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    errorMessage: '', // State to store the error message
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      this.loading = true;
      this.errorMessage = ''; // Clear any previous error message
      try {
        const { data, pending, error } = await useFetch("https://cblaze-product.trainingzone.in/api/login", {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        this.loading = pending;

        if (data.value && data.value.data && data.value.data.token) {
          const token = useCookie('token');
          token.value = data.value.data.token; // Set token from the response to cookie
          this.authenticated = true; // Set authenticated state value to true
        } else if (error) {
          // Capture and store the server error message
          this.errorMessage = error.value?.data?.message || 'Authentication failed. Please try again.';
          console.error('Authentication error:', this.errorMessage);
        }
      } catch (error) {
        // Handle unexpected errors and store the error message
        this.errorMessage = error.message || 'Unexpected error occurred. Please try again later.';
        console.error('Unexpected error:', this.errorMessage);
      } finally {
        this.loading = false;
      }
    },
    logUserOut() {
      const token = useCookie('token');
      this.authenticated = false;
      token.value = null; // Clear the token cookie
    },
  },
});
