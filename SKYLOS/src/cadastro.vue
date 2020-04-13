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
          <input type="text" id="nome"><br>
          <label class="txtPequeno">E-mail</label><br>
          <input type="email" id="email"><br>
          <label class="txtPequeno">Senha</label><br>
          <input type="password"><br><br>
          <input type="submit">
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
form {
    background-color: blueviolet;
    border-color: rgba(0, 0, 0, 0);
    border-radius: 45px;
    margin-top: 80px;
    margin-left: 450px;
    margin-right: 450px;
    text-align: center;
}

.txtPequeno {
    font-size: 75%;
}
</style>