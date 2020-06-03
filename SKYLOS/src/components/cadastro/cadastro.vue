<template>
  <div id="container">
    <div id="formulario">
      <label class="txtPequeno">Opção de cadastro</label><br />
      <select id="opcaoCadastro">
        <option>Escolha uma opção de cadastro</option>
        <option>Cliente</option>
        <option>Cuidador</option> </select
      ><br />
      <label class="txtPequeno">Nome</label><br />
      <input
        type="text"
        id="nome"
        placeholder="Seu nome completo"
        name="nome"
        v-model="nome"
      /><br />
      <label class="txtPequeno">E-mail</label><br />
      <input
        type="email"
        id="email"
        placeholder="Seu e-mail"
        name="email"
        v-model="email"
      /><br />
      <label class="txtPequeno">Senha</label><br />
      <input
        type="password"
        placeholder="Sua senha"
        name="senha"
        v-model="senha"
      /><br /><br />
      <label class="txtPequeno">Arraste o marcador para sua localização</label>
      <div>
        <input type="text" name="latitude" id="lat" maxlength="8" v-model="latitude" />
        <input type="text" name="longitude" id="long" maxlength="8" v-model="longitude" />
      </div>
      <div id="map"></div>
      <pre id="coordinates" class="coordinates"></pre>
      <br />
      <button id="enviar" @click="this.enviar">enviar</button><br />
    </div>
    <form id="formAfinidade" hidden>
      <label class="txtPequeno"
        >Escreva abaixo os animais com<br />os quais você possui
        afinidade</label
      ><br />
      <input type="text" id="txtAfinidade" placeholder="ex: Cachorros, gatos" />
    </form>
  </div>
</template>

<script>
import api from "../../services/api.js";
import $ from 'jquery';
export default {
  data() {
    return {
      info: null,
      nome: "",
      email: "",
      senha: "",
      latitude: 0.0,
      longitude: 0.0
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoidml0b3ItbXVnbm9sIiwiYSI6ImNrOXloYnFyczAzM28zbG1obG5sZzFweG8ifQ.o0YCKhtnz-in3nGWX1wmdQ";
    var coordinates = document.getElementById("coordinates");
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-50, -15],
      zoom: 2.2,
      attributionControl: false
    });

    var marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([-50, -15])
      .addTo(map);

    function onDragEnd() {
      var lngLat = marker.getLngLat();
      coordinates.style.display = "block";
      coordinates.innerHTML =
        "Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat;
      var lati = lngLat.lat.toString();
      var longi = lngLat.lng.toString();
      $("#lat").val(lati.substring(0, 9));
      $("#long").val(longi.substring(0, 9));
    }

    marker.on("dragend", onDragEnd);

    $().ready(function() {
      $("#opcaoCadastro").change(function() {
        if ($("#opcaoCadastro").val() == "Cuidador") {
          $("#formAfinidade").removeAttr("hidden");
        } else {
          $("#formAfinidade").attr("hidden", "true");
        }
      });
    });
  },
  methods: {
    async enviar() {
      var p = {
        nome: this.nome,
        senha: this.senha,
        email: this.email,
        latitude: this.latitude,
        longitude: this.longitude
      };
      console.log(p);
      const r = await api.post("/cliente/", p);
    }
  }
};
</script>

<style scoped>
.coordinates {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  bottom: 40px;
  left: 10px;
  padding: 5px 10px;
  margin: 0;
  font-size: 11px;
  line-height: 18px;
  border-radius: 3px;
  display: none;
}
#map {
  position: absolute;
  top: 300px;
  bottom: 10px;
  left: 466px;
  width: 32%;
  height: 45%;
}
#formAfinidade {
  position: absolute;
  top: 100px;
  right: 150px;
  background-image: linear-gradient(
    to right,
    rgb(190, 145, 201),
    rgb(214, 184, 248)
  );
  border-radius: 15px;
  height: 80px;
  width: 210px;
  text-align: center;
}

#formulario {
  height: 640px;
  background-image: linear-gradient(
    to right,
    rgb(190, 145, 201),
    rgb(214, 184, 248)
  );
  border-color: rgba(0, 0, 0, 0);
  border-radius: 45px;
  margin-top: 10px;
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
  position: absolute;
  top: 610px;
  left: 650px;
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
