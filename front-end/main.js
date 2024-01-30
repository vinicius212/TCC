// Dados de exemplo - Substitua com os seus próprios dados
const produtoExemplo = {
    nome: "Produto Exemplo",
    preco: 19.99,
};

// Carrinho de compras - Inicialmente vazio
let carrinho = [];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para atualizar dinamicamente o carrinho na página
function atualizarCarrinho() {
    const carrinhoElement = document.getElementById("carrinho");

    // Limpar conteúdo existente no carrinho
    carrinhoElement.innerHTML = "";

    // Atualizar carrinho com produtos
    carrinho.forEach((produto) => {
        const itemCarrinho = document.createElement("li");
        itemCarrinho.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        carrinhoElement.appendChild(itemCarrinho);
    });

    // Calcular e exibir o total
    const totalElement = document.getElementById("total");
    const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionar evento de clique ao botão "Adicionar ao Carrinho"
const botaoAdicionar = document.getElementById("btnAdicionar");
botaoAdicionar.addEventListener("click", function() {
    adicionarAoCarrinho(produtoExemplo);
});
