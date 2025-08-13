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

    crearContenedorHistorial(url, datos.result_url);

};

link__btn.addEventListener("click", () => {
    console.log(valorUrl.value)
    acortarUrl(valorUrl.value);
});


/* Contenedor - Historial  */
const historial = document.getElementById("historial-container-id");

 //Se crea un contador basico
let num = 0;

function crearContenedorHistorial(urlCompleta, urlRecortada){

    const contenedorUrl = document.createElement("div");
    const contenedorUrlInicial = document.createElement("h1");
    const contenedorUrlSeparador = document.createElement("hr");
    const contenedorUrlFinal = document.createElement("a");
    const contenedorUrlBtn = document.createElement("button");
    
    contenedorUrl.classList.add("contenedorUrl");
    contenedorUrlInicial.classList.add("contenedorUrlInicial");
    contenedorUrlSeparador.classList.add("contenedorUrlSeparador");
    contenedorUrlFinal.classList.add("contenedorUrlFinal");
    contenedorUrlBtn.classList.add("contenedorUrlBtn");

    contenedorUrlInicial.textContent = urlCompleta;
    contenedorUrlFinal.textContent = urlRecortada;
    contenedorUrlBtn.textContent = "Copy";

    contenedorUrlBtn.id = "buttonCopyUrl" + `${num + 1}`;
    contenedorUrlFinal.id = "urlCortada" + `${num + 1}`;
    console.log(contenedorUrlBtn, contenedorUrlFinal)
    contenedorUrlFinal.href = urlRecortada;

    //Suma el contador cada que un elemento es creado
    num += 1;

    historial.appendChild(contenedorUrl);
    contenedorUrl.appendChild(contenedorUrlInicial);
    contenedorUrl.appendChild(contenedorUrlSeparador);
    contenedorUrl.appendChild(contenedorUrlFinal);
    contenedorUrl.appendChild(contenedorUrlBtn);

    //Funcionalidad del boton que permite copiar el link
    contenedorUrlBtn.addEventListener("click", function() {
        copiarLink(urlRecortada, contenedorUrlBtn);
    });
};


function copiarLink(url, Btn){

     navigator.clipboard.writeText(url).then(() => {
        //Aqui debe cambiar el contenido del bton
        Btn.textContent = "Copied!";
        Btn.classList.add("copied");
    });
};
