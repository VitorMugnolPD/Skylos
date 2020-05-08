<template>
  <div id="container">
      <form>
          <label class="txtPequeno">Opção de cadastro</label><br>
          <select id="opcaoCadastro">
              <option>Escolha uma opção de cadastro</option>
              <option>Cliente</option>
              <option>Cuidador</option>
          </select><br>
          <label class="txtPequeno">Nome</label><br>
          <input type="text" id="nome" placeholder="Seu nome completo"><br>
          <label class="txtPequeno">E-mail</label><br>
          <input type="email" id="email" placeholder="Seu e-mail"><br>
          <label class="txtPequeno">Senha</label><br>
          <input type="password" placeholder="Sua senha"><br><br>
          <label class="txtPequeno">Arrate o marcador para sua localização</label>
          <div id="map"></div>
          <pre id="coordinates" class="coordinates"></pre><br>
          <input type="submit" id="enviar"><br>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
form {
    height: 640px;
    background-image: linear-gradient(to right, rgb(190, 145, 201), rgb(214, 184, 248));
    border-color: rgba(0, 0, 0, 0);
    border-radius: 45px;
    margin-top: 10px;
    margin-left: 450px;
    margin-right: 450px;
    text-align: center;
}

#enviar {
    border-radius: 50px;
    border-color: rgba(0, 0, 0, 0);
    background-color: #f0b3ff;
    font-size: 110%;
    transition: 0.2s;
    position: absolute;
    top: 610px;
    left: 650px;
}

#enviar:hover {
    font-size: 115%;
    transition: 0.2s;
}

.txtPequeno {
    color: white;
    font-size: 77%;
}
</style>