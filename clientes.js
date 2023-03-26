const clientes = [
    "./IMAGENES/Clientes/Cliente1.png",
    "./IMAGENES/Clientes/Cliente2.png",
    "./IMAGENES/Clientes/Cliente3.png",
    "./IMAGENES/Clientes/Cliente4.png"
]


const indiceCliente = document.querySelector(".carousel-indicators");
const imagenCliente = document.querySelector(".carousel-inner");
function llenadoClientes(){
    for(j=0;j<clientes.length;j++){
        let moldeIndice;
        let cajaImagen = document.createElement("div");
        switch (j) {
            case 0:
                moldeIndice = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${j}" aria-current="true" aria-label="Slide ${j+1}" class="active"></button>`;
                cajaImagen.className = "carousel-item active";
                break;
        
            default:
                cajaImagen.className = "carousel-item";
                moldeIndice = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${j}" aria-current="true" aria-label="Slide ${j+1}"></button>`;
                break;
        };

        const moldeImagen = `<img src=${clientes[j]} alt="Cliente${j+1}" class="d-block w-30 mx-auto">`;
        indiceCliente.insertAdjacentHTML("beforeend", moldeIndice);

        cajaImagen.innerHTML = moldeImagen;
        imagenCliente.appendChild(cajaImagen);
    };
};

llenadoClientes();

