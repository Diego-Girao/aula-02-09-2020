const { totalmem } = require("os")

function somar(numero1,numero2){
    let total = numero1 + numero2;
    return total;


}

module.exports = {
    somar
}