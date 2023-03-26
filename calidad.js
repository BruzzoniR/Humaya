class Calidad {
    constructor(imagen,parrafo){
        this.imagen = imagen;
        this.parrafo = parrafo;
    }
};

const diferenciales = [
    new Calidad("./IMAGENES/calidad/ecologia.png", "100% ORGÁNICO"),
    new Calidad("./IMAGENES/calidad/celiaco.png", "SIN TACC"),
    new Calidad("./IMAGENES/calidad/biologico.png", "SIN CONSERVANTES")
];

const containerCalidad = document.querySelector(".container-calidad");
function llenadoCalidad(){
    
    for(i=0;i<diferenciales.length;i++){
        const molde =
        `<img class="imagen-calidad my-4" src=${diferenciales[i].imagen}>
        <p class="texto-calidad">${diferenciales[i].parrafo}</p>`;   
        let caja = document.createElement("div");
        caja.innerHTML = molde;
        containerCalidad.appendChild(caja);
    }
};

llenadoCalidad();