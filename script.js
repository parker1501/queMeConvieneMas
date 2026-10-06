/*
30 DIAS
$1000
$.50
*/

let resultado = 0;
let resultado1 = 0;
function queMeConviene(caso1, caso2, dias) {
    for (let i = 0; i < 30; i++) {
        resultado = resultado + 1000
        console.log(resultado);

        if (resultado1 === 0){
            resultado1 = resultado1 + .5;
        } else {
            resultado1 = resultado1 * 2;
        } 
        console.log(resultado1);
    }};

    queMeConviene();
