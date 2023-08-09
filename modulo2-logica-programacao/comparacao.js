console.log("=== COMPARAÇÃO ===");

const comparar = () => {
  const x = Number(document.getElementById("x").value || 0);
  const y = Number(document.getElementById("y").value || 0);

  const relacao = document.getElementById("relacao").value;

  let result;
  switch (relacao) {
    case "maior":
      result = x > y;
      break;
    case "menor":
      result = x < y;

      break;
    case "maiorIgual":
      result = x >= y;

      break;
    case "menorIgual":
      result = x <= y;

      break;
    case "igual":
      result = x == y;

      break;
    case "diferente":
      result = x != y;

      break;
  }

  document.getElementById("result").value = result;
};
