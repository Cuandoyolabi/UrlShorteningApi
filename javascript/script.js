const menuNav__btn = document.getElementById("header-menu-id");
const headerMenu = document.getElementById("header-menu-toggle");
menuNav__btn.addEventListener("click",   () => {

    headerMenu.classList.toggle("active");
    
});



const valorUrl = document.getElementById("link__input");
const link__btn = document.getElementById("link__btn");

async function acortarUrl(url){

    const respuesta = await fetch("https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten", { 

        method: 'POST',
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
        },
        body: "url=" + encodeURIComponent(url) 
    });

    const datos = await respuesta.json();
    console.log(datos);

    //crearContenedorHistorial(url, datos);

};

link__btn.addEventListener("click", () => {
    console.log(valorUrl.value)
    acortarUrl(valorUrl.value);
});


/* Contenedor - Historial  */
const historial = document.getElementById("historial-container-id");

function crearContenedorHistorial(urlCompleta, urlRecortada){

    const contenedorUrl = document.createElement("div");
    const contenedorUrlInicial = document.createElement("h1");
    const contenedorUrlSeparador = document.createElement("hr");
    const contenedorUrlFinal = document.createElement("h1");
    const contenedorUrlBtn = document.createElement("button");
    
    contenedorUrl.classList.add("contenedorUrl");
    contenedorUrlInicial.classList.add("contenedorUrlInicial");
    contenedorUrlSeparador.classList.add("contenedorUrlSeparador");
    contenedorUrlFinal.classList.add("contenedorUrlFinal");
    contenedorUrlBtn.classList.add("contenedorUrlBtn");

    contenedorUrlInicial.textContent = urlCompleta;
    contenedorUrlFinal.textContent = urlRecortada;
    contenedorUrlBtn.textContent = "Copy";

    historial.appendChild(contenedorUrl);
    contenedorUrl.appendChild(contenedorUrlInicial);
    contenedorUrl.appendChild(contenedorUrlSeparador);
    contenedorUrl.appendChild(contenedorUrlFinal);
    contenedorUrl.appendChild(contenedorUrlBtn);

}