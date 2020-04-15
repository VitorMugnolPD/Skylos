<template>
  <div id="container">
      <form style="height: 250px;">
          <label class="txtPequeno">Opção de login</label><br>
          <select id="opcaoCadastro">
              <option>Escolha uma opção de login</option>
              <option>Cliente</option>
              <option>Cuidador</option>
          </select><br>
          <label class="txtPequeno">E-mail</label><br>
          <input type="email" placeholder="Seu e-mail"><br>
          <label class="txtPequeno">Senha</label><br>
          <input type="password" placeholder="Sua senha"><br><br>
          <input type="submit" id="enviar">
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
form {
    height: 310px;
    background-image: linear-gradient(to right, rgb(190, 145, 201), rgb(214, 184, 248));
    border-color: rgba(0, 0, 0, 0);
    border-radius: 45px;
    margin-top: 80px;
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