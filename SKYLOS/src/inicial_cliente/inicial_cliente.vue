<template>
  <div id="container">
      <form id="cadastro_animais">
          <label class="txtPequeno">Selecione o tipo do animal:</label><br>
          <select id="especie_animal">
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Peixe</option>
              <option>Roedor</option>
              <option>Pássaro</option>
              <option>Outro</option>
          </select><br>
          <label class="txtPequeno">Especificação ou raça:</label><br>
          <input type="text" id="raca_animal" placeholder="ex: Papagaio, Pitbull"><br>
          <label class="txtPequeno">Descreva o temperamento:</label><br>
          <input type="text" id="temperamento_animal" placeholder="ex: Calmo, bravo"><br><br>
          <input type="submit">
      </form>
      <form id="solicitar_servico">
          teste
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#cadastro_animais {
    position: absolute;
    top: 200px;
    left: 300px;
    text-align: center;
    height: 250px;
    width: 200px;
    background-color: white;
}

#solicitar_servico {
    top: 200px;
    right: 300px;
    text-align: center;
    height: 250px;
    width: 200px;
    background-color: white;
}

/* form {
    position: absolute;
    text-align: center;
    height: 250px;
    width: 200px;
    background-color: white;
} */
.txtPequeno {
    color: rgb(163, 162, 162);
    font-size: 77%;
}
</style>