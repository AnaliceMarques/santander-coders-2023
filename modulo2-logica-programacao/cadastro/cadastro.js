function cadastrar() {
  let produtoCadastro = {
    codigo: document.getElementById("codigo").value,
    produto: document.getElementById("produto").value,
    quantidade: document.getElementById("quantidade").value,
    preco: document.getElementById("preco").value,
  };

  document.getElementById("tableBody").innerHTML += `
    <tr>
    <td>${produtoCadastro.codigo}</td>
    <td>${produtoCadastro.produto}</td>
    <td>${produtoCadastro.quantidade}</td>
    <td>${produtoCadastro.preco}</td>
    <td>${produtoCadastro.quantidade * produtoCadastro.preco}</td>
    </tr>`;
}
