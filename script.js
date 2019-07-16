let infoEstado = [ //array com as informações dos estados
    {
        id: 1,
        sigla: 'AC',
        nome: 'Acre',
        capital: 'Rio Branco',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraAC.png'
    },
    {
        id: 2,
        sigla: 'AL',
        nome: 'Alagoas',
        capital: 'Maceió',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraAL.png'
    },{
        id: 3,
        sigla: 'AP',
        nome: 'Amapá',
        capital: 'Macapá',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraAP.png'
    },{
        id: 4,
        sigla: 'AM',
        nome: 'Amazonas',
        capital: 'Manaus',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraAM.png'
    },{
        id: 5,
        sigla: 'BA',
        nome: 'Bahia',
        capital: 'Salvador',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraBA.png'
    },{
        id: 6,
        sigla: 'CE',
        nome: 'Ceará',
        capital: 'Fortaleza',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraCE.png'
    },{
        id: 7,
        sigla: 'ES',
        nome: 'Espírito Santo',
        capital: 'Vitória',
        regiao: 'Sudeste',
        bandeira: './imagens/bandeiraES.png'
    },{
        id: 8,
        sigla: 'GO',
        nome: 'Goiás',
        capital: 'Goiânia',
        regiao: 'Centro-Oeste',
        bandeira: './imagens/bandeiraGO.png'
    },{
        id: 9,
        sigla: 'MA',
        nome: 'Maranhão',
        capital: 'São Luís',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraMA.png'
    },{
        id: 10,
        sigla: 'MT',
        nome: 'Mato Grosso',
        capital: 'Cuiabá',
        regiao: 'Centro-Oeste',
        bandeira: './imagens/bandeiraMT.png'
    },{
        id: 11,
        sigla: 'MS',
        nome: 'Mato Grosso do Sul',
        capital: 'Campo Grande',
        regiao: 'Centro-Oeste',
        bandeira: './imagens/bandeiraMS.png'
    },{
        id: 12,
        sigla: 'MG',
        nome: 'Minas Gerais',
        capital: 'Belo Horizonte',
        regiao: 'Sudeste',
        bandeira: './imagens/bandeiraMG.png'
    },{
        id: 13,
        sigla: 'PA',
        nome: 'Pará',
        capital: 'Belém',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraPA.png'
    },{
        id: 14,
        sigla: 'PB',
        nome: 'Paraíba',
        capital: 'João Pessoa',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraPB.png'
    },{
        id: 15,
        sigla: 'PR',
        nome: 'Paraná',
        capital: 'Curitiba',
        regiao: 'Sul',
        bandeira: './imagens/bandeiraPR.png'
    },{
        id: 16,
        sigla: 'PE',
        nome: 'Pernambuco',
        capital: 'Recife',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraPE.png'
    },{
        id: 17,
        sigla: 'PI',
        nome: 'Piauí',
        capital: 'Teresina',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraPI.png'
    },{
        id: 18,
        sigla: 'RJ',
        nome: 'Rio de Janeiro',
        capital: 'Rio de Janeiro',
        regiao: 'Sudeste',
        bandeira: './imagens/bandeiraRJ.png'
    },{
        id: 19,
        sigla: 'RN',
        nome: 'Rio Grande do Norte',
        capital: 'Natal',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraRN.png'
    },{
        id: 20,
        sigla: 'RS',
        nome: 'Rio Grande do Sul',
        capital: 'Porto Alegre',
        regiao: 'Sul',
        bandeira: './imagens/bandeiraRS.png'
    },{
        id: 21,
        sigla: 'RO',
        nome: 'Rondônia',
        capital: 'Porto Velho',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraRO.png'
    },{
        id: 22,
        sigla: 'RR',
        nome: 'Roraima',
        capital: 'Boa Vista',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraRR.png'
    },{
        id: 23,
        sigla: 'SC',
        nome: 'Santa Catarina',
        capital: 'Florianópolis',
        regiao: 'Sul',
        bandeira: './imagens/bandeiraSC.png'
    },{
        id: 24,
        sigla: 'SP',
        nome: 'São Paulo',
        capital: 'São Paulo',
        regiao: 'Sudeste',
        bandeira: './imagens/bandeiraSP.png'
    },{
        id: 25,
        sigla: 'SE',
        nome: 'Sergipe',
        capital: 'Aracaju',
        regiao: 'Nordeste',
        bandeira: './imagens/bandeiraSEpng'
    },{
        id: 26,
        sigla: 'TO',
        nome: 'Tocantins',
        capital: 'Palmas',
        regiao: 'Norte',
        bandeira: './imagens/bandeiraTO.png'
    }
]

let respostaSucesso = estado => { //resposta que aparecerá para o usuário se ele inserir um estado válido
    
    return `
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <p class="label_estado">Sigla</p>
                <h5 class="resultado_estado">${estado.sigla}</h5>
            </div>
            <div class="col-auto">
                <p class="label_estado">Nome</p>
                <h5 class="resultado_estado">${estado.nome}</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-auto">
                <p class="label_estado">Capital</p>
                <h5 class="resultado_estado">${estado.capital}</h5>
            </div>
            <div class="col-auto">
                <p class="label_estado">Regiao</p>
                <h5 class="resultado_estado">${estado.regiao}</h5>
            </div>
        </div>
    </div>
    `  
}

let respostaErro = palavraBuscada => { //resposta que aparecerá para o usuário em casa de busca inválida
    return `
        <p class="resultado_erro"> <span class="erro">:(</span> Sinto muito, não encontramos nenhum estado com o nome ${palavraBuscada}! Por favor, tente novamente. </p>
    `
}

function removerAcentos(novaStringComAcento) { //função que remove os acentos do atributo
    var string = novaStringComAcento;
    var mapaAcentosHex 	= {
          a : /[\xE0-\xE6]/g,
          e : /[\xE8-\xEB]/g,
          i : /[\xEC-\xEF]/g,
          o : /[\xF2-\xF6]/g,
          u : /[\xF9-\xFC]/g,
          c : /\xE7/g,
          n : /\xF1/g
    }
        for ( var letra in mapaAcentosHex ) {
          var expressaoRegular = mapaAcentosHex[letra];
          string = string.replace(expressaoRegular, letra);
        }

    return string;
};

const tratamentoDados = str => removerAcentos(str).toUpperCase(); //aplica o remover acentos e coloca todas as letras em maiúsculo

const encontrarEstado = (input) => infoEstado.find(elem => tratamentoDados(elem.nome) == tratamentoDados(input)); //pega o que o usuário digitou, aplica o tratamento de dados e compara para encontrar o estado

function inserirBandeira(bandeira) { //função para inserir a bandeira no background

}

function retirarBandeira () { //função para remover a bandeira do background
    
}

function buscaCliqueBotao () { //buscar o dado no input e envia a resposta para o HTML 
    let inputUsuario = document.getElementById('estado_usuario').value,
        divResposta = document.getElementById('resposta'),
        resultado = encontrarEstado(inputUsuario)
    console.log(resultado);
    if (!!resultado) {//se resultado do if = 'algumas', tiver dado => true
        divResposta.innerHTML = respostaSucesso(resultado)
        inserirBandeira(resultado.bandeira)
    } else { //se resultado = undefined,  n tiver dado => false
        divResposta.innerHTML = respostaErro(inputUsuario)
        retirarBandeira()
    }
}  