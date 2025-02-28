function indiceMassaCorporal(peso, altura) {
    return peso / (altura * altura);
}

function fatorial(numero) {
    if (numero == 0) {
        return 1;
    } else {
        return numero * fatorial(numero - 1);
    }
}

function converterDolarParaReal( cotação , dolar) {
    return cotação * dolar;
}

function caularAreaePerimetroRetangulo(largura, altura) {
    return largura * altura;
    let perimetro = 2 * (largura + altura);
    console.log(perimetro);
}

function calcularAreaCirculo(raio) {
    return 3.14 * raio * raio;
}

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}