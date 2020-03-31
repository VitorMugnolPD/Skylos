<template>
  <div id="app">
    <div id="container">
      <nav>
        <div class="brand">
          <h2>Skylos</h2>
        </div>
        <ul>
          <li>
            <a href="#">Cadastro</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
      <section class="sec1"></section>
      <section class="sec2"></section>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

section.sec1 {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: url("assets/c.png");
  background-size: cover;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 100px;
  box-sizing: border-box;
}

nav .brand h2 {
  padding: 0;
  margin: 0;
  color: #fff;
  float: left;
  height: 100%;
  line-height: 70px;
}

nav ul {
  float: right;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  position: relative;
  display: block;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
}

nav ul li a:hover {
  color: #262626;
}

nav ul li a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transform-origin: right;
  z-index: -1;
  transform: scaleX(0);
  transition: transform 0.5s;
}

nav ul li a:hover:before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>