function Product(nome, preco, descricao, imagem, disponivel, avaliacao, caracteristicas, tags, porcentagemDesconto) {
    if (Array.isArray(caracteristicas)) {
        console.log("Caracteristicas é um array");
    }
    if (Array.isArray(tags)) {
        console.log("Tags é um array");
    }
    if (typeof nome == 'string') {
        console.log("Nome é uma string");
    }
    if (typeof preco == 'number') {
        console.log("Preco é um numero");
    }
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.imagem = imagem;
    this.disponivel = disponivel;
    this.avaliacao = avaliacao;
    this.caracteristicas = caracteristicas;
    this.tags = tags;
    this.porcentagemDesconto = porcentagemDesconto;

    this.imprimeTags = function () {
        this.tags.forEach(currentTag => {
            console.log(currentTag);
        });
    }

    this.imprimeCaracteristicas = function () {
        console.log(this.caracteristicas.join(", "));
    }
    this.getPrecoDesconto = function () {
        return this.preco * (this.porcentagemDesconto == 0 ? 1 : this.porcentagemDesconto / 100)
    }

    this.getPrecoFinal = function () {
        return this.preco - this.getPrecoDesconto()
    };

    this.imprimePrecoComDesconto = function () {
        return (`${this.porcentagemDesconto == 0 ? "" :"(" + this.porcentagemDesconto + "%" + " de desconto)"}`)
    };
}

let produto1 = new Product("Camiseta Branca", 20, "Camiseta branca", "https://www.tocha.com.br/image/cache/data/camiseta/camisa%20branca-800x800.jpg", true, 2, ["branca", "manga curta"], ["esporte", "moda"], 13);
let produto2 = new Product("Bermuda Azul", 30, "Bermuda azul", "bermuda.jpg", true, 5, ["azul", "manga longa"], ["esporte", "moda"], 19);
let produto3 = new Product("Short Preto", 10, "Short preto", "short.jpg", true, 3, ["preto", "manga curta"], ["esporte", "moda"], 26);
let produto4 = new Product("Blusa Rosa", 25, "Blusa rosa", "blusa.jpg", true, 3, ["rosa", "manga longa"], ["esporte", "moda"], 25);
let produto5 = new Product("Calca Preta", 30, "Calca preta", "calca.jpg", true, 5, ["preta", "manga longa"], ["esporte", "moda"], 45);

function createHtmlCard(produto) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const productName = document.createElement("h2");
    productName.textContent = produto.nome;
    card.appendChild(productName);

    const productImage = document.createElement("img");
    productImage.src = produto.imagem;
    card.appendChild(productImage);

    const productCharacteristics = document.createElement("p");
    productCharacteristics.textContent = "Características: " + produto.caracteristicas.join(", ");
    card.appendChild(productCharacteristics);

    const productDescription = document.createElement("p");
    productDescription.textContent = "Descrição: " + produto.descricao;
    card.appendChild(productDescription);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    const productPrice = document.createElement("p");
    productPrice.textContent = "Preço: R$ " + produto.getPrecoFinal().toFixed(2);
    priceContainer.appendChild(productPrice);

    const productDiscountPrice = document.createElement("h4");
    productDiscountPrice.textContent = produto.imprimePrecoComDesconto();
    priceContainer.appendChild(productDiscountPrice);

    card.appendChild(priceContainer);

    return card;
}

function generateCardList(cards) {
    const container = document.getElementById("product-container");
    cards.forEach(product => {
        const card = createHtmlCard(product);
        container.appendChild(card);
    });
}

let produtos = [produto1, produto2, produto3, produto4, produto5];
generateCardList(produtos);