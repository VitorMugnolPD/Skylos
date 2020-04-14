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

<style>

</style>