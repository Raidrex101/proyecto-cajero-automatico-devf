
const botondeposito = document.querySelector("#depositos");
const botonSaldos = document.querySelector("#saldo")
const fondoDeModal = document.querySelector("#backdrop")
const botonRetiros = document.querySelector("#retiros")
const contenidoDelModal = document.querySelector("#contenido_del_modal")
const botonSalir = document.querySelector("#salir")
const botonCerrarModal = modal.querySelector("#cerrar")
const botonMovimientos = document.querySelector("#movimientos")

let userdata = {};

document.addEventListener("DOMContentLoaded", function () {
    const correctUserString = sessionStorage.getItem("correctUser");
    const correctUser = JSON.parse(correctUserString);

    if (!correctUser) window.location.href = "/index.html";
     userdata = correctUser;

    
    const saludoTag = document.querySelector("#saludo_usuario");
    
    saludoTag.outerHTML = `<h1>Bienvenido ${correctUser.nombre}</h1>`;
    console.log(userdata)
});

botondeposito.addEventListener("click", function () {
    window.location.href = "/pantalla.html";
});

function conmutarClase(elementohtml, clase) {
    elementohtml.classList.toggle(clase)
}

function abrirModal(textoDelModal) {
    fondoDeModal.style.display = "block"
    conmutarClase(modal, "close_modal")
    contenidoDelModal.innerHTML = textoDelModal
}
botonCerrarModal.addEventListener('click', function () {
    conmutarClase(modal, 'close_modal')
    fondoDeModal.style.display = "none"
    contenidoDelModal.innerHTML = ''
});


botonSaldos.addEventListener('click', function () {
    const textoDelModal = `
    <div>
        <h4 style="font-size: 1.5rem"> Su saldo total es de:</h4>
        <h5 style="font-size: 2rem">${userdata.saldo} ${userdata.currency}</h5>
    </div>
    `
    abrirModal(textoDelModal)

})

fondoDeModal.addEventListener('click', function () {
    fondoDeModal.style = "display: block"
    conmutarClase(modal, 'close_modal')
    fondoDeModal.style = "display: none"
})

botonRetiros.addEventListener('click', function () {
    window.location.href = "/retiros.html"
})

botonSalir.addEventListener('click', function () {
    const textoDelModal = `
    <div>
        <h5 style="font-size: 2rem text-aling: center"> Gracias por usar Vite App ${userdata.nombre} nos vemos pronto </h5>
    </div>`
    abrirModal(textoDelModal)

    if (botonCerrarModal.addEventListener('click', function () {
        window.location.href = "/index.html"
    })) {
    } else if (fondoDeModal.addEventListener('click', function () {
        window.location.href = "/index.html"
    })) {
    }
})

botonMovimientos.addEventListener('click', function(){
    const textoDelModal = `
    <div>
    <h2> ${userdata.historialRetiros} </h2>
    </div>
    `
    abrirModal(textoDelModal)
})