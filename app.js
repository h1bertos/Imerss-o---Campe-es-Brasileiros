//Função adicionada com auxilio do Gemini para pesquisar ao clicar a tecla enter
let campoPesquisa = document.getElementById("campo-pesquisa")
campoPesquisa.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        pesquisar();
    }
    });

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Obtém as informações inseridas no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value



    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um time ou um ano</p>"
        return 
    }
    // Define tudo que for inserido no campo de pesquisa como letra minuscula para não interferir nos resultados de case-sensitive
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let ano = "" ; 
    let time = "";
    let tag = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        time = dado.time.toLowerCase();
        ano = dado.ano;
        tags = dado.tags;

        // Aqui, ano é número, por isso a sintaxe ==
        // Além disso, o if busca o texto/número dentro do ano, do nome do time ou das tags
        if (ano == campoPesquisa || time.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <div class="container">
            <div class="item-resultado">
                <h2>
                <!- Abaixo, é concatenado o nome do time com o ano-->
                    ${dado.time} - ${dado.ano}
                </h2>
                <!- Abaixo, é trazida a descrição, o link para informações do campeonato e o escudo do clube campeão-->
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"><b>Mais informações do campeonato</b></a>
                </div>
                <img src=${dado.escudo}>
            </div>
            </div>
        `;
        }
    }
// Por fim, caso o que foi pesquisado não seja encontrado, o site retorna a mensagem
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

