<template>
  <div id="container">
      <label id="ola"></label>
      <div id="listaServicos">
          <div class="proposta" v-for="servico in getServicosCuidador" :key="servico.id">
              <servico-item :servico="servico"></servico-item>
          </div>
      </div>
      <img src="src/assets/logoff.png" id="logoff" @click="logoff">
  </div>
</template>

<script>
import api from "../../services/api.js";
import router from "../../router/index.js";
import $ from "jquery";
import servicoItemVue from './servicoItem.vue';
export default {
    components: {
        "servico-item": servicoItemVue
    },
    data() {
        return {
            servicosCuidador: []
        }
    },
    created() {
        
    },
    mounted() {
        this.servicos();
        if(sessionStorage.getItem("CuidadorNome") == null)
        {
            router.push({ path: '/' });
        }
        var nomeCuidador = sessionStorage.getItem("CuidadorNome");
        $("#ola").html("Olá " + nomeCuidador + "!");
    },
    methods: {
        logoff() {
            sessionStorage.removeItem("dadosCuidador");
            sessionStorage.removeItem("CuidadorID");
            sessionStorage.removeItem("CuidadorNome");
            router.push({ path: '/' });
        },
        async servicos() {
            let s = await api.get("/servico")
            .then(function(response) {
                return response.data;
            })
            .catch(err => console.log(err));
            for(var i = 0; i < s.length; i++)
            {
                if(s[i].idCuidador == sessionStorage.getItem("CuidadorID"))
                {
                    this.servicosCuidador.push(s[i]);
                }
            }
            if(this.servicosCuidador.length == 0)
            {
                $("#listaServicos").html("Você não possui nenhuma proposta de serviço no momento.");
            }
        }
    },
    computed: {
        getServicosCuidador() {
            return this.servicosCuidador;
        }
    }
}
</script>

<style>
#ola {
    font-size: 120%;
    margin: 10px;
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

</style>