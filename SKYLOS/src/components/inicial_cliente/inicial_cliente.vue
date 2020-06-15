<template>
  <div id="container">
      <label id="ola" style="position: fixed;"></label><br>
      <button id="avaliar" @click="abrirAvaliacoes" style="position: fixed;">Avaliar cuidadores</button>
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
          <select id="animaisServico"></select><br>
          <label class="txtPequeno">Data de início:</label>
          <input type="date" id="dataServico" v-model="dataI"><br>
          <label class="txtPequeno">Período (em dias):</label><br>
          <input type="number" id="periodoServico" min="1" v-model="periodo"><br><br>
          <button id="enviarSolicitacao" @click="solicitacao">Enviar</button>
      </div>
      <div id="cuidadores" hidden>
          <div id="cuidadoresLista" v-for="cuidador in getCuidadoresEncontrados" :key="cuidador.id">
              <br><center><lista-cuidadores :cuidador="cuidador" :dataInicio="dataI" :periodo="periodo" :clienteID="clienteID" :animalID="animalID">
              </lista-cuidadores></center><br>
          </div>
          <label id="exit">X</label>
      </div>
      <div id="avaliacoes" hidden>
          <br>
          Aqui você pode avaliar os cuidadores dos quais você já solicitou um serviço.
          <br><br>
          <div id="servicosAvaliacoes" v-for="servico in getServicos" :key="servico.id">
              <center><lista-servicos :servico="servico"></lista-servicos></center><br>
          </div>
          <label id="exitL">X</label>
      </div>
      <img src="src/assets/logoff.png" id="logoff" @click="logoff">
  </div>
</template>

<script>
import api from "../../services/api.js";
import router from "../../router/index.js";
import $ from "jquery";
import listaCuidadores from "./listaCuidadores.vue";
import listaServicos from "./listaServicos.vue";
export default {
    components: {
        "lista-cuidadores": listaCuidadores,
        "lista-servicos": listaServicos
    },
    data() {
        return {
            nome: "",
            raca: "",
            temperamento: "",
            animaisCliente: [],
            cuidadoresEncontrados: [],
            dataI: "",
            periodo: "",
            clienteID: "",
            animalID: "",
            servicos: []
        }
    },
    created() {
        this.listarAnimais();
        this.listarAvaliacoes();
    },
    mounted() {
        $().ready(function() {
            if(sessionStorage.getItem("ClienteNome") == null)
            {
                router.push({ path: '/' });
            }
            var nomeCuidador = sessionStorage.getItem("ClienteNome");
            $("#ola").html("Olá " + nomeCuidador + "!");
            $("#exit").click(function() {
                $("#cuidadores").attr("hidden", "true");
            });
            $("#exitL").click(function() {
                $("#avaliacoes").attr("hidden", "true");
            });
            var d = Date.now();
            $("#dataServico").attr("min", d);
        })
    },
    methods: {
        logoff() {
            sessionStorage.removeItem("dadosCliente");
            sessionStorage.removeItem("ClienteID");
            sessionStorage.removeItem("ClienteNome");
            sessionStorage.removeItem("ClienteLatitude");
            sessionStorage.removeItem("ClienteLongitude");
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
            location.reload();
        },
        async listarAnimais() {
            let animais = await api.get("/animal")
            .then(function(response){
                return response.data;
            })
            .catch(err => console.log(err));
            var cont = 0;
            for(var i = 0; i < animais.length; i++)
            {
                if(animais[i].idCliente == sessionStorage.getItem("ClienteID"))
                {
                    this.animaisCliente[cont] = animais[i];
                    cont++;
                }
            }
            var s = "";
            for(var i = 0; i < this.animaisCliente.length; i++)
            {
                s += "<option value=" + i + ">" + this.animaisCliente[i].nome + "</option>";
            }
            $("#animaisServico").html(s);
        },
        async solicitacao() {
            if($("#dataServico").val() == "" || $("#periodoServico").val() == "")
            {
                alert("Preencha todos os campos!");
                return;
            }
            $("#cuidadores").removeAttr("hidden");
            var i = parseInt($("#animaisServico").val());
            let c = await api.get("/cuidador/"
            + sessionStorage.getItem("ClienteLongitude")
            + "/" + sessionStorage.getItem("ClienteLongitude")
            + "/" + this.animaisCliente[i].especie)
            .then(function(response){
                return response.data;
            })
            .catch(err => console.log(err));
            this.cuidadoresEncontrados = c;
            this.clienteID = sessionStorage.getItem("ClienteID");
            this.animalID = this.animaisCliente[i].id;
        },
        async listarAvaliacoes() {
            let s = await api.get("/servico/")
            .then(function(response) {
                return response.data;
            })
            .catch(err => console.log(err));
            for(var i = 0; i < s.length; i++)
            {
                if(s[i].idCliente == sessionStorage.getItem("ClienteID"))
                {
                    this.servicos.push(s[i]);
                }
            }
        },
        abrirAvaliacoes() {
            
            $("#avaliacoes").removeAttr("hidden");
        }
    },
    computed: {
        getCuidadoresEncontrados() {
            return this.cuidadoresEncontrados;
        },
        getServicos() {
            return this.servicos;
        }
    }
}
</script>

<style scoped>
#ola {
    font-size: 120%;
    margin: 10px;
}

#avaliar {
    margin: 10px;
    margin-top: 30px;
    background-image: linear-gradient(to right, rgb(232, 193, 241), rgb(214, 184, 248));
}

#exitL:hover {
    font-size: 120%;
    cursor: pointer;
    transition: 0.1s;
}

#exitL {
    position: fixed;
    left: 920px;
    top: 105px;
    transition: 0.1s;
}

#avaliacoes {
    background-image: linear-gradient(to right, rgb(232, 193, 241), rgb(214, 184, 248));
    width: 500px;
    position: absolute;
    top: 100px;
    left: 450px;
    z-index: 2;
    border-radius: 10px;
}

#exit:hover {
    font-size: 120%;
    cursor: pointer;
    transition: 0.1s;
}

#exit {
    position: fixed;
    left: 920px;
    top: 105px;
    transition: 0.1s;
}

#cuidadores {
    background-image: linear-gradient(to right, rgb(232, 193, 241), rgb(214, 184, 248));
    width: 500px;
    position: absolute;
    top: 100px;
    left: 450px;
    z-index: 1;
    border-radius: 10px;
}

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