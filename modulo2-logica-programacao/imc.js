console.log("=== CÁLCULO DO IMC ===");

function calcularImc() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = (peso / (altura * altura)).toFixed(1);

  let faixa = "Informe peso e altura";

  if (imc < 18.5) {
    faixa = "Abaixo do peso";
  } else if (imc <= 24.9) {
    faixa = "Peso ideal (Parabéns!)";
  } else if (imc <= 29.9) {
    faixa = "Levemente acima do peso";
  } else if (imc <= 34.9) {
    faixa = "Obesidade grau I";
  } else if (imc <= 39.9) {
    faixa = "Obesidade grau II (severa) ";
  } else if (imc > 40) {
    faixa = "Obesidade grau III (mórbida)";
  }

  document.getElementById("imc").value = imc;
  document.getElementById("result").innerText = faixa;

  //   if (!isNaN(imc)) {
  //     document.querySelector(
  //       "#classificacao"
  //     ).innerText = `Seu IMC é de ${imc} e sua classificação é ${faixa}`;
  //   } else {
  //     document.querySelector("#classificacao").innerText = faixa;
  //   }
}
