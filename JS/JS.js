let total = 0;

function adicionarProduto() {
    // Pegar os valores dos inputs
    const produto = document.getElementById("produto").value;
    const valor = parseFloat(document.getElementById("valor").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    // Validar campos
    if (produto === "" || isNaN(valor) || isNaN(quantidade) || quantidade <= 0) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    // Calcular subtotal
    const subtotal = valor * quantidade;
    total += subtotal;

    // Criar nova linha na tabela
    const tabela = document.getElementById("carrinho").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    const celulaProduto = novaLinha.insertCell(0);
    const celulaValor = novaLinha.insertCell(1);
    const celulaQuantidade = novaLinha.insertCell(2);
    const celulaSubtotal = novaLinha.insertCell(3);

    celulaProduto.textContent = produto;
    celulaValor.textContent = `R$ ${valor.toFixed(2)}`;
    celulaQuantidade.textContent = quantidade;
    celulaSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;

    // Atualizar total
    document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;

    // Limpar os inputs
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}
document.getElementById("adicionar").addEventListener("click", adicionarProduto);