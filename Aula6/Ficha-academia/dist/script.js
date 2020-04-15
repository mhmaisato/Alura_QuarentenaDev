nome=prompt("Nome completo:")
tagh1.innerHTML= "Nome: " +nome
nascimento=prompt("Qual a sua data de nascimento:")
tem_condicao=confirm("Tem algum problema de saúde")

if(tem_condicao){estado_saude= "Sim"}
if(tem_condicao==false){estado_saude= "Não"}

lista.innerHTML = 
  `<li> Data Nascimento: ${nascimento} </li>
  <li> Idade: </li>
  <li> Tem condição pré-existente: ${estado_saude}</li>
  <li> Precisa de acompanhamento médico.</li>`