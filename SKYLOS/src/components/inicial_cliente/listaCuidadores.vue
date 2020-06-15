<template>
  <div id="l">
      Nome: {{ cuidador.nome }}<br>
      Média das avaliações: <label id="avali">{{ media }}/5</label><br>
      Valor a sugerir: R$<input type="number" id="valor" min="1" v-model="valor"><br><br>
      <button id="send" @click="enviarProposta">Enviar proposta</button>
      <br>
  </div>
</template>

<script>
import $ from "jquery";
import api from "../../services/api.js";
export default {
    props: ["cuidador", "dataInicio", "periodo", "clienteID", "animalID"],
    data() {
        return {
            media: 0.0,
            valor: ""
        }
    },
    created() {
        this.mediaAvaliacao();
    },
    methods: {
        async enviarProposta() {
            if(this.valor == "")
            {
                alert("Preencha todos os campos!");
                return;
            }
            var p = {
                idCuidador: this.cuidador.id,
                idCliente: parseInt(this.clienteID),
                idAnimal: parseInt(this.animalID),
                dataInicio: this.dataInicio,
                periodo: parseInt(this.periodo),
                preco: parseFloat(this.valor)
            };
            console.log(p);
            const r = await api.post("/servico", p);
            alert("Proposta enviada com sucesso!");
            location.reload();
        },
        async mediaAvaliacao() {
            let a = await api.get("/avaliacao/")
            .then(function(response) {
                return response.data;
            })
            .catch(err => console.log(err));
            var avaliacoesCuidador = [];
            for(var i = 0; i < a.length; i++)
            {
                if(a[i].idCuidador == this.cuidador.id)
                {
                    avaliacoesCuidador.push(a[i]);
                }
            }
            if(avaliacoesCuidador.length == 0)
            {
                return;
            }
            var soma = 0;
            for(var n = 0; n < avaliacoesCuidador.length; n++)
            {
                soma += avaliacoesCuidador[n].nota;
            }
            var m = soma / avaliacoesCuidador.length;
            this.media = m;
        }
    }
}
</script>

<style>

#l {
  background-color: rgb(167, 236, 167);
  text-align: center;
  width: 350px;
  border-radius: 10px;
}

</style>