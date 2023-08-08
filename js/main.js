/******************************  Ejecicio A  ******************************/
console.log('Ejecucio A:');
var arrayGatos=['😺','😸','😹'];
var cantidadDeGatos = 10;
indice=0;

for(i=1; i<=cantidadDeGatos; i++){
    indice++;
    console.log('Gato #' + i+':' + arrayGatos[indice-1])
    if (indice >= 3){
        indice = 0;
    }
}
/******************************  Ejecicio B  ******************************/
console.log('Ejecucio B:');
var cantidadDeGatos = 5;
var cantidadDePasos = 3;
var gato ='🐈';
var patitas ='🐾';
var lineaGatuna= '';

for(i=1; i<=cantidadDeGatos; i++){
    lineaGatuna = 'Gato #' + i +': '+ gato + ' ';
    for(j=0; j<cantidadDePasos; j++){
        lineaGatuna += patitas;
    }
    console.log(lineaGatuna);
}
/******************************  Ejecicio C  ******************************/
console.log('Ejecucio C:');
var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var gato ='🐈';
var patitas ='🐾';
var caja = '⬛';
var lineaGatuna= '';

for(i=1; i<=cantidadDeGatos; i++){
    if ((i % 2) == 0){
        lineaGatuna = 'Gato #' + i +': '+ gato + ' ';
    }else{
        lineaGatuna = 'Gato #' + i +': '+ gato + caja + ' ';
    }
    for(j=0; j<cantidadDePasos; j++){
        lineaGatuna += patitas;
    }
    console.log(lineaGatuna);
}