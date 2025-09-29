let carrinho = [];

function adicionarProduto() {
    let nome = document.getElementById("produto").value;
    let valor = parseFloat(document.getElementById("valor").value);
    let quantidade = parseInt(document.getElementById("quantidade").value);

    carrinho.push({nome, valor, quantidade});
    atualizarCarrinho();
}

function removerProduto(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let lista = document.getElementById("carrinho");
    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.valor * item.quantidade;
        let li = document.createElement("li");
        li.textContent = `${item.nome} - R$${item.valor} x ${item.quantidade}`;
        let btn = document.createElement("button");
        btn.textContent = "Remover";
        btn.onclick = () => removerProduto(index);
        li.appendChild(btn);
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2);
}
