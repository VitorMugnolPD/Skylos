<template>
  <div id="container">
      <label id="ola"></label>
      <img src="src/assets/logoff.png" id="logoff" @click="logoff">
  </div>
</template>

<script>
import api from "../../services/api.js";
import router from "../../router/index.js";
import $ from "jquery";
export default {
    mounted() {
        $().ready(function() {
            if(sessionStorage.getItem("CuidadorNome") == null)
            {
                router.push({ path: '/' });
            }
            var nomeCuidador = sessionStorage.getItem("CuidadorNome");
            // this.nome = nomeCuidador;
            $("#ola").html("Olá " + nomeCuidador + "!");
        })
    },
    methods: {
        logoff() {
            sessionStorage.removeItem("dadosCuidador");
            sessionStorage.removeItem("CuidadorID");
            sessionStorage.removeItem("CuidadorNome");
            router.push({ path: '/' });
        }
    }
}
</script>

<style>

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