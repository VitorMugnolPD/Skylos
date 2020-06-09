<template>
  <div id="container">
      <label id="ola"></label>
      <div id="AnimalGrande">Cadastrar<br>animal</div>
      <div id="cadastro_animais">
          <label class="txtPequeno">Selecione o tipo do animal:</label><br>
          <select id="especie_animal">
              <option>Cachorro</option>
              <option>Gato</option>
              <option>Peixe</option>
              <option>Roedor</option>
              <option>Pássaro</option>
              <option>Outro</option>
          </select><br>
          <label class="txtPequeno">Nome:</label><br>
          <input type="text" id="nome_animal" placeholder="Nome do animal" v-model="nome">
          <label class="txtPequeno">Especificação ou raça:</label><br>
          <input type="text" id="raca_animal" placeholder="ex: Papagaio, Pitbull" v-model="raca"><br>
          <label class="txtPequeno">Descreva o temperamento:</label><br>
          <input type="text" id="temperamento_animal" placeholder="ex: Calmo, bravo" v-model="temperamento"><br><br>
          <button id="enviarAnimal" @click="cadastrarAnimal">Enviar</button>
      </div>
      <div id="ServicoGrande">Solicitar<br>serviço</div>
      <div id="solicitar_servico">
          <label class="txtPequeno">Animal:</label><br>
          <select id="animaisServido"></select><br>
          <label class="txtPequeno">Data de início:</label>
          <input type="date"><br>
          <label class="txtPequeno">Período (em dias):</label><br>
          <input type="number"><br><br>
          <input type="submit" id="enviarServico">
      </div>
      <img src="src/assets/logoff.png" id="logoff" @click="logoff">
  </div>
</template>

<script>
import api from "../../services/api.js";
import router from "../../router/index.js";
import $ from "jquery";
export default {
    data() {
        return {
            nome: "",
            raca: "",
            temperamento: ""
        }
    },
    mounted() {
        $().ready(function() {
            if(sessionStorage.getItem("ClienteNome") == null)
            {
                router.push({ path: '/' });
            }
            var nomeCuidador = sessionStorage.getItem("ClienteNome");
            $("#ola").html("Olá " + nomeCuidador + "!");
        })
    },
    methods: {
        logoff() {
            sessionStorage.removeItem("dadosCliente");
            sessionStorage.removeItem("ClienteID");
            sessionStorage.removeItem("ClienteNome");
            router.push({ path: '/' });
        },
        async cadastrarAnimal() {
            if(this.nome == "" || this.raca == "" || this.temperamento == "")
            {
                alert("Preencha todos os campos!");
                return;
            }
            var idC = parseInt(sessionStorage.getItem("ClienteID"));
            var esp = $("#especie_animal").val();
            var a = {
                idCliente: idC,
                nome: this.nome,
                especie: esp,
                raca: this.raca,
                temperamento: this.temperamento
            }
            const r = await api.post("/animal/", a);
            alert("Cadastro feito com sucesso!");
        }
    }
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
    height: 300px;
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