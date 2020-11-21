const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

let bd=JSON.parse(localStorage.getItem("miBDu"));

form.addEventListener('submit',function(event){
    event.preventDefault();
    let users = Array(
        {
            usuario: username.value,
            contraseña: password.value
        }
    );
    localStorage.setItem('user',JSON.stringify(users));
    

    if(username.value == "admin" && password.value == "admin"){
        location.href='../propietario/RegistrarUsuarios.html';
    }
    bd.datos.forEach(element => {
        const nombre =element.nombre;
        const psw =element.contraseña;
        if (nombre == username.value && psw == password.value){
            location.href="page.html";
        }
        console.log(nombre);
        console.log(psw);
    });
});
