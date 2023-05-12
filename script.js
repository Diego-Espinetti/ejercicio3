"use strict"

/* Una empresa llamada Noblex se presenta en la consultoría y plantea
confeccionar una página para su sitio web de la empresa, solicita que
haya un botón que diga ver televisores y permita mostrar al menos 9
televisores de 50 pulgadas y que muestre:
a. Código del producto.
b. Cantidad de televisores en stock.
c. Foto del producto.
d. Precio del producto.
e. Descripción del producto.
f. Botón de añadir al carrito.
Se pide también un botón que diga ordenar y que muestre los
televisores del menor precio al mayor precio. */

var televisores = []


televisores[0] = "Televisor-Samsung";
televisores["Televisor-Samsung"] = {"Codigo": 1,
                                    "Stock":18,
                                    "Img":"img//",
                                    "Precio":1400,
                                    "Descripcion": "tv 50 pulgadas",
                                    };

televisores[1] = "Televisor-TopHouse";
televisores["Televisor-TopHouse"] = {"Codigo": 2,
                                    "Stock":18,
                                    "Img":"img//",
                                    "Precio":1000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[2] = "Televisor-Sony";
televisores["Televisor-Sony"] = {"Codigo": 3,
                                    "Stock":68,
                                    "Img":"img//",
                                    "Precio":3000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[3] = "Televisor-TLC";
televisores["Televisor-TLC"] = {"Codigo": 4,
                                    "Stock":48,
                                    "Img":"img//",
                                    "Precio":3200,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[4] = "Televisor-Asus";
televisores["Televisor-Asus"] = {"Codigo": 5,
                                    "Stock":85,
                                    "Img":"img//",
                                    "Precio":3000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[5] = "Televisor-Hitachi";
televisores["Televisor-Hitachi"] = {"Codigo": 6,
                                    "Stock":28,
                                    "Img":"img//",
                                    "Precio":3000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[6] = "Televisor-Motorola";
televisores["Televisor-Motorola"] = {"Codigo": 7,
                                    "Stock":128,
                                    "Img":"img//",
                                    "Precio":75000,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[7] = "Televisor-LG";
televisores["Televisor-LG"] = {"Codigo": 8,
                                    "Stock":348,
                                    "Img":"img//",
                                    "Precio":3140,
                                    "Descripcion": "tv 50 pulgadas",
};
televisores[8] = "Televisor-Noblex";
televisores["Televisor-Noblex"] = {"Codigo": 9,
                                    "Stock":258,
                                    "Img":"img//",
                                    "Precio":1110,
                                    "Descripcion": "tv 50 pulgadas",
};


console.log(televisores[1])
console.log(televisores["Televisor-TopHouse"].Precio)
console.log(televisores["Televisor-Sony"].Precio)

var i;

console.log(televisores.length)

function VerTelevisores(){


    for(i = 0; i<=9;i++){
    
    let nombreTv = televisores[i];
    console.log(nombreTv)
    document.write(`
        <div>
            <h2>${televisores[i]}</h2>
            <p>${televisores[nombreTv].Codigo}</p>
            <p>${televisores[nombreTv].Stock}</p>
            <p>${televisores[nombreTv].Precio}</p>
            <p>${televisores[nombreTv].Descripcion}</p>
   
        `)


}

document.write(` </div>
<div>
<button> Ordenar</button></div>`)
}