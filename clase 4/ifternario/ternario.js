let pagoMes = 12000;

let consumoKWH = 450;

let montoDelPago = pagoMes + (pagoMes*0.2);


let mensaje = consumoKWH > 350 ? 'Debido a que su hogar tuvo un consumo de' + ' ' + consumoKWH + ',' + ' ' + 
'en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de' +
' ' + montoDelPago : 'Debido que que su hogar tuvo un consumo de' + ' ' + consumoKWH + ' ' + 'e mantiene el subsidio, su tarifa no tiene ningún aumento'; 

console.log(montoDelPago);

console.log(mensaje);