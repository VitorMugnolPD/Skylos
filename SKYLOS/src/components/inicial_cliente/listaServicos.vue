<template>
  <div id="s">
      Nome do cuidador: {{ cnome }}<br>
      Animal: {{ anome }}<br>
      Data: {{ servico.dataInicio }}<br>
      Nota: <input type="number" min="1" max="5" id="nota" v-model="nota"><br><br>
      <button id="send" @click="send">Enviar</button><br>
  </div>
</template>

<script>
import $ from "jquery";
import api from "../../services/api.js";
export default {
  props: ["servico"],
  data() {
    return {
      anome: "",
      cnome: "",
      nota: ""
    }
  },
  created() {
    this.listarInfo(this.servico.idCuidador, this.servico.idAnimal);
  },
  methods: {
    async listarInfo(idCuidador, idAnimal) {
      let c = await api.get("/cuidador/" + idCuidador)
      .then(function(response) {
        return response.data;
      })
      .catch(err => console.log(err));
      let a = await api.get("/animal/" + idAnimal)
      .then(function(response) {
        return response.data;
      })
      .catch(err => console.log(err));
      this.cnome = c.nome;
      this.anome = a.nome;
    },
    async send() {
        var p = {
            idCuidador: this.servico.idCuidador,
            idCliente: this.servico.idCliente,
            nota: parseInt(this.nota)
        }
        const r = api.post("/avaliacao/", p);
        alert("Avaliação enviada com sucesso!");
    }
  }
}
</script>

<style>

#s {
  background-color: rgb(167, 236, 167);
  text-align: center;
  width: 350px;
  border-radius: 10px;
}

</style>