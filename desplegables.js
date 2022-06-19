//TOASTIFY--------------------------------------------------------------------------------
Toastify({
    text: "Hora de cenar!",
    duration: 2800,
    style: {
        background: "linear-gradient(90deg, rgba(254, 44, 85, 0.602), rgba(37,244,238, 0.602))",
      },
    offset: {
      x: '55em', 
      y: '35em' 
    },
    onClick: () => {
           
        Toastify({
            text: 'Presione el dia para ver el menu!',
            duration: 2500,
            style: {
                background: "linear-gradient(90deg, rgba(254, 44, 85, 0.602), rgba(37,244,238, 0.602))",
              },
            offset: {
                x: '55em', 
                y: '35em' 
              },
              
        }).showToast()
    }
  }).showToast();


let desplegar = document.getElementById("btnPrincipal").addEventListener("click", mostrar,);

function mostrar(){
    document.getElementById('opcionesLunes').style.visibility ='visible';
    }

let hide = document.getElementById("btnOcultar").addEventListener("click", ocultar,);

function ocultar(){
    document.getElementById('opcionesLunes').style.visibility ='hidden';
    }
//-------------------------------

    let desplegar2 = document.getElementById("btnPrincipal2").addEventListener("click", mostrar2,);

function mostrar2(){
    document.getElementById('opcionesMartes').style.visibility ='visible';
    }

let hide2 = document.getElementById("btnOcultar2").addEventListener("click", ocultar2,);

function ocultar2(){
    document.getElementById('opcionesMartes').style.visibility ='hidden';
    }
//-------------------------------
let desplegar3 = document.getElementById("btnPrincipal3").addEventListener("click", mostrar3,);

function mostrar3(){
    document.getElementById('opcionesMiercoles').style.visibility ='visible';
    }

let hide3 = document.getElementById("btnOcultar3").addEventListener("click", ocultar3,);

function ocultar3(){
    document.getElementById('opcionesMiercoles').style.visibility ='hidden';
    }
//-------------------------------
let desplegar4 = document.getElementById("btnPrincipal4").addEventListener("click", mostrar4,);

function mostrar4(){
    document.getElementById('opcionesJueves').style.visibility ='visible';
    }

let hide4 = document.getElementById("btnOcultar4").addEventListener("click", ocultar4,);

function ocultar4(){
    document.getElementById('opcionesJueves').style.visibility ='hidden';
    }
//-------------------------------
let desplegar5 = document.getElementById("btnPrincipal5").addEventListener("click", mostrar5,);

function mostrar5(){
    document.getElementById('opcionesViernes').style.visibility ='visible';
    }

let hide5 = document.getElementById("btnOcultar5").addEventListener("click", ocultar5,);

function ocultar5(){
    document.getElementById('opcionesViernes').style.visibility ='hidden';
    }
    
//desplegar menues - fin ------------------  

