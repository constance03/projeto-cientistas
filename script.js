//Cientistas mulheres incriveis
//Criei objetos com os dados de cada cientista
const cientista1 = {
    descoberta: "Conhecida por criar e elaborar um algoritmo que foi capaz de contabilizar os dados (5000000 gigabytes) obtidos por telescópios e gerar a primeira imagem de um buraco negro. Katie Bouman é uma Ph.D. do Instituto de Tecnologia de Massachusetts (MIT).",
    idadeDescoberta: "Idade em que realizou a descoberta: 29 anos",
    anoDescoberta: "Quando aconteceu: 2019",
    pais: "País de nascimento: Estados Unidos",
    areaPesquisa: "Áreas de Pesquisa: fotografia, astronomia, computador"
}

const cientista2 = {
    descoberta: "Conhecida pela mãe da programação moderna, Ada desenvolveu, junto com o cientista Babbage, o primeiro algoritmo que foi processado por uma máquina. Ela percebeu que a máquina criada por Babbage poderia processar muito mais que apenas calculos. As notas de Lovelace a respeito da máquina analítica de Babbage foram republicadas em 1953, quase cem anos após sua morte.",
    idadeDescoberta: "Idade em que realizou a descoberta: 28 anos",
    anoDescoberta: "Quando aconteceu: 1843",
    pais: "País de nascimento: Reino Unido",
    areaPesquisa: "Áreas de Pesquisa: matemática, programação, computador"
}

const cientista3 = {
    descoberta: "Descobriu elementos químicos, como o polônio e rádio, que auxiliavam em tratamentos médicos. Foi a primeira mulher a ganhar o Prêmio Nobel de Física e a lecionar na Universidade de Sorbonne. Marie também organizou o Institut du Radium, que se tornou um grande centro de estudos de física nuclear e de química, onde conduziu diversos estudos importantes para a medicina moderna.",
    idadeDescoberta: "Idade em que realizou a descoberta: 31 anos",
    anoDescoberta: "Quando aconteceu: 1898",
    pais: "País de nascimento: Polônia", 
    areaPesquisa: "Áreas de Pesquisa: química, medicina, radioatividade"
}

const cientista4 = {
    descoberta: "Sequenciou o genoma da COVID-19 após 48 horas do primeiro caso no Brasil, enquanto a média no resto do mundo para esse mapeamento foi de 15 dias. A sequenciação permitiu diferenciar o vírus que infectou o paciente brasileiro do genoma identificado na China. Jaqueline é doutora em Patologia Humana e Experimental, pela Universidade Federal da Bahia (UFBA) e pós doutoranda no Instituto de Medicina Tropical da Universidade de São Paulo (USP).",
    idadeDescoberta: "Idade em que realizou a descoberta: 32 anos",
    anoDescoberta: "Quando aconteceu: 2020",
    pais: "País de nascimento: Brasil",    
    areaPesquisa: "Áreas de Pesquisa: saúde pública, medicina, genética"
}

const cientista5 = {
    descoberta: "Além de ser uma renomada atriz do começo do século passado, era também inventora. Ela desenvolveu o sistema de salto em frequência, planejado originalmente para guiar torpedos submarinos usando sinais de rádio (e usado para despistar os radares nazistas na 2ª Guerra Mundial). Futuramente foi usado para desenvolver a internet Wi-Fi, o GPS e a conexão Bluetooth. Ganhou o prêmio EFF Pioneer Award, o Oscar da Invenção nos EUA, e o prêmio Viktor Kaplan do governo austríaco por sua contribuição para a ciência.",
    idadeDescoberta: "Idade em que realizou a descoberta: 28 anos",
    anoDescoberta: "Quando aconteceu: 1942",
    pais: "País de nascimento: Austria",
    areaPesquisa: "Áreas de Pesquisa: rádio, celular, internet"
}

//adicionar propriedades dos objetos no HTML
function adicionarObjeto (objeto, id) {
    for (i in objeto) {
        let cientista = document.getElementById(id)
        let novoItem = document.createElement("li")
        cientista.appendChild(novoItem)
        novoItem.innerHTML = objeto[i]
    }
}

adicionarObjeto (cientista1, "cientista-1")
adicionarObjeto (cientista2, "cientista-2")
adicionarObjeto (cientista3, "cientista-3")
adicionarObjeto (cientista4, "cientista-4")
adicionarObjeto (cientista5, "cientista-5")


// Procurar item no buscar e sumir os demais itens
function searchCientista() {
    let input = document.getElementById('input').value
    input=input.toLowerCase();
    let ul = document.getElementsByClassName('cientistas');

    for (i = 0; i < ul.length; i++) { 
        if (!ul[i].innerHTML.toLowerCase().includes(input)) {
            ul[i].style.display="none";
        }
        else {
            ul[i].style.display="inherit";
        }
    } 

    if (input === "") {
        alert("Pesquisa em branco")
    }
}