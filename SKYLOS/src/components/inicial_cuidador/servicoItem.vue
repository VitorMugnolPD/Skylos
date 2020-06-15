<template>
  <div id="s">
      <br>
      Inicio: {{ servico.dataInicio }} ;<br>
      Período: {{ servico.periodo }} dia(s);<br>
      Nome do cliente: {{ cnome }} ;<br>
      Nome do animal: {{ anome }} ;<br>
      Especie do animal: {{ aespecie }} ;<br>
      Raça/Especificação do animal: {{ araca }} ;<br>
      Temperamento do animal: {{ atemperamento }} ;<br>
      Preço: R${{ servico.preco }} <br>
      <button id="del" @click="negar(servico.id)">Negar proposta</button><br><br>
  </div>
</template>

<script>
import $ from "jquery";
import api from "../../services/api.js";
export default {
  props: ["servico"],
  data() {
    return {
      cnome: "",
      anome: "",
      aespecie: "",
      araca: "",
      atemperamento: ""
    }
  },
  created() {
    this.listarInfo(this.servico.idCliente, this.servico.idAnimal);
  },
  methods: {
    async listarInfo(idCliente, idAnimal) {
      let c = await api.get("/cliente/" + idCliente)
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
      this.aespecie = a.especie;
      this.araca = a.raca;
      this.atemperamento = a.temperamento;
    },
    async negar(id) {
      const c = await api.delete("/servico/" + id);
      alert("Proposta negada.");
      location.reload();
    }
  }
}
</script>

<style>
#s {
  background-image: linear-gradient(to right, rgb(232, 193, 241), rgb(214, 184, 248));
  text-align: center;
  width: 450px;
  border-radius: 10px;
  margin: 15px;
}

#del:hover {
  font-size: 130%;
  background-color: red;
  color: white;
  transition: 0.2s;
}

#del {
  background-color: white;
  border-radius: 10px;
  color: red;
  font-size: 120%;
  border-color: red;
  transition: 0.2s;
}
</style>