function actualizarHora() {
    const ahora = new Date();
    document.getElementById("fecha").textContent = ahora.toLocaleDateString();
    document.getElementById("hora").textContent = ahora.toLocaleTimeString();
}

function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                document.getElementById("ubicacion").textContent = `Lat: ${lat}, Lon: ${lon}`;
            },
            function () {
                document.getElementById("ubicacion").textContent = "No se pudo obtener la ubicación.";
            }
        );
    } else {
        document.getElementById("ubicacion").textContent = "Geolocalización no soportada.";
    }
}

setInterval(actualizarHora, 1000);
actualizarHora();
obtenerUbicacion();
