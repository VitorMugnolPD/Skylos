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

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    $("#lat").val(lngLat.lat);
    $("#long").val(lngLat.lng);
}

marker.on('dragend', onDragEnd);

$().ready(function(){
    $("#opcaoCadastro").change(function(){
        if($("#opcaoCadastro").val() == "Cuidador")
        {
            $("#formAfinidade").removeAttr("hidden");
        }
        else
        {
            $("#formAfinidade").attr("hidden", "true");
        }
    })
})