let userdata = {}
const form = document.querySelector("#form_deposito")
const botonRegreso = document.querySelector("#return")

document.addEventListener("DOMContentLoaded", function () {
    const correctUserString = sessionStorage.getItem("correctUser");
    const correctUser = JSON.parse(correctUserString);
    userdata = correctUser;
    console.log(correctUser)
});


form.addEventListener("submit", function (e) {

    e.preventDefault()
    const dataform = new FormData(form)
    const { deposito } = Object.fromEntries(dataform)

    userdata.saldo = Number(userdata.saldo) + Number(deposito)

    
    if (!userdata.historialDepositos) {
        userdata.historialDepositos = []

    }

    if (isNumber(Number(deposito))) {

        if (Number(deposito) !== 0) {
            const depositado = {monto: Number(deposito)}
            userdata.historialDepositos.push(depositado)
        }
        if (userdata.saldo > 990) {
           alert("su cuenta no puede tener mas de 990 MXN - OPERACION CANCELADA -")
            userdata.saldo = Number(990)

        }else {
        sessionStorage.setItem("correctUser", JSON.stringify(userdata))
        window.location.href = "./atm.html"
        }

    }
    else {
        alert("Cantidad invalida")
    }
    
    
})

function isNumber(valor) {
    return !isNaN(valor)
    
}

botonRegreso.addEventListener('click', function () {
    window.location.href = "/atm.html"
})
