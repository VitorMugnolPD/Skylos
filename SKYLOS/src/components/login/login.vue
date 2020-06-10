<template>
  <div id="container">
    <div style="height: 250px;" id="form">
      <label class="txtPequeno">Opção de login</label><br />
      <select id="opcaoCadastro">
        <option>Escolha uma opção de login</option>
        <option>Cliente</option>
        <option>Cuidador</option> </select
      ><br />
      <label class="txtPequeno">E-mail</label><br />
      <input type="email" placeholder="Seu e-mail" v-model="email" /><br />
      <label class="txtPequeno">Senha</label><br />
      <input
        type="password"
        placeholder="Sua senha"
        v-model="senha"
      /><br /><br />
      <button id="enviar" @click="this.login">Enviar</button>
    </div>
  </div>
</template>

<script>
import api from "../../services/api.js";
import router from "../../router/index.js";
import $ from "jquery";
export default {
  data() {
    return {
      email: "",
      senha: ""
    };
  },
  methods: {
    async login() {
      if(this.email == "" || this.senha == "")
      {
          alert("Preencha todos os campos!");
          return;
      }
      if ($("#opcaoCadastro").val() == "Cliente") {
        let dadosCliente = await api
          .get("/cliente/" + this.email + "/" + this.senha)
          .then(function(response) {
            if(response.status != 200)
            {
              alert("Usuário ou senha incorretos!");
              return;
            }
            return response.data;
          })
          .catch(err => console.log(err));
        sessionStorage.setItem("dadosCliente", dadosCliente);
        sessionStorage.setItem("ClienteID", dadosCliente.id);
        sessionStorage.setItem("ClienteNome", dadosCliente.nome);
        sessionStorage.setItem("ClienteLatitude", dadosCliente.latitude);
        sessionStorage.setItem("ClienteLongitude", dadosCliente.longitude);
        router.push({ path: '/inicial_cliente'});
      }
      else if($("#opcaoCadastro").val() == "Cuidador")
      {
        let dadosCuidador = await api
          .get("/cuidador/" + this.email + "/" + this.senha)
          .then(function(response) {
            if(response.status != 200)
            {
              alert("Usuário ou senha incorretos!");
              return;
            }
            return response.data;
          })
          .catch(err => console.log(err));
        sessionStorage.setItem("dadosCuidador", dadosCuidador);
        sessionStorage.setItem("CuidadorID", dadosCuidador.id);
        sessionStorage.setItem("CuidadorNome", dadosCuidador.nome);
        router.push({ path: '/inicial_cuidador'});
      }
      else
      {
        alert("Selecione uma opção de login!");
      }
    }
  }
};
</script>

<style scoped>
#form {
  height: 310px;
  background-image: linear-gradient(
    to right,
    rgb(190, 145, 201),
    rgb(214, 184, 248)
  );
  border-color: rgba(0, 0, 0, 0);
  border-radius: 45px;
  margin-top: 80px;
  margin-left: 450px;
  margin-right: 450px;
  text-align: center;
}

#enviar {
  border-radius: 50px;
  border-color: rgba(0, 0, 0, 0);
  background-color: #f0b3ff;
  font-size: 110%;
  transition: 0.2s;
}

#enviar:hover {
  font-size: 115%;
  transition: 0.2s;
}

.txtPequeno {
  color: white;
  font-size: 77%;
}
</style>
