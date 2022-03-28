<script setup>
  import Header from './components/layout/Header.vue'
  import Footer from './components/layout/Footer.vue'

  import 'sweetalert2/dist/sweetalert2.min.css'
</script>

<template>
  <Header/>
  <div class="content">
    <router-view></router-view>
  </div>
  <Footer/>
</template>

<style>
  html, body {
    height: 100%;
    margin:0;
  }
  #app {
    font-family:Courier New;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #dcdae1;
    overflow: auto;
  }
  .content {
    flex: 1 0 auto;
    overflow-x: hidden;
  }

  :root {
    --primary-color: #914678;
    --complementary-color: #7e64ae;
  }

  a {
      font-size:8pt;
      color: var(--primary-color);
      font-family:Courier New;
  }
  button {
    background-color: var(--primary-color); 
    border: none;
    color: white;
    padding: 10px 32px;
    margin: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block; 
    font-size: 16px; 
    border-radius: 4px;
  }
  p {
    font-family:Courier New;
    font-size:12pt
  }
  h1, h2, h3, figure.header figcaption {
    font-family: Arial,sans-serif;
  }
  input[type="checkbox"] {
    accent-color: var(--complementary-color);
    width: 1rem;
    height: 1rem;
  }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
