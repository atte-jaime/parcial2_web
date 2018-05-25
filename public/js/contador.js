var boton1 = document.getElementById('inicio');
boton1.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("Visitado");
});

var boton2 = document.getElementById('page2');
boton2.addEventListener('click', (e) => {
    e.preventDefault();    
    console.log("Visitado");
});

var boton3 = document.getElementById('page3');
boton3.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Visitado");
});