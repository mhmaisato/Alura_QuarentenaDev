//calculo valor da corrida, transporte por aplicativo 
//regra de negócio
//2 + km*1,4 + min*0,26
distancia_km=prompt('Digite a distância da corrida (km): ')
tempo_min=prompt('Digite o tempo da corrida (min): ')
valor_corrida = 2+distancia_km*1.4+tempo_min*0.26
document.write('<br>Sua corrida deu: R$' +valor_corrida.toFixed(2))
document.write('<br>')
document.write('<br>Boa Viagem!!!')