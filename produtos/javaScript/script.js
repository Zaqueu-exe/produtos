var produtos = [
    {
        id: 111,
        nome: "Miojo",
        preco: 1.55
    },
    {
        id: 112,
        nome: "Banana",
        preco: 2.00
    },
    {
        id: 113,
        nome: "Laranja",
        preco: 5.00
    },
    {
        id: 114,
        nome: "Geladeira",
        preco: 2541.53
    },
    {
        id: 115,
        nome: "Tesoura",
        preco: 5.0
    }, {
        id: 116,
        nome: "Smartphone",
        preco: 899.0
    }, {
        id: 117,
        nome: "Fogão",
        preco: 499.0
    }, {
        id: 118,
        nome: "Sandalia",
        preco: 15.0
    },{
        id: 119,
        nome: "Computador",
        preco: 1500.0
    },{
        id: 120,
        nome: "Geforce 3090",
        preco: 19.000
    },{
        id: 121,
        nome: "Livro",
        preco: 45.74
    },{
        id: 122,
        nome: "Agulha",
        preco: 0.99
    },{
        id: 123,
        nome: "SSD 128gb",
        preco: 355.0
    }
]

function visualizarProdutos() {
    var aux1 = document.getElementById('res')
    HTMLTemporario = 'Lista: '
    for (var i = 0; i < produtos.length; i++) {
        HTMLNovo = `<p> ID: ${produtos[i].id} | Nome: ${produtos[i].nome} | Preço R$: ${produtos[i].preco.toFixed(2)}</p>`;
        HTMLTemporario = HTMLTemporario + HTMLNovo;
    }
    aux1.innerHTML = HTMLTemporario
}
function decrescente() {
    for (var i = 0; i < produtos.length; i++) {
        for (var h = 0; h < produtos.length; h++) {
            if (parseFloat(produtos[i].preco) > parseFloat(produtos[h].preco)) {
                var aux = produtos[i]
                produtos[i] = produtos[h]
                produtos[h] = aux
            }
        }
    }
    visualizarProdutos()
}

function crescente() {
    for (var i = 0; i < produtos.length; i++) {
        for (var h = 0; h < produtos.length; h++) {
            if (parseFloat(produtos[i].preco) < parseFloat(produtos[h].preco)) {
                var aux = produtos[i]
                produtos[i] = produtos[h]
                produtos[h] = aux
            }
        }
    }
    visualizarProdutos()
}
function pesquisarPorNome() {
    var nomeProduto = document.getElementById("txt1").value;
    var aux = document.getElementById('res')
    var contador = 0
    HTMLTemporario = 'Lista:'
    for (var i = 0; i < produtos.length; i++) {
        if(nomeProduto === produtos[i].nome){
            HTMLT = `<p> ID: ${produtos[i].id} | Nome: ${produtos[i].nome} | Preço R$: ${produtos[i].preco.toFixed(2)}</p>`;
            HTMLTemporario = HTMLTemporario + HTMLT
            contador++
        }
    }if(contador === 0){
        HTMLTemporario = 'Nenhum elemento com esse nome encontrado, tente novamente! '
    }
    aux.innerHTML = HTMLTemporario
}

