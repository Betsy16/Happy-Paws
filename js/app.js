const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnCachorros = document.querySelector('.cachorros');
const btnAdultos = document.querySelector('.adultos');
const btnDiscapacitados = document.querySelector('.discapacitados');
const btnGatos = document.querySelector('.gatos');
const contenedorAdopcion = document.querySelector('.adopcion');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    adopcion();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const adopcion = () =>{
    let adopcionArreglo = [];
    const adopcion = document.querySelectorAll('.adopcion');

    adopcion.forEach(adopcion=> adopcionArreglo = [...adopcionArreglo,adopcion]);

    const cachorros = adopcionArreglo.filter(cachorros=> cachorros.getAttribute('data-adopcion') === 'cachorros');
    const adultos = adopcionArreglo.filter(adultos => pasta.getAttribute('data-adopcion') === 'adultos');
    const discapacitados = adopcionArreglo.filter(discapacitados => discapacitados.getAttribute('data-adopcion') === 'discapacitados');
    const gatos = adopcionArreglo.filter(gatos=> gatos.getAttribute('data-adopcion') === 'gatos');

    mostraradopcion(cachorros, adultos, discapacitados, gatos, adopcionArreglo);

}

const mostrarAdopcion = (cachorros, adultos, discapacitados, gatos, todos) =>{
    btnCachorros.addEventListener('click', ()=>{
        limpiarHtml(contenedorAdopcion);
        cachorros.forEach(cachorros=> contenedorAdopcion.appendChild(cachorros));
    });

    btnPasta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
         pastas.forEach(pasta=> contenedorPlatillos.appendChild(pasta));
    });

    btnPizza.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza=> contenedorPlatillos.appendChild(pizza));
    });
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}