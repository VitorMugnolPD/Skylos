<template>
  <div id="container">
      <div id="AnimalGrande">Cadastrar<br>animal</div>
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
          <input type="submit" id="enviarAnimal">
      </form>
      <div id="ServicoGrande">Solicitar<br>serviço</div>
      <form id="solicitar_servico">
          <label class="txtPequeno">Animal:</label><br>
          <select id="animaisServido"></select><br>
          <label class="txtPequeno">Data de início:</label>
          <input type="date"><br>
          <label class="txtPequeno">Período (em dias):</label><br>
          <input type="number"><br><br>
          <input type="submit" id="enviarServico">
      </form>
      <img src="src/assets/logoff.png" id="logoff">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#logoff {
    position: fixed;
    bottom: 15px;
    right: 15px;
    width: 3%;
    transition: 0.2s;
}

#logoff:hover {
    width: 3.6%;
    transition: 0.2s;
    cursor: pointer;
}

#ServicoGrande {
    position: fixed;
    top: 100px;
    right: 344px;
    font-size: 200%;
    text-align: center;
}

#AnimalGrande {
    position: fixed;
    top: 100px;
    left: 335px;
    font-size: 200%;
    text-align: center;
}

#cadastro_animais {
    position: fixed;
    top: 200px;
    left: 300px;
    text-align: center;
    height: 250px;
    width: 200px;
    background-color: white;
    border-radius: 10px;
}

#solicitar_servico {
    position: fixed;
    top: 200px;
    right: 300px;
    text-align: center;
    height: 250px;
    width: 200px;
    background-color: white;
    border-radius: 10px;
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