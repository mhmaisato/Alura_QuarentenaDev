function Executarsorteio() {
  aposta = prompt("Digite um número entre 0 e 10.");
  
  while(aposta < 0 || aposta > 10) {
    alert("Você deve digitar um número entre 0 e 10.");
    aposta = prompt("Digite um número entre 0 e 10.");
  }

  resultado = Math.round(Math.random()*(Math.random() * 10)); //gera número aleatório entre 0 e 10
  console.log(resultado);

  if (aposta == resultado) {
    paragrafoResultado.innerHTML = "Você ganhou o sorteio";
    paragrafoResultado.style.backgroundColor = "yellow";
  } else {
    paragrafoResultado.innerHTML = "Não foi dessa vez, tente novamente.";
    paragrafoResultado.style.backgroundColor = "orange";
  }
}