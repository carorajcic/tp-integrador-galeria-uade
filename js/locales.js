const locales = [
    {
        nombre: "Carito Pasteles",
        ubicacion: "Local 202 - Sector Gastronomía",
        horarios:
            "Lunes a Sábados: 10:00 - 21:00hs | Domingos: 11:00 - 20:00hs",
        imagen: "img/caritopasteles.png",
        website: "https://ramirokreimisuade.github.io/PasteleriaCarito/productos.html",
    },
    {
        nombre: "decohome",
        ubicacion: "Local 265 - Sector Decoración",
        horarios: "Lunes a Domingos: 10:00 - 21:00hs",
        website: "https://carorajcic.github.io/homedeco-uade/",
    },
    {
        nombre: "RAM",
        ubicacion: "Local 308 - Sector Informática",
        horarios:
            "Lunes a Viernes: 09:00 - 20:00hs | Sábados y Domingos: 10:00 - 19:00hs",
        website: "https://cristianrojas12.github.io/LOCAL_COMERCIAL/RAM_web/index/index.html",
    },
    {
        nombre: "Ferreteria 9 de Julio",
        ubicacion: "Local 125 - Sector Herramientas",
        horarios:
            "Lunes a Viernes: 09:00 - 20:00hs | Sábados y Domingos: 10:00 - 19:00hs",
        imagen: "img/ferreteria9dejulio.svg",
        website: "https://emanueldiaz-uade.github.io/ferreteria-9dejulio-promos/",
    },
    {
        nombre: "INK",
        ubicacion: "Local 102 - Sector Educativo",
        horarios:
            "Lunes a Viernes: 09:00 - 20:00hs | Sábados y Domingos: 10:00 - 19:00hs",
        imagen: "img/ink.svg",
        website: "https://eskiu.github.io/UADE-DyDW-TPObligatorio01/",
    },
];

function buscarLocal() {
    const input = document
        .getElementById("searchInput")
        .value.toLowerCase();
    const marcas = document.querySelectorAll(".marca-card");

    marcas.forEach((marca) => {
        const texto = marca.textContent.toLowerCase();
        if (texto.includes(input)) {
            marca.style.display = "flex";
            marca.style.border = "3px solid var(--color-primary)";
        } else {
            marca.style.display = input ? "none" : "flex";
            marca.style.border = "2px solid var(--color-primary)";
        }
    });
}

function mostrarLocal(numero) {
    const puntos = document.querySelectorAll(".map-point");
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].classList.remove("active");
    }

    puntos[numero].classList.add("active");

    const local = locales[numero];
    const imagenElement = document.getElementById("localImagen");
    
    document.getElementById("localNombre").textContent = local.nombre;
    document.getElementById("localUbicacion").textContent = local.ubicacion;
    document.getElementById("localHorarios").textContent = local.horarios;
    
    if (local.imagen) {
        imagenElement.src = local.imagen;
        imagenElement.style.display = "block";
        imagenElement.alt = local.nombre;
    } else {
        imagenElement.style.display = "none";
    }
    
    document.getElementById("localWebsite").href = local.website;
    document.getElementById("localInfo").classList.add("active");
    document.getElementById("localInfo").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
    });
}

function cerrarLocalInfo() {
    const localInfoElement = document.getElementById("localInfo");
    localInfoElement.classList.remove("active");
    
    const puntos = document.querySelectorAll(".map-point");
    puntos.forEach(punto => punto.classList.remove("active"));
}

