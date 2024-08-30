<template>
  <div class="student-page">
    <h1 class="title">Student Access Portal</h1>
    <div class="button-container">
      <router-link to="/personaldetails" class="hover-button">
        Student Details
      </router-link>
      <router-link to="/attendance" class="hover-button">
        Attendance
      </router-link>
      <router-link to="/examination" class="hover-button">
        Examination
      </router-link>
      <router-link to="/result" class="hover-button">
        Result
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentPage',
  middleware: 'auth', // Apply the auth middleware
};
</script>

<style scoped>
.student-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px; /* Padding around the content */
  height: 100vh; /* Full page height */
  box-sizing: border-box;
}

.title {
  font-size: 3rem;
  margin-bottom: 40px;
  color: #333;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Space between buttons */
  width: 100%; /* Full width of the container */
  max-width: 400px; /* Max width for buttons */
}

.hover-button {
  padding: 20px;
  background-color: #7f00ff;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 30px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Align content to the left and right */
}

.hover-button::after {
  content: '>';
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.hover-button:hover {
  background-color: #e100ff;
  transform: translateY(-5px);
}

.hover-button:hover::after {
  transform: translateX(5px);
}
</style>
