let bd=JSON.parse(localStorage.getItem("miBDu"));
    if (!bd || bd==undefined){
        bd={datos:[]};
    }
let bdD = [];
var deudaTT=0;
var deudaTTT=0;
var id=0;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("btnRegistrar").addEventListener("click",()=>{

    let nombre=document.getElementById("txtNombre").value;
    let telefono=document.getElementById("txtTelefono").value;
    let correo=document.getElementById("txtCorreo").value;
    let contraseña=document.getElementById("txtContraseña").value;
    let alguien = new Usuario(nombre,telefono,correo,contraseña);
    bd.datos.push(alguien);     
    localStorage.setItem("miBDu",JSON.stringify(bd));
    console.log("guardado " + alguien );
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("btnRestore").addEventListener("click",()=>{
    let texto = "";
    var i =0;
    bd.datos.forEach(element => {
        texto+=`<div class="card">
        <p> Nombre: ${element.nombre} Telefono: ${element.telefono} Correo: ${element.correo}<input type="number" class="form-control" id="persona${i}" placeholder="Cantidad a Cobrar"></p>
        `
        i++;
    });
    document.getElementById('detalles').innerHTML=texto;
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("btnDeudas").addEventListener("click",()=>{
    let texto = "";
    var i = 0;
    bdD.forEach(element => {
        let id = element.id;
        if(i != id){
            i = 0;
        } 
        const deudaT= parseInt(element.dineroT);
        const deudaD = parseInt(element.dinero);
        deudaTT += deudaD + deudaT;
        
        texto+=`<div class="card">
        <p> Nombre: ${element.nombre} Deuda: ${deudaTT} pesos</p>
        `

        i++;
    });//pos no funciona bien xD F C H A L E
    document.getElementById('detalles').innerHTML=texto;
    texto = innerHTML="";
    deudaTT = 0;
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("btnCobrar").addEventListener("click",()=>{
    var i = 0;
    let Din ="";
    let dineroT=0;
    let dinero=0;
    let nombre;
    bd.datos.forEach(element => {
        id=i;
        dinero=document.getElementById(`persona${i}`).value;  
        dineroT=document.getElementById("txtCobrarTodos").value;
        
     console.log(dinero)
        if (dinero == ""){
                dinero = 0;
        }
        if(dineroT ==""){
            dineroT = 0;
        }

        if( dineroT != 0){ 
            Din+=`<div class="card">
            <p> Nombre: ${element.nombre} Cantidad ingresada: ${dineroT}</p>
            `
        }else if(dinero!=0){
            Din+=`<div class="card">
            <p> Nombre: ${element.nombre} Cantidad ingresada: ${dinero}</p>
            `
        }
        nombre = element.nombre;
        const deudores = new Deudores(id,nombre,dinero,dineroT);
        bdD.push(deudores);
        i++; 
    });   
    i = 0;
    localStorage.setItem("Deudas",JSON.stringify(bdD));
    document.getElementById('detalles').innerHTML=Din;
});
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById("btnBorrar").addEventListener("click",()=>{
    localStorage.clear('miBDu');
    localStorage.clear('user');
    localStorage.clear('Deudas');
    console.log("localstorage borrado");
});