//calculo das quantidades de olimpiadas ocorridas
ano_inicial = 1896;
ano_final = prompt("Digite o ano atual");
qtd=Math.trunc((ano_final-ano_inicial)/4)+1;
if(ano_final == 1916){
	qtd=qtd-1;
}
else if(ano_final == 1940){
	qtd=qtd-2;
}
else if(ano_final >= 1944){
	qtd=qtd-3;
}

tagh1.innerHTML=
	`De ${ano_inicial} até ${ano_final} tivemos ${qtd} jogos olímpicos de verão.
	`