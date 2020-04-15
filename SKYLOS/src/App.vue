<template>
  <div id="app">
    <div id="container">
      <nav>
        <div class="brand">
          <h2>Skylos</h2>
        </div>
        <ul style="font-family: 'Candara';">
          <li>
            <a href="cadastro.html">Cadastro</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </nav>
      <section class="sec1"></section>
      <div id="conteudo">
        <center>
          <img src="src/assets/logo_transparente.png" id="logo1">
          <br><br>
          Sabe quando você vai viajar, ou apenas tem que ir ao trabalho,<br>
          e vem aquele aperto no coração por deixar o seu tão amado bicho de estimação sozinho?<br><br>
          Nós entendemos completamente este sentimento, por isso estamos aqui!<br>
          Em Skylos, você pode se cadastrar gratuitamente como um cliente, e em questão de minutos <br>
          encontar alguém para cuidar do seu bichinho! <br><br>
          E você também pode se cadastrar como um cuidador, basta fornecer as suas especificações <br>
          e você poderá conseguir dinheiro cuidando de animais! <br><br>
        </center>
      </div>
      <section class="sec2">
        <br><br><br>
        <br><br><br>
        <center><a href="cadastro.html"><button id="cad2">CADASTRE-SE AGORA</button></a></center>
        <br><br><br>
        <br><br><br>
        <br>      
        <div id="rodape1"></div>
      </section>
      <div id="rodape2">
        <br><br>
        <img src="src/assets/logo_transparente.png" id="logo2"><br>
        <div id="texto1" style="position: absolute; font-family: 'Candara'; margin-left: 20px;">
          Desenvolvido por: <br>
          Bruno Arnone Franchi <br>
          Vicente Pinto Tomás Junior <br>
          Vitor Mugnol Estevam de Araujo
        </div>
        <div id="texto2" style="text-align: right; font-family: 'Candara'; margin-right: 20px;">
          Este site foi desenvolvido como <br>
          projeto para a matéria de <br>
          Prática Profissional II com a <br>
          professora Simone no Colégio Técnico de Campinas <br>
          <b><a href="https://github.com/VitorMugnolPD/Skylos">Github</a></b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#cad2 {
  border-radius: 100px;
  border-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(214, 184, 248), rgb(190, 145, 201));
  font-family: "Candara";
  font-size: 300%;
  transition: 0.2s;
  color: white;
}

#cad2:hover {
  font-size: 320%;
  transition: 0.2s;
}

#logo2 {
  position: absolute;
  margin-left: 470px;
  width: 30%;
}

#rodape2 {
  height: 200px;
  background-color: rgb(163, 163, 163);
}

#rodape1 {
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgb(163, 163, 163));
  height: 70px;
}

#conteudo {
  font-family: "Candara";
  font-size: 115%;
  background-color: #f5ccff;
  height: 410px;
  transition: 0.4s;
}

#conteudo:hover {
  background-color: #f0b3ff;
  transition: 0.4s;
}

#logo1 {
  width: 30%;
  transition: 0.3s;
}

#logo1:hover {
  width: 31%;
  transition: 0.3s;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

section.sec1 {
  width: 100%;
  height: 90vh;
  box-sizing: border-box;
  background: url("assets/c.png");
  background-size: cover;
}

section.sec2 {
  width: 100%;
  height: 70vh;
  box-sizing: border-box;
  background: url("assets/bird2.jpg");
  background-size: cover;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(125, 163, 130, 0.6);
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