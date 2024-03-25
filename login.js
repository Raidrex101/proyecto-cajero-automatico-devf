
const banco = [
    {
        nombre: "Carlos",
        cuenta: 123,
        password: "123",
        saldo: "100",
        currency: "MXN",
    }, 
    {
        nombre: "Fernando",
        cuenta: 456,
        password: "123",
        saldo: "200",
        currency: "MXN",
    } 
];


const cuenta = document.querySelector("#login_cuenta")

const password = document.querySelector("#password")

const buttonLogin = document.querySelector("button")

buttonLogin.addEventListener("click", function(e){
    
    e.preventDefault()
    const currentCuenta = cuenta.value
    const currentPassword = password.value
    let correctUser = null
    
    for (let i = 0; i < banco.length; i++) {
        const usuarioBb = banco[i] 

        console.log({ currentCuenta, currentPassword, usuarioBb })
        if (usuarioBb.cuenta === Number(currentCuenta) && usuarioBb.password === currentPassword) {            
            correctUser = usuarioBb
            break
        }        
    }

    console.log(correctUser, "Si lo encontramos")
 
    if (!correctUser) {
        
        alert("Alto ahi ampon!")  

    } else  {
        
        sessionStorage.setItem("correctUser", JSON.stringify(correctUser))
        window.location.href = "/atm.html"
    }
    
})

