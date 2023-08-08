
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
