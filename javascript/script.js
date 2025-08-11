

async function acortarUrl(url){

    const respuesta = await fetch('https://cleanuri.com/api/v1/shorten', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
        },
        body: "url=" + encodeURIComponent(url) 
    });

    const datos = await respuesta.json();
    console.log(datos);
}

acortarUrl("https://google.com/");