<template>
  <div class="index-page">
    <header class="hero-section">
      <h1 class="hero-title">Welcome to Brain O Brain</h1>
      <p class="hero-subtitle">Unlock your potential with us</p>
    </header>

    <section class="features-section">
      <div class="feature-item">
        <img src="/img/inovative.jpg" alt="Feature 1" class="feature-image" />
        <h2 class="feature-title">Innovative Learning</h2>
        <p class="feature-description">Discover innovative methods to learn and grow.</p>
      </div>
      <div class="feature-item">
        <img src="/img/unnamed.jpg" alt="Feature 2" class="feature-image" />
        <h2 class="feature-title">Expert Guidance</h2>
        <p class="feature-description">Learn from the best experts in the field.</p>
      </div>
      <div class="feature-item">
        <img src="/img/comp.png" alt="Feature 3" class="feature-image" />
        <h2 class="feature-title">Comprehensive Resources</h2>
        <p class="feature-description">Access a wide range of resources to enhance your skills.</p>
      </div>
    </section>

    <section class="about-us-section">
      <h2 class="about-title">About Us</h2>
      <p class="about-description">
        Brain O Brain is dedicated to providing top-notch education and resources to help students reach their full potential. Our team of experts is committed to fostering an environment of growth and learning.
      </p>
      <img src="/img/brain.jpg" alt="About Us" class="about-image" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style scoped>
.index-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem; /* Added padding for spacing from header */
  background: none; /* No background */
  color: black; /* Casual black text */
  margin-top: 1rem; /* Space from the header */
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: normal;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 50px 20px;
}

.feature-item {
  text-align: center;
}

.feature-image {
  width: 100%;
  height: 400px; /* Ensures all images have the same height */
  object-fit: cover; /* Crop the image to fill the container */
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-description {
  font-size: 1rem;
}

.about-us-section {
  text-align: center;
  padding: 50px 20px;
  background-color: #f9f9f9;
}

.about-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #7f00ff;
}

.about-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.about-image {
  width: 80%;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
