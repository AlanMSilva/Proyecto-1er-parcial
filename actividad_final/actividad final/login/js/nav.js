const usernav = document.getElementById('usernav');
const close = document.getElementById('close');

let bdD = JSON.parse(localStorage.getItem("Deudas"));

let username = JSON.parse(localStorage.getItem('user'));
let nombresito =username[0].usuario;

console.log(nombresito)
if(username != null){
    usernav.innerHTML=' <a href="#" id="close" class="nav-item nav-link active">'+ username[0].usuario +'</a>'
}else{
    usernav.innerHTML=' <a href="index.html" id="close" class="nav-item nav-link active">Iniciar sesión</a>'
}
close.addEventListener('click',function(){
    location.href='index.html';
});

document.getElementById("btnDeudasD").addEventListener("click",()=>{
    let texto = document.getElementById("detallesD");
    bdD.forEach(element => {
        let nombre = element.nombre;
        if(nombresito == nombre){
            texto.innerHTML=`<div class="card">
            <p> Nombre: ${element.nombre} Deuda: ${element.dinero}</p>
            `
            console.log("lo logre")
        }
    });
});