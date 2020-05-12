//Utilizando a instrução if você consegue dizer para o usuário qual é o mês baseado no número de 1 a 12 que ele escolher.
numero=prompt("digite um número de 1 a 12.")
if(numero == "1") {
	mes = "Janeiro"
}
else if(numero == "2") {
	mes = "Fevereiro"
}
else if(numero == "3") {
	mes = "Março"
}
else if(numero == "4") {
	mes = "Abril"
}
else if(numero == "5") {
	mes = "Maio"
}
else if(numero == "6") {
	mes = "Junho"
}
else if(numero == "7") {
	mes = "Julho"
}
else if(numero == "8") {
	mes = "Agosto"
}
else if(numero == "9") {
	mes = "Setembro"
}
else if(numero == "10") {
	mes = "Outubro"
}
else if(numero == "11") {
	mes = "Novembro"
}
else if(numero == "12") {
	mes = "Dezembro"
}

tagh1.innerHTML= `"O nº ${numero} equivale ao mês de: ${mes}"`