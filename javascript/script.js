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
};

link__btn.addEventListener("click", () => {
    console.log(valorUrl.value)
    acortarUrl(valorUrl.value);

});
