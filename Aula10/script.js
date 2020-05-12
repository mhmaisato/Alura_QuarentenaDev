function gerar() {
  n=0;
  while(n < 1000000){
    n=n+1;
    htmlCertificado=emitirCertificado(inputNome.value);
  }
  
  listaProjetos=[
    "Cálculo Batimento Cardiaco",
    "Cálculo de gasto da gasolina",
    "POKEBALL",
    "Cálculo IMC 2.0",
    "Loteria-App",
    "Olimpiadas",
    "Calculo-Aplicativo-Transporte 2.0",
    "Ficha-Academia 2.0",
    "Certificado",
  ];
  
  listaLinks=[
    "https://codepen.io/mhmaisato/pen/XWbwqdo",
    "https://codepen.io/mhmaisato/pen/qBdwBdL",
    "https://codepen.io/mhmaisato/pen/LYVojxE",
    "https://codepen.io/mhmaisato/pen/PoqMmBe",
    "https://codepen.io/mhmaisato/pen/JjYPYyy",
    "https://codepen.io/mhmaisato/pen/oNjvRXK",
    "https://codepen.io/mhmaisato/pen/PoPomVK",
    "https://codepen.io/mhmaisato/pen/yLYLzBP",
    "https://codepen.io/mhmaisato/pen/RwWPRRG",
  ];
  
  contaProjetos=8;
  ordenaProjetosComLinks="";//lista vazia dos projetos
  while(contaProjetos>=0){
    projetos=listaProjetos[contaProjetos];
    links=listaLinks[contaProjetos];
    ordenaProjetosComLinks=`<a href="${links}"><li>${projetos}</li></a>`+ordenaProjetosComLinks;
    contaProjetos=contaProjetos-1;
  }
  
  document.body.innerHTML=
    `${htmlCertificado}
    <ol>
    ${ordenaProjetosComLinks}   
    </ol>`;
  print();
}