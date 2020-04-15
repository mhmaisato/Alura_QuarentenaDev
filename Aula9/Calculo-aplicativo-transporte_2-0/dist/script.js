function formatanumero(numero){
  return numero.toFixed(2).replace(".", ",")
}

function calcular() {
  distancia = inputDistancia.value;
  tempo = inputTempo.value;
  valorcorrida = 2 + distancia * 1.4 + tempo * 0.26;
  botaoCalcular.innerHTML =
    "Valor aproximado da corrida R$" +
    formatanumero(valorcorrida);
}