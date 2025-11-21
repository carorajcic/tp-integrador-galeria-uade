function filtrarOfertas(categoria) {
    const ofertas = document.querySelectorAll(
        ".oferta-card, .oferta-card-grande"
    );
    const botones = document.querySelectorAll(".filtro-btn");

    botones.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");

    ofertas.forEach((oferta) => {
        const categoriaOferta = oferta.getAttribute("data-categoria");

        if (categoria === "todas") {
            oferta.style.display = "flex";
        } else if (categoriaOferta === categoria) {
            oferta.style.display = "flex";
        } else {
            oferta.style.display = "none";
        }
    });
}

