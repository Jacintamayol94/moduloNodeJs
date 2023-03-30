

function calcularMontoAlquiler (tipo,dia,sillabebe){
    let total;
    switch(tipo){
        case "compacto":
            total = 14000 * dia;
        break;
        case "camioneta":
            total = 28000 * dia;
        break;
        case "mediano":
           total = 17000 * dia;
        break;
        default:
            console.log("Ingrese un tipo válido");
        return;
    }
    if(sillabebe){
     total = total + (1200 * dia);
    }
    console.log("Estimado cliente: en base al tipo de vehiculo alquilado " + tipo + " considerando los "+ dia + " utilizados, el monto total a pagar es de $" + total);
};

calcularMontoAlquiler("camioneta",3,true);




