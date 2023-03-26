class Producto {
    constructor(imagen, titulo, parrafo1, parrafo2) {
        this.imagen = imagen;
        this.titulo = titulo;
        this.parrafo1 = parrafo1;
        this.parrafo2 = parrafo2;
    }
}

const listaProductos = [
    new Producto("./IMAGENES/Productos/Producto1.png", "Titulo1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit eget quam vehicula dignissim.", "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."),
    new Producto("./IMAGENES/Productos/Producto2.png", "Titulo2", "Vestibulum eros leo, mattis eget vehicula sed, euismod vehicula elit. Donec id tempus arcu.", "Suspendisse dignissim dui mauris, vitae congue turpis molestie quis. Etiam id arcu non erat hendrerit accumsan."),
    new Producto("./IMAGENES/Productos/Producto3.png", "Titulo3", "Fusce sit amet neque ac libero venenatis consequat ut quis neque. Vestibulum pretium at mauris semper commodo.", "Uisque ultricies neque ante, et eleifend nisi imperdiet vitae."),
]


let productos = document.getElementById("llenado-productos");

function llenado(){
    for (let i=0;i<listaProductos.length;i++){
        let molde;
        switch (i%2) {
            default:
                molde = `<div class="imagenes-producto">
                                <img src=${listaProductos[i].imagen} class="imagen-producto">
                            </div>
                            <div class="texto-producto">
                                <h3 class="titulo-producto">${listaProductos[i].titulo}</h3>
                                <p class="m-4">${listaProductos[i].parrafo1}</p>
                                <p class="m-4">${listaProductos[i].parrafo2}</p>
                                <a class="link-producto" href="#">+INFO</a>
                            </div>`;
                if(!window.matchMedia("(max-width: 600px) and (min-width: 300px)").matches){
                    break;
                }
                
                
            case 0:
                molde = `<div class="texto-producto">
                                <h3 class="titulo-producto">${listaProductos[i].titulo}</h3>
                                <p class="m-4">${listaProductos[i].parrafo1}</p>
                                <p class="m-4">${listaProductos[i].parrafo2}</p>
                                <a class="link-producto" href="#">+INFO</a>
                            </div>
                            <div class="imagenes-producto">
                                <img src=${listaProductos[i].imagen} class="imagen-producto">
                            </div>`;
                break;
        

        }


        let caja = document.createElement ("div");
        caja.className = "caja-productos"
        caja.innerHTML = molde;
        productos.appendChild(caja);
    };
};

llenado();
