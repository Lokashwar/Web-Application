<template>
  <div>
    <header class="header-section">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <router-link class="navbar-brand" to="/">🏛️ Brain O Brain</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/StudentPage">Students</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped>
/* Your existing styles */
.header-section {
  height: 10vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #7f00ff, #e100ff);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.navbar {
  width: 100%;
  padding: 0.5rem 1rem;
  background: transparent;
}

.navbar-brand {
  font-family: 'Pacifico', cursive;
  font-size: 1.8rem;
  color: white;
}

.nav-link {
  font-weight: 600;
  font-size: 1.1rem;
  color: white !important;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffeb3b !important;
}

.navbar-toggler {
  border-color: white;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' linecap='round' linejoin='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 768px) {
  .header-section {
    height: 10vh;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}
</style>
