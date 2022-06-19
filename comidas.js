//LUNES-----------------------------------------------
    
//FUNCION MOSTRAR
function mostrarMenuLunes(dataLun){
    let contenido = "";

    for (const platosLun of dataLun) {
        contenido +=
     `<div class="card m-2 shadow-lg style="width: 18rem;">
        <img src="./images/${platosLun.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosLun.nombre}</h5>
          <p class="card-text">$${platosLun.precio}</p>
          <a href="#" class="btn btn-primary"  onclick="agregarAlCarritoL(${platosLun.id});">Comprar</a>
        </div>
      </div>`;
    }
    document.getElementById("opcionesLunes").innerHTML = contenido;
};

//FUNCION CARGAR LOCAL STORAGE--

function cargarProductosLunLS() {
    return JSON.parse(localStorage.getItem("menuLunes"));
}

//FUNCION PARA BUSCAR COMIDA DEL MENU LUNES--
function buscarProductoLun (id){
    let platosLunes = cargarProductosLunLS();
    return platosLunes.find(x => x.id == id);
};

//FUNCION PARA QUE CADA PRODUCTO SE ACUMULE--
function cargarProductosCarrito() {
    if (localStorage.getItem("elegidos")) {
        return JSON.parse(localStorage.getItem("elegidos"));
    }
    return [];
}

//FUNCION PARA AGREGAR AL CARRITO--
function agregarAlCarritoL(id){
    let eleccion = buscarProductoLun(id)
    let menu_elegido = cargarProductosCarrito()
    menu_elegido.push (eleccion);
    console.log(eleccion);  
    localStorage.setItem("elegidos", JSON.stringify (menu_elegido));
    actualizarBotonCarrito(); 
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}
 
//FUNCION PARA ACTUALIZAR CARRITO--
function actualizarBotonCarrito() {
    let menu_elegido = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-4"><img src="images/cart.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${menu_elegido.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

//FUNCION PARA ELIMINAR PRODUCTO POR PRODUCTO--
function eliminarProducto(id) {
    let menu_elegido = cargarProductosCarrito();
    let menu_elegido_actualizado = menu_elegido.filter(x => x.id != id);
    localStorage.setItem("elegidos", JSON.stringify(menu_elegido_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
    console.log(eliminarProducto);
}
 
//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    
    if (document.getElementById("carritoParaRellenar")) {
        
        let platosLunes = cargarProductosCarrito();
        let miPlato = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosLunes.length == 0) {
            contenido = "<p class='text-center bg-none p-3 mt-3'>No se encontraron Productos seleccionados!</p>";
            miPlato.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover ">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const miPlato of platosLunes) {
                contenido += `<tr>
                <td class="light">${miPlato.nombre}</td>
                <td class='text-end light'><b>$${miPlato.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${miPlato.id});'> X </button></td>
                </tr>`;
                total += miPlato.precio;
            }

            contenido += `<tr class="bg-light p-3">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            miPlato.innerHTML = contenido;

        }
    }
}
    cargarProductosSeleccionados();
    actualizarBotonCarrito();
    document.getElementById("vaciar_carrito").addEventListener("click", vaciarCarrito); 

//fetch*/
const arrayLunes = 'menuLunes.json';
const boton = document.getElementById("btnPrincipal");
boton?.addEventListener("click", traerArray);

function traerArray(){
fetch (arrayLunes)
.then (response => response.json())
.then (dataLun => {
        console.log(dataLun)

        mostrarMenuLunes(dataLun)
        

            const guardarMenuLunesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
            for (const menu of dataLun) {
                guardarMenuLunesLS("menuLunes", JSON.stringify(dataLun));
                console.log("El menu del lunes es: " + localStorage.getItem("menuLunes"));
            }
        })     
    } 
        
 //MARTES-----------------------------------------------       
   
 const arrayMartes = 'menuMartes.json';

//FUNCION MOSTRAR--
function mostrarMenuMartes(dataMar){
    let contenido = "";

    for (const platosMar of dataMar) {
        contenido +=
     `<div class="card m-2 shadow-lg style="width: 18rem;">
        <img src="./images/${platosMar.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosMar.nombre}</h5>
          <p class="card-text">$${platosMar.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto" onclick="agregarAlCarritoM(${platosMar.id});">Comprar</a>
        </div>
      </div>`;
    }
    document.getElementById("opcionesMartes").innerHTML = contenido;
};

//FUNCION CARGAR LOCAL STORAGE--
function cargarProductosMarLS() {
    return JSON.parse(localStorage.getItem("menuMartes"));
}

//FUNCION PARA BUSCAR COMIDA DEL MENU LUNES--
function buscarProductoMar (id){
    let platosMartes = cargarProductosMarLS();
    return platosMartes.find(x => x.id == id); 
};

//FUNCION PARA QUE CADA PRODUCTO SE ACUMULE--
function cargarProductosCarrito() {
    if (localStorage.getItem("elegidos")) {
        return JSON.parse(localStorage.getItem("elegidos"));
    }
    return [];
}

//FUNCION PARA AGREGAR AL CARRITO--
function agregarAlCarritoM(id){
let eleccion = buscarProductoMar(id);
let menu_elegido = cargarProductosCarrito();
menu_elegido.push (eleccion)
localStorage.setItem("elegidos", JSON.stringify (menu_elegido));
actualizarBotonCarrito();
console.log(eleccion);   
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}
 
//FUNCION PARA ACTUIALIZAR CARRITO--
function actualizarBotonCarrito() {
    let menu_elegido = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-4"><img src="images/cart.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${menu_elegido.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

//FUNCION PARA ELIMINAR PRODUCTO POR PRODUCTO--
function eliminarProducto(id) {
    let menu_elegido = cargarProductosCarrito();
    let menu_elegido_actualizado = menu_elegido.filter(x => x.id != id);
    localStorage.setItem("elegidos", JSON.stringify(menu_elegido_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
    console.log(eliminarProducto);
}

//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    
    if (document.getElementById("carritoParaRellenar")) {
        
        let platosMartes = cargarProductosCarrito();
        let miPlato = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosMartes.length == 0) {
            contenido = "<p class='text-center bg-none p-3 mt-3'>No se encontraron Productos seleccionados!</p>";
            miPlato.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover ">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const miPlato of platosMartes) {
                contenido += `<tr>
                <td class="light">${miPlato.nombre}</td>
                <td class='text-end light'><b>$${miPlato.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${miPlato.id});'> X </button></td>
                </tr>`;
                total += miPlato.precio;
            }

            contenido += `<tr class="bg-light p-3">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            miPlato.innerHTML = contenido;

        }
    }
}
cargarProductosSeleccionados();
actualizarBotonCarrito();
document.getElementById("vaciar_carrito").addEventListener("click", vaciarCarrito); 

//FETCH
const boton2 = document.getElementById("btnPrincipal2")
boton2?.addEventListener('click', () => {
fetch (arrayMartes)
.then (response => response.json())
.then (dataMar => {
        console.log(dataMar)
        mostrarMenuMartes(dataMar)

        const guardarMenuMartesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
        for (const menu of dataMar) {
            guardarMenuMartesLS("menuMartes", JSON.stringify(dataMar));
            console.log("El menu del martes es: " + localStorage.getItem("menuMartes"));
        }
        cargarProductosMarLS(dataMar)
        })     
    })       
        
//MIERCOLES----------------------------------------------------------

const arrayMiercoles = 'menuMiercoles.json';

//FUNCION MOSTRAR--
function mostrarMenuMiercoles(dataMier){
    let contenido = "";

    for (const platosMier of dataMier) {
        contenido +=
     `<div class="card m-2 shadow-lg style="width: 18rem;">
        <img src="./images/${platosMier.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosMier.nombre}</h5>
          <p class="card-text">$${platosMier.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto" onclick="agregarAlCarritoMi(${platosMier.id});">Comprar</a>
        </div>
      </div>`;
    }
    document.getElementById("opcionesMiercoles").innerHTML = contenido;
};

//FUNCION CARGAR LOCAL STORAGE--
function cargarProductosMierLS() {
    return JSON.parse(localStorage.getItem("menuMiercoles"));
}

//FUNCION PARA BUSCAR COMIDA DEL MENU LUNES--
function buscarProductoMier (id){
    let platosMiercoles = cargarProductosMierLS();
    return platosMiercoles.find(x => x.id == id);
};

//FUNCION PARA QUE CADA PRODUCTO SE ACUMULE--
function cargarProductosCarrito() {
    if (localStorage.getItem("elegidos")) {
        return JSON.parse(localStorage.getItem("elegidos"));
    }
    return [];
}

//FUNCION PARA AGREGAR AL CARRITO--
function agregarAlCarritoMi(id){
let eleccion = buscarProductoMier(id);
let menu_elegido = cargarProductosCarrito();
menu_elegido.push (eleccion)
localStorage.setItem("elegidos", JSON.stringify (menu_elegido));
actualizarBotonCarrito();
console.log(eleccion);  
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}
 
//FUNCION PARA ACTUIALIZAR CARRITO--
function actualizarBotonCarrito() {
    let menu_elegido = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-4"><img src="images/cart.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${menu_elegido.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

//FUNCION PARA ELIMINAR PRODUCTO POR PRODUCTO--
function eliminarProducto(id) {
    let menu_elegido = cargarProductosCarrito();
    let menu_elegido_actualizado = menu_elegido.filter(x => x.id != id);
    localStorage.setItem("elegidos", JSON.stringify(menu_elegido_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
    console.log(eliminarProducto);
}

//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    
    if (document.getElementById("carritoParaRellenar")) {
        
        let platosMiercoles = cargarProductosCarrito();
        let miPlato = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosMiercoles.length == 0) {
            contenido = "<p class='text-center bg-none p-3 mt-3'>No se encontraron Productos seleccionados!</p>";
            miPlato.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover ">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const miPlato of platosMiercoles) {
                contenido += `<tr>
                <td class="light">${miPlato.nombre}</td>
                <td class='text-end light'><b>$${miPlato.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${miPlato.id});'> X </button></td>
                </tr>`;
                total += miPlato.precio;
            }

            contenido += `<tr class="bg-light p-3">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            miPlato.innerHTML = contenido;
        }
    }
}
cargarProductosSeleccionados();
actualizarBotonCarrito();
document.getElementById("vaciar_carrito").addEventListener("click", vaciarCarrito); 

//FETCH
const boton3 = document.getElementById("btnPrincipal3")
boton3?.addEventListener('click', () => {
fetch (arrayMiercoles)
.then (response => response.json())
.then (dataMier => {
        console.log(dataMier)
        mostrarMenuMiercoles(dataMier)

        const guardarMenuMiercolesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
        for (const menu of dataMier) {
            guardarMenuMiercolesLS("menuMiercoles", JSON.stringify(dataMier));
            console.log("El menu del miercoles es: " + localStorage.getItem("menuMiercoles"));
        }
        cargarProductosMierLS(dataMier)
        })     
    })     

//JUEVES----------------------------------------------------------

const arrayJueves = 'menuJueves.json';

//FUNCION MOSTRAR
function mostrarMenuJueves(dataJue){
    let contenido = "";

    for (const platosJue of dataJue) {
        contenido +=
     `<div class="card m-2 shadow-lg style="width: 18rem;">
        <img src="./images/${platosJue.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosJue.nombre}</h5>
          <p class="card-text">$${platosJue.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto" onclick="agregarAlCarritoJ(${platosJue.id});">Comprar</a>
        </div>
      </div>`;
    }
    document.getElementById("opcionesJueves").innerHTML = contenido;
};

//FUNCION CARGAR LOCAL STORAGE--

function cargarProductosJueLS() {
    return JSON.parse(localStorage.getItem("menuJueves"));
}

//FUNCION PARA BUSCAR COMIDA DEL MENU LUNES--
function buscarProductoJue (id){
    let platosJueves = cargarProductosJueLS();
    return platosJueves.find(x => x.id == id);  
};

//FUNCION PARA QUE CADA PRODUCTO SE ACUMULE--
function cargarProductosCarrito() {
    if (localStorage.getItem("elegidos")) {
        return JSON.parse(localStorage.getItem("elegidos"));
    }
    return [];
}

//FUNCION PARA AGREGAR AL CARRITO--
function agregarAlCarritoJ(id){
let eleccion = buscarProductoJue(id);
let menu_elegido = cargarProductosCarrito();
menu_elegido.push (eleccion)
localStorage.setItem("elegidos", JSON.stringify (menu_elegido));
actualizarBotonCarrito();
console.log(eleccion);   
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}
 
//FUNCION PARA ACTUIALIZAR CARRITO--
function actualizarBotonCarrito() {
    let menu_elegido = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-4"><img src="images/cart.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${menu_elegido.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

//FUNCION PARA ELIMINAR PRODUCTO POR PRODUCTO--
function eliminarProducto(id) {
    let menu_elegido = cargarProductosCarrito();
    let menu_elegido_actualizado = menu_elegido.filter(x => x.id != id);
    localStorage.setItem("elegidos", JSON.stringify(menu_elegido_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
    console.log(eliminarProducto);
}

//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    
    if (document.getElementById("carritoParaRellenar")) {
        
        let platosJueves = cargarProductosCarrito();
        let miPlato = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosJueves.length == 0) {
            contenido = "<p class='text-center bg-none p-3 mt-3'>No se encontraron Productos seleccionados!</p>";
            miPlato.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover ">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const miPlato of platosJueves) {
                contenido += `<tr>
                <td class="light">${miPlato.nombre}</td>
                <td class='text-end light'><b>$${miPlato.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${miPlato.id});'> X </button></td>
                </tr>`;
                total += miPlato.precio;
            }

            contenido += `<tr class="bg-light p-3">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            miPlato.innerHTML = contenido;
        }
    }
}
cargarProductosSeleccionados();
actualizarBotonCarrito();
document.getElementById("vaciar_carrito").addEventListener("click", vaciarCarrito); 

//FETCH
const boton4 = document.getElementById("btnPrincipal4")
boton4?.addEventListener('click', () => {
fetch (arrayJueves)
.then (response => response.json())
.then (dataJue => {
        console.log(dataJue)
        mostrarMenuJueves(dataJue)

        const guardarMenuJuevesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
        for (const menu of dataJue) {
            guardarMenuJuevesLS("menuJueves", JSON.stringify(dataJue));
            console.log("El menu del jueves es: " + localStorage.getItem("menuJueves"));
        }
        cargarProductosJueLS(dataJue)
        })     
    })     

//VIERNES----------------------------------------------------------
 
const arrayViernes = 'menuViernes.json';

//FUNCION MOSTRAR
function mostrarMenuViernes(dataVie){
    let contenido = "";

    for (const platosVie of dataVie) {
        contenido +=
     `<div class="card m-2 shadow-lg style="width: 18rem;">
        <img src="./images/${platosVie.imagen}" class="card-img-top" alt="...">
        <div class="card-body ">
          <h5 class="card-title">${platosVie.nombre}</h5>
          <p class="card-text">$${platosVie.precio}</p>
          <a href="#" class="btn btn-primary agregarProducto" onclick="agregarAlCarritoV(${platosVie.id});">Comprar</a>
        </div>
      </div>`;
    }
    document.getElementById("opcionesViernes").innerHTML = contenido;
};

//FUNCION CARGAR LOCAL STORAGE--
function cargarProductosVieLS() {
    return JSON.parse(localStorage.getItem("menuViernes"));
}

//FUNCION PARA BUSCAR COMIDA DEL MENU LUNES--
function buscarProductoVie (id){
    let platosViernes = cargarProductosVieLS();
    return platosViernes.find(x => x.id == id); 
};

//FUNCION PARA QUE CADA PRODUCTO SE ACUMULE--
function cargarProductosCarrito() {
    if (localStorage.getItem("elegidos")) {
        return JSON.parse(localStorage.getItem("elegidos"));
    }
    return [];
}

//FUNCION PARA AGREGAR AL CARRITO--
function agregarAlCarritoV(id){
let eleccion = buscarProductoVie(id);
let menu_elegido = cargarProductosCarrito();
menu_elegido.push (eleccion)
localStorage.setItem("elegidos", JSON.stringify (menu_elegido));
actualizarBotonCarrito();
console.log(eleccion);    
} 

//FUNCION PARA VACIAR EL ARRAY CARRITO--
function vaciarCarrito(){
    localStorage.removeItem("elegidos");
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
}
 
//FUNCION PARA ACTUIALIZAR CARRITO--
function actualizarBotonCarrito() {
    let menu_elegido = cargarProductosCarrito();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-4"><img src="images/cart.svg" alt="Carrito" width="32"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${menu_elegido.length}</span></button>`;
    document.getElementById("boton_carrito").innerHTML = contenido;
}

//FUNCION PARA ELIMINAR PRODUCTO POR PRODUCTO--
function eliminarProducto(id) {
    let menu_elegido = cargarProductosCarrito();
    let menu_elegido_actualizado = menu_elegido.filter(x => x.id != id);
    localStorage.setItem("elegidos", JSON.stringify(menu_elegido_actualizado));
    actualizarBotonCarrito();
    cargarProductosSeleccionados();
    console.log(eliminarProducto);
}

//FUNCION PARA IMPRIMIR PRODUCTOS EN EL HTML--
function cargarProductosSeleccionados() {
    
    if (document.getElementById("carritoParaRellenar")) {
        
        let platosViernes = cargarProductosCarrito();
        let miPlato = document.getElementById("carritoParaRellenar");
        let contenido = "";

        if (platosViernes.length == 0) {
            contenido = "<p class='text-center bg-none p-3 mt-3'>No se encontraron Productos seleccionados!</p>";
            miPlato.innerHTML = contenido;
        } else {
            let total = 0;
            contenido = `<table class="table table-hover ">
            <tr>
            <th>Nombre</th>
            <th class='text-end'>Precio</th>
            <th>&nbsp;</th>
            </tr>`;

            for (const miPlato of platosViernes) {
                contenido += `<tr>
                <td class="light">${miPlato.nombre}</td>
                <td class='text-end light'><b>$${miPlato.precio}</b></td>
                <td class='text-end'><button class='btn btn-danger' onclick='eliminarProducto(${miPlato.id});'> X </button></td>
                </tr>`;
                total += miPlato.precio;
            }

            contenido += `<tr class="bg-light p-3">
            <td>Total a Pagar</td>
            <td class='text-end'><b>$${total}</b></td>
            <td>&nbsp;</td>
            </tr>
            </table>`;
            miPlato.innerHTML = contenido;
        }
    }
}
cargarProductosSeleccionados();
actualizarBotonCarrito();
document.getElementById("vaciar_carrito").addEventListener("click", vaciarCarrito); 

//FETCH
const boton5 = document.getElementById("btnPrincipal5")
boton5?.addEventListener('click', () => {
fetch (arrayViernes)
.then (response => response.json())
.then (dataVie => {
        console.log(dataVie)

        mostrarMenuViernes(dataVie)

        const guardarMenuViernesLS = (nombre, precio) => { localStorage.setItem(nombre, precio) };
        for (const menu of dataVie) {
            guardarMenuViernesLS("menuViernes", JSON.stringify(dataVie));
            console.log("El menu del viernes es: " + localStorage.getItem("menuViernes"));
        }
        cargarProductosVieLS(dataVie)
        })     
    })  
    