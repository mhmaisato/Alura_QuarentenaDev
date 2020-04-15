document.write("<br>Consumo carro Amanda.<br>")
km_por_litro=prompt("Digite quantos km/l seu carro faz:")
tempo_viagem=prompt("Digite tempo de viagem em horas:")
velocidade_carro=prompt("Digite a velocidade")
km_rodados=velocidade_carro*tempo_viagem
litros_combustivel=km_rodados/km_por_litro
document.write("<br>A viagem da Amanda de " +tempo_viagem+ " horas, consumiu " +litros_combustivel+ " litros de combustível.<br>")
