<template>
    <div>
      <header class="header-section">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">🏛️ Brain O Brain</a>
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
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
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
  .header-section {
    height: 10vh;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .navbar {
    background: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    width: 100%;
  }
  
  .navbar-brand {
    font-family: 'Pacifico', cursive;
    font-size: 1.8rem;
    color: #333;
  }
  
  .nav-link {
    font-weight: 600;
    font-size: 1.1rem;
    color: #333 !important;
    margin: 0 10px;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #0056b3 !important;
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
  