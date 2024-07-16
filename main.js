let items = [
    {
        nome: "R2-D2",
        valor: 60,
        imagem: "https://s2-techtudo.glbimg.com/1eIWXdEws4QK9LkMVm2F58dxPDY=/0x0:620x620/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/N/P/UjBEpWQFyHVjqwlmwvQw/2011-12-14-robo.jpg",
    },
    {
        nome: "Caneca Gamer",
        valor: 25,
        imagem: "https://cdn.dooca.store/292/products/smdg05pzpawr7o4w6u3xijqzexln9epoczxr_640x640+fill_ffffff.jpg?v=1658173106&webp=0"
    },
    {
        nome: "Capitão América",
        valor: 138,
        imagem: "https://cdn.ideiasdepresente.com/products/136.jpg"
    },
    {
        nome: "MousePad Joaninha",
        valor: 15,
        imagem: "https://m.media-amazon.com/images/I/51XQkIHFRwL._AC_SX679_.jpg"
    },
    {
        nome: "Kit Cinema",
        valor: 89,
        imagem: "https://ideiaspresentes.com/wp-content/uploads/2017/08/23-12-300x266.jpg"
    },
    {
        nome: "Porta Chaves Batman",
        valor: 32,
        imagem: "https://geekvip.com.br/wp-content/uploads/2021/07/Porta-Chaves-Batcaverna-Presente-Criativo-Geek-2-600x600.jpeg"
    }
]

const listar = () => {
    const list = document.getElementById('items');
    list.innerHTML = '';
    console.log(items);
    for (let i = 0; i < items.length; i++){
        
        console.log(i);
        list.innerHTML = list.innerHTML + 
            `<div class="col col-lg-3 col-md-3 col-xs-12 card bg-color">
                <img src="${items[i].imagem}" class="card-img-top card-img" alt="...">
                <div class="card-body">
                    
                    <p class="card-text">${items[i].nome}</p>
                    <div class="row">
                    <div class="col">
                        <h5 class="card-title">$ ${items[i].valor}</h5>      
                    </div>
                    <div class="col-1">
                        <a onclick="excluir('${items[i].nome}')"><i class="bi bi-trash"></i></a>
                    </div>
                    </div>
                </div>
            </div>`;
    };
}

const adicionar = () => {
    let nome = document.getElementById('inputNome').value;
    let valor = document.getElementById('inputValor').value;
    let imagem = document.getElementById('inputImagem').value;

    let obj = {
        nome,
        valor,
        imagem
    }

    items.push(obj);
    listar();
    limpar();
}

const limpar = () => {
    document.getElementById('inputNome').value = '';
    document.getElementById('inputValor').value = '';
    document.getElementById('inputImagem').value = '';    
}

const excluir = (nome) => {
    const index = items.findIndex((element) => element.nome === nome);
    if (index > -1) {
        items.splice(index, 1);
        listar();
    }
}