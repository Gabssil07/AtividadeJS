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

    // Criar item da lista
    const li = document.createElement("li");
    li.textContent = `${produto} - R$ ${valor.toFixed(2)} x ${quantidade} = R$ ${subtotal.toFixed(2)}`;

    // Adicionar item no carrinho
    document.getElementById("carrinho").appendChild(li);

    // Atualizar total
    document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`;

    // Limpar os inputs
    document.getElementById("produto").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("quantidade").value = "";
}
