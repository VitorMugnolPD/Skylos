mapboxgl.accessToken = 'pk.eyJ1Ijoidml0b3ItbXVnbm9sIiwiYSI6ImNrOXloYnFyczAzM28zbG1obG5sZzFweG8ifQ.o0YCKhtnz-in3nGWX1wmdQ';
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-50, -15],
    zoom: 2.2,
    attributionControl: false
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-50, -15])
    .addTo(map);

var lngLat = marker.getLngLat();
var nome;
var email;
var senha;
var afinidade;

function onDragEnd() {

    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
}

marker.on('dragend', onDragEnd);

$().ready(function () {
    $("#opcaoCadastro").change(function () {
        if ($("#opcaoCadastro").val() == "Cuidador") {
            $("#formAfinidade").removeAttr("hidden");
        }
        else {
            $("#formAfinidade").attr("hidden", "true");
        }
    })
})

$().ready(function () {
    $(".enviar").click(function () {

        nome = $(".nome").val();
        email = $(".email").val();
        senha = $(".senha").val();
        
        if ($("#opcaoCadastro").val() == "Cuidador") {
            afinidade = $(".afinidade").val();
            const data ={
              nome: this.nome,
              senha: this.senha,
              latitude: lngLat.lat,
              longitude: lngLat.lng,
              afinidade: this.afinidade
            }
            $.post('http://localhost:5001/api/cuidador/',data);
        }
        else{
            const data ={
                nome: this.nome,
                senha: this.senha,
                latitude: lngLat.lat,
                longitude: lngLat.lng
            }
            $.post('http://localhost:5001/api/cliente/',data);
        }

    })
})

