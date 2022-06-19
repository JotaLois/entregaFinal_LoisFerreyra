function mostrarFormEnviado2() {
  Swal.fire({
      position: 'top',
      icon: 'warning',
      title: 'Consulta',
      text: '¿Desea eliminar sus Datos?',
      showCancelButton: true,
      confirmButtonText: "Sí, por favor!",
      cancelButtonText: "No, gracias!",
    }).then((result) => {
        if (result.isConfirmed) {
          eliminarDatos();
          Swal.fire(
              'Eliminado!',
              'Tus Datos fueron elimandos!',
              'success'
          )
        }
    });
}

function guardarDatos(){
    let campo__alias = document.getElementById("alias").value;
    let campo__domicilio = document.getElementById("domicilio").value;
    localStorage.setItem("datos_formulario", JSON.stringify({alias:campo__alias, domicilio:campo__domicilio}));
  
    let mensaje = `alias: ${campo__alias} - domicilio: ${campo__domicilio}`;
    console.log(mensaje);
    
  }
  
function eliminarDatos() {
    localStorage.removeItem("datos_formulario");
    console.log("Los datos fueron eliminados!");
}

function validarFormulario(e) {
    e.preventDefault();
    let campo_alias = document.getElementById("alias").value;
    let campo_domicilio = document.getElementById("domicilio").value;

    if (campo_alias.length == "0") {
        mostrarErrorCampo("Alias");
        return false;
    }

    if (campo_domicilio.length == "0") {
        mostrarErrorCampo("Domicilio");
        return false;
    }

    guardarDatos();
    mostrarFormEnviado2();
}

document.getElementById("enviarForm").addEventListener("click", validarFormulario);

