let userdata = {}
const form = document.querySelector("#form_retiros")
const botonRegreso = document.querySelector("#regreso")


document.addEventListener("DOMContentLoaded", function () {
    const correctUserString = sessionStorage.getItem("correctUser")
    const correctUser = JSON.parse(correctUserString)
    userdata = correctUser
    console.log(correctUser)
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const dataform = new FormData(form)
    const { retiros } = Object.fromEntries(dataform)
    console.log("Cantidad de retiro:", retiros)
    userdata.saldo = Number(userdata.saldo) - Number(retiros)
    
    if (!userdata.historialRetiros) {

        userdata.historialRetiros = []

    }
    
    if (Number(retiros) !== 0) {
        const retirado = {monto: Number(retiros)}
        userdata.historialRetiros.push(retirado)
    }
    if (userdata.saldo <= 10) {
        alert("su cuenta no puede tener menos de 10 MXN se restara de su retiro la cantidad que exeda este limite")
         userdata.saldo = Number(10)
     }
    sessionStorage.setItem("correctUser", JSON.stringify(userdata))

    window.location.href = "/atm.html"
})


botonRegreso.addEventListener('click', function () {
    window.location.href = "/atm.html"
})

