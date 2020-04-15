//CÁLCULO DO IMC
//FÓRMULA PESO DIVIDIDO PELA ALTURA AO QUADRADO
peso = prompt("Digite o seu peso (kg):")
altura = prompt("Digite a sua altura (m):")
imc = (peso / (altura * altura)).toFixed(2)

if (imc<="17") {
	aviso = "IMC abaixo de 17 - Muito abaixo do peso."
}
else if ("17" <= imc && imc < "18.49") {
	aviso = "IMC Entre 17 e 18.49 - Abaixo do peso."
}
else if ("18.5" < imc && imc < "24.99") {
	aviso = "IMC Entre 18.5 e 24.99 - Peso normal."
}
else if ("25" < imc && imc < "29.99") {
	aviso = "IMC Entre 25 e 29.99 - Acima do peso."
}
else if ("30" < imc && imc < "34.99") {
	aviso = "IMC Entre 30 e 34.99 - Obesidade I."
}
else if ("35" < imc && imc < "39.99") {
	aviso = "IMC Entre 35 e 39.99 - Obesidade II (Severa)."
}
else if (imc > "40") {
	aviso = "IMC Acima de 40 - Obesidade III (Mórbida)."
}

tagh1.innerHTML=
`Cálculo do IMC.
<br>Com ${peso}kg e ${altura}m.</br>
<br>Seu IMC é: ${imc}.
<br>${aviso}`