alert('Bem vindo Ao jogo do numero secreto'); 
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativas = 0;

while (true) {
  let chute = parseInt(prompt(`Digite um número de 0 a ${numeroMaximo}`));
  tentativas++;
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
    break;
  } else if (chute > numeroSecreto) {
    alert("O número secreto é menor");
  } else {
    alert("O número secreto é maior");
  }
}
//let palavraTentativa = tentativas > 1 ? 'tntativas' : 'tentativa';
//alert(`Vc acertou em ${tentativas} ${palavraTentativa} o numero secreto era ${numeroSecreto}`);
//if (tentativas > 1) {
//    alert(`Vc acertou em ${tentativas} tentativas o numero secreto era ${numeroSecreto}`);
//} else {
//    alert(`Vc acertou em ${tentativas} tentativa o numero secreto era ${numeroSecreto}`);
//}