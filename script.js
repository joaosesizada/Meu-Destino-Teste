/*Funcao para redirecionar tela*/
function redirectPage(url) {
    window.location.href = url;
}
/*FUNCAO PARA PESQUISA*/

/*Pesquisa Destino*/
//funcao para deixar elemento visivel quando input for clicado
document.getElementById('pesquisa').addEventListener('click', function() {
    document.getElementById('res_pesquisa').style.display = 'block';
})
//funcao para deixar invisivel
document.getElementById('pesquisa').addEventListener('blur', function() {
    document.getElementById('res_pesquisa').style.display = 'none'
})

document.getElementById('pesquisa').addEventListener('input', function(){
    const pesquisado = this.value
    pesquisar_destino(pesquisado)
})
/*Fim Pesquisa Destino*/
/*Pesquisa Body*/
document.getElementById('pesquisa_body').addEventListener('click', function() {
    document.getElementById('res_pesquisa_body').style.display = 'block';
    
})
//funcao para deixar invisivel
document.getElementById('pesquisa_body').addEventListener('blur', function() {
    document.getElementById('res_pesquisa_body').style.display = 'none'
})

document.getElementById('pesquisa_body').addEventListener('input', function(){
    const origem = this.value
    pesquisar_origem(origem)
})
/*FIM Pesquisa Body*/
/*Todas as localizações*/
const paises = {
    Brasil: {
        imagemPadrao: 'img/paris.jpg',
        cidades: {
            RioDeJaneiro: {
                nome: 'Rio de Janeiro',
                imagem: 'img/oslo.jpg'
            },
            SaoPaulo: {
                nome: 'São Paulo',
                imagem: 'img/cancun.jpg'
            }
        }
    },
    Tailandia: {
        imagemPadrao: 'img/bangkok.jpg',
        cidades: {
            Bangkok: {
                nome: 'Bangkok',
                imagem: 'img/dubai.jpg'
            }
        }
    }
};

/*Pesquisador*/

function pesquisar_origem(origem) {
    const res_origem = document.getElementById('res_pesquisa_body')
    res_origem.innerHTML = ''
    const origem_pesquisado = origem.toLowerCase()

    for (const [pais, dadosPais] of Object.entries(paises)) {
        if(pais.toLocaleLowerCase().includes(origem_pesquisado)) {
            const origem_element = document.createElement('div')
            origem_element.classList.add("result-item");
            
            const imagem = document.createElement("img");
            imagem.src = dadosPais.imagemPadrao 

            const texto = document.createElement('strong');
            texto.textContent = pais

            origem_element.appendChild(imagem)
            origem_element.appendChild(texto)
            res_origem.appendChild(origem_element)
        }
        
        for (const [cidade, dadosCidade] of Object.entries(dadosPais.cidades)) {
            if (dadosCidade.nome.toLowerCase().includes(origem_pesquisado)) {
                const cidadeElement = document.createElement('div');
                cidadeElement.classList.add('result-item');

                const imagem = document.createElement('img');
                imagem.src = dadosCidade.imagem;

                const texto = document.createElement('strong');
                texto.textContent = `${dadosCidade.nome}, ${pais}`;

                cidadeElement.appendChild(imagem);
                cidadeElement.appendChild(texto);
                res_origem.appendChild(cidadeElement);
            }
        }
    }

}

/*Pesquisando destino*/
function pesquisar_destino(pesquisado) {
    const res_pesquisa = document.getElementById('res_pesquisa');
    res_pesquisa.innerHTML = '';
    const termoPesquisado = pesquisado.toLowerCase();

    for (const [pais, dadosPais] of Object.entries(paises)) {
        if (pais.toLowerCase().includes(termoPesquisado)) {
            const paisElement = document.createElement('div');
            paisElement.classList.add('result-item');

            const imagem = document.createElement('img');
            imagem.src = dadosPais.imagemPadrao 

            const texto = document.createElement('strong');
            texto.textContent = pais;

            paisElement.appendChild(imagem);
            paisElement.appendChild(texto);
            res_pesquisa.appendChild(paisElement);
        }

        for (const [cidade, dadosCidade] of Object.entries(dadosPais.cidades)) {
            if (dadosCidade.nome.toLowerCase().includes(termoPesquisado)) {
                const cidadeElement = document.createElement('div');
                cidadeElement.classList.add('result-item');

                const imagem = document.createElement('img');
                imagem.src = dadosCidade.imagem;

                const texto = document.createElement('strong');
                texto.textContent = `${dadosCidade.nome}, ${pais}`;

                cidadeElement.appendChild(imagem);
                cidadeElement.appendChild(texto);
                res_pesquisa.appendChild(cidadeElement);
            }
        }
    }
}
/*Fim pesqusiano destino*/
/*FIM FUNCAO PARA PESQUISA*/

/*Função Animação*/
async function animationJS_lading() {
    const lading = document.querySelector(".lading")
    const info_cdd = document.getElementById('lading_info_cdd')
    const info_pais = document.getElementById('lading_info_pais')

    const imagens = [
        'url("img/bangkok.jpg")',
        'url("img/cancun.jpg")',
        'url("img/dubai.jpg")',
        'url("img/oslo.jpg")',
        'url("img/paris.jpg")'
    ]
    const lading_info_cdd = [
        'Bangkok',
        'Cancun',
        'Dubai',
        'Oslo',
        'Paris'
    ]
    const lading_info_pais = [
        'Tailândia',
        'Mexico',
        'Emirados Árabes Unidos',
        'Noruega',
        'França'
    ]

    let seletor = 0

    const btn_lading = document.querySelectorAll('.btn_lading') 
        btn_lading.forEach((bt, vl) =>{
            bt.addEventListener('click', function(){
                seletor = vl

            mudar_background()

            clearInterval(lnterval_landing)

            lnterval_landing = setInterval(mudar_background, 10000)
            })
        })
    function mudar_background() {
        lading.style.backgroundImage = imagens[seletor]
        
        info_cdd.innerHTML = lading_info_cdd[seletor]
        
        info_pais.innerHTML = lading_info_pais[seletor]
        
        seletor = (seletor + 1 ) % imagens.length
    }

    mudar_background()

    lnterval_landing = setInterval(mudar_background, 10000)
}
document.addEventListener('DOMContentLoaded', function() {
    animationJS_lading()
})
/*Fim Animação*/



/*Script para carossel*/

/* BANCO DE CARROSEL */
const dados_carrosel = {
    item1: {
        src: 'carrosel/nwy1.jpg',
        cidade: 'Ney York',
        pais: 'Estados Unidos'
    },
    item2: {
        src: 'carrosel/sdn1.jpg',
        cidade: 'Sydney',
        pais: 'Austrália'
    },
    item3: {
        src: 'carrosel/tok1.jpg',
        cidade: 'Tokyo',
        pais: 'Japão'
    },
    item4: {
        src: 'carrosel/ldn1.jpg',
        cidade: 'Londres',
        pais: 'Reino Unido'
    },
    item5: {
        src: 'carrosel/cai1.jpg',
        cidade: 'Cairo',
        pais: 'Egito'
    },
    item6: {
        src: 'carrosel/chl1.jpg',
        cidade: 'Santiago',
        pais: 'Chile'
    },
    item7: {
        src: 'carrosel/mai1.jpg',
        cidade: 'Miami',
        pais: 'Estados Unidos'
    },
    item8: {
        src: 'carrosel/rma1.jpg',
        cidade: 'Roma',
        pais: 'Itália'
    }
};

const carrosel_item = {
    caixa1: {
        imagem: document.getElementById('img_carrosel_mais1'),
        idcdd: document.getElementById('cdd_info_carrosel1_mais'),
        idpais: document.getElementById('pais_info_carrosel1_mais')
    },
    caixa2: {
        imagem: document.getElementById('img_carrosel_mais2'),
        idcdd: document.getElementById('cdd_info_carrosel2_mais'),
        idpais: document.getElementById('pais_info_carrosel2_mais')
    },
    caixa3: {
        imagem: document.getElementById('img_carrosel_mais3'),
        idcdd: document.getElementById('cdd_info_carrosel3_mais'),
        idpais: document.getElementById('pais_info_carrosel3_mais')
    },
    caixa4: {
        imagem: document.getElementById('img_carrosel_mais4'),
        idcdd: document.getElementById('cdd_info_carrosel4_mais'),
        idpais: document.getElementById('pais_info_carrosel4_mais')
    }
};



/* FUNÇÃO PARA CONTROLAR O CARROSSEL */
let indice = 0;

function atualizarCarrossel(indice) {
    const chaves = ['caixa1', 'caixa2', 'caixa3', 'caixa4'];
    const dados = Object.values(dados_carrosel);

    for (let i = 0; i < chaves.length; i++) {
        let chave = chaves[i];
        let { src, cidade, pais } = dados[(indice + i) % dados.length]; // Use módulo para circular

        carrosel_item[chave].imagem.src = src;
        carrosel_item[chave].idcdd.textContent = cidade;
        carrosel_item[chave].idpais.textContent = pais;
    }
}

function btn_carrosel_mais(valor) {
    indice += valor;

    atualizarCarrossel(indice);

    const ant = document.getElementById('btn_carrosel_mais_ant');
    const pro = document.getElementById('btn_carrosel_mais_pro');

    if (indice == 0) {
        ant.style.display = 'none'
        pro.style.display = 'block'
    }   else if (indice == 4) {
        ant.style.display = 'block'
        pro.style.display = 'none'
    } else {
        ant.style.display = 'block'
        pro.style.display = 'block' 
    }
}

/*script para FILTROS*/
const mostrar_opcoes = document.getElementById('mostrar_opcoes')
const checkbox = document.querySelector('.checkbox')
const enviar = document.getElementById("selecionar")
mostrar_opcoes.addEventListener('focus', function(){
    checkbox.style.display = 'block'
})
enviar.addEventListener('click', function(){
    checkbox.style.display = 'none'
})

/*FIM script para FILTROS*/

/*SCIRPT MENU*/
document.addEventListener('scroll', function() {
    let posicaoVertical = window.scrollY;
    let tela = window.innerHeight
    const menu = document.getElementById("menu")        
    const base_margin = document.getElementById("base")
    const estilo = window.getComputedStyle(base_margin)


    if (posicaoVertical >= tela - 80) {
        menu.classList.add('menu-tela-full')
        menu.classList.remove("pai-menu")
        base_margin.style.marginLeft = '100px'
    } else {
        menu.classList.add("pai-menu")
        menu.classList.remove('menu-tela-full')
        base_margin.style.marginLeft = '0px'
    }
})
/*FIM SCIRPT MENU*/
/*Função desxcer tela*/
function scrollToSection() {
    window.scrollBy({
        top: window.innerHeight - (window.innerHeight * 10 /100) ,// Rola a tela para baixo o valor da altura da janela
        behavior: 'smooth' // Faz a rolagem ser suave
    });
}

// Adicionando evento ao botão
document.getElementById('scrollDownButton').addEventListener('click', scrollToSection);
/*FIM Função desxcer tela*/

/*Script para hearder*/
document.addEventListener('DOMContentLoaded', function() {
    const pesquisaHeader = window.innerHeight;
    const pesquisaCima = document.querySelector('.navegacao-hd');

    document.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop >= pesquisaHeader) {
            pesquisaCima.style.display = 'block';
        } else {
            pesquisaCima.style.display = 'none';
        }
    });
});

/*FIM Script para hearder*/