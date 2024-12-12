document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var motivo = document.getElementById("motivo").value;
    var email = document.getElementById("email").value;

    if (nombre && motivo && email) {
        alert("Formulario enviado correctamente");
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
