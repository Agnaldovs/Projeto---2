
const TransferênciasBotao = document.getElementById("Transferências");
const ElencoBotao = document.getElementById("Elenco");
const TítulosBotao = document.getElementById("Títulos");

// Botão Transferências
TransferênciasBotao.addEventListener("click", function () {
    const novoNome = prompt("Digite o nome do jogador:");

    if (novoNome !== null && novoNome.trim() !== "") {
        document.getElementById("transferencias-info").textContent =
            "Jogador: " + novoNome.trim();
    }
});

// Botão Elenco
ElencoBotao.addEventListener("click", function () {
    const cidade = prompt("Digite a cidade:");

    if (cidade !== null && cidade.trim() !== "") {
        alert("Cidade informada: " + cidade.trim());
    }
});

// Botão Títulos
TítulosBotao.addEventListener("click", function () {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        alert("Você saiu do perfil!");
        window.location.href = "about:blank";
    }
});


const btnNovaPagina = document.getElementById("btn-nova-pagina");

btnNovaPagina.addEventListener("click", () => {
    window.location.href = "pagina2.html"; 
});

// Banco de dados das transferências 26/27
const jogadoresDB = {
    arnold: {
        nome: "Trent Alexander-Arnold",
        foto: "img/arnold.png.png",
        posicao: "Lateral Direito (LD)",
        idade: "28 anos",
        nacionalidade: "Inglaterra",
        clubeOrigem: "Liverpool",
        clubeDestino: "Real Madrid",
        valor: "€ 45.000.000",
        status: "Transferido",
        classeStatus: "status-transferido",
        contrato: "Até Junho de 2031",
        descricao: "Acordo oficializado entre os clubes. O lateral inglês assina contrato de cinco temporadas com o Real Madrid para assumir a titularidade na lateral direita."
    },
    julian: {
        nome: "Julián Álvarez",
        foto: "img/julian.png",
        posicao: "Atacante (ATA)",
        idade: "26 anos",
        nacionalidade: "Argentina",
        clubeOrigem: "Atlético de Madrid",
        clubeDestino: "Barcelona",
        valor: "€ 75.000.000",
        status: "Rumor",
        classeStatus: "status-rumor",
        contrato: "Em negociação",
        descricao: "O Barcelona monitora a situação do atacante argentino como principal alvo para renovar o comando de ataque na janela 26/27."
    },
    nico: {
        nome: "Nico Williams",
        foto: "img/nico.png",
        posicao: "Ponta Esquerda (PE)",
        idade: "24 anos",
        nacionalidade: "Espanha",
        clubeOrigem: "Athletic Bilbao",
        clubeDestino: "Barcelona",
        valor: "€ 58.000.000",
        status: "Transferido",
        classeStatus: "status-transferido",
        contrato: "Até Junho de 2031",
        descricao: "Multa rescisória paga integralmente. O atacante espanhol reforça o setor ofensivo catalão após destaque na LaLiga."
    },
    ronald: {
        nome: "Ronald Araújo",
        foto: "img/ronald.png",
        posicao: "Zagueiro (ZC)",
        idade: "27 anos",
        nacionalidade: "Uruguai",
        clubeOrigem: "Barcelona",
        clubeDestino: "Bayern de Munique",
        valor: "€ 30.000.000",
        status: "Emprestado",
        classeStatus: "status-emprestado",
        contrato: "Empréstimo de 1 temporada (opção de compra)",
        descricao: "Emprestado ao clube alemão por uma temporada com cláusula de compra fixada ao final do vínculo."
    },
    vitinha: {
        nome: "Vitinha",
        foto: "img/vitinha.png",
        posicao: "Meio-Campista (MEI)",
        idade: "26 anos",
        nacionalidade: "Portugal",
        clubeOrigem: "PSG",
        clubeDestino: "Manchester City",
        valor: "€ 45.000.000",
        status: "Transferido",
        classeStatus: "status-transferido",
        contrato: "Até Junho de 2030",
        descricao: "Negociação concluída entre PSG e Manchester City. O meia português chega para reforçar a saída de bola da equipe inglesa."
    },
    barcola: {
        nome: "Bradley Barcola",
        foto: "img/barcola.png",
        posicao: "Ponta Esquerda (PE)",
        idade: "24 anos",
        nacionalidade: "França",
        clubeOrigem: "PSG",
        clubeDestino: "Arsenal",
        valor: "€ 65.000.000",
        status: "Transferido",
        classeStatus: "status-transferido",
        contrato: "Até Junho de 2031",
        descricao: "O Arsenal fechou a contratação do ponta francês para aumentar a velocidade pelas pontas na Premier League."
    },
    greenwood: {
        nome: "Mason Greenwood",
        foto: "img/greenwood.png",
        posicao: "Ponta Direita (PD)",
        idade: "25 anos",
        nacionalidade: "Inglaterra",
        clubeOrigem: "Olympique de Marseille",
        clubeDestino: "Juventus",
        valor: "€ 40.000.000",
        status: "Rumor",
        classeStatus: "status-rumor",
        contrato: "Sondagem inicial",
        descricao: "A Juventus abriu conversas com a diretoria do Olympique para avaliar a contratação do atacante inglês."
    },
    andrey: {
        nome: "Andrey Santos",
        foto: "img/andrey.png",
        posicao: "Volante (VOL)",
        idade: "22 anos",
        nacionalidade: "Brasil",
        clubeOrigem: "Strasbourg",
        clubeDestino: "Chelsea",
        valor: "€ 45.000.000",
        status: "Transferido",
        classeStatus: "status-transferido",
        contrato: "Retorno definitivo / 2030",
        descricao: "Após grande destaque na Ligue 1, o volante brasileiro é reintegrado em definitivo ao elenco principal do Chelsea."
    },
    isak: {
        nome: "Alexander Isak",
        foto: "img/isak.png",
        posicao: "Atacante (ATA)",
        idade: "27 anos",
        nacionalidade: "Suécia",
        clubeOrigem: "Newcastle",
        clubeDestino: "Arsenal",
        valor: "€ 75.000.000",
        status: "Rumor",
        classeStatus: "status-rumor",
        contrato: "Em negociação",
        descricao: "O Arsenal prepara proposta oficial para tirar o centroavante sueco do Newcastle nesta janela."
    },
    bruno: {
        nome: "Bruno Guimarães",
        foto: "img/bruno.png",
        posicao: "Meio-Campista (MEI)",
        idade: "29 anos",
        nacionalidade: "Brasil",
        clubeOrigem: "Newcastle",
        clubeDestino: "Real Madrid",
        valor: "€ 80.000.000",
        status: "Transferido",
        classeStatus: "status-transferido",
        contrato: "Até Junho de 2030",
        descricao: "Transferência fechada. O volante brasileiro chega ao clube espanhol após temporadas de destaque na Inglaterra."
    },
    palmer: {
        nome: "Cole Palmer",
        foto: "img/palmer.png",
        posicao: "Meia-Atacante (MEI)",
        idade: "24 anos",
        nacionalidade: "Inglaterra",
        clubeOrigem: "Chelsea",
        clubeDestino: "Manchester City",
        valor: "€ 90.000.000",
        status: "Rumor",
        classeStatus: "status-rumor",
        contrato: "Especulação de mercado",
        descricao: "Rumores na imprensa inglesa apontam interesse do City em repatriar o meia revelado em sua base."
    },
    estevao: {
        nome: "Estêvão",
        foto: "img/estevao.png",
        posicao: "Ponta Direita (PD)",
        idade: "19 anos",
        nacionalidade: "Brasil",
        clubeOrigem: "Chelsea",
        clubeDestino: "Strasbourg",
        valor: "€ 55.000.000",
        status: "Emprestado",
        classeStatus: "status-emprestado",
        contrato: "Empréstimo de 1 temporada",
        descricao: "Emprestado ao clube francês para ganhar minutagem e adaptação ao futebol europeu antes de retornar a Londres."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Botão do canto superior direito (se existir na página)
    const btnNovaPagina = document.getElementById("btn-nova-pagina");
    if (btnNovaPagina) {
        btnNovaPagina.addEventListener("click", () => {
            window.location.href = "pagina2.html";
        });
    }

    // 2. Clique nos botões de status (Transferido, Rumor, Emprestado)
    const botoesStatus = document.querySelectorAll(".produto button[data-jogador]");
    botoesStatus.forEach((botao) => {
        botao.addEventListener("click", () => {
            const idJogador = botao.getAttribute("data-jogador");
            window.location.href = `detalhes.html?jogador=${idJogador}`;
        });
    });

    // 3. Carregar dados na página detalhes.html
    const containerDetalhes = document.getElementById("detalhes-jogador");
    if (containerDetalhes) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("jogador");
        const jogador = jogadoresDB[id];

        if (jogador) {
            containerDetalhes.innerHTML = `
                <div class="detalhes-topo">
                    <img src="${jogador.foto}" alt="${jogador.nome}">
                    <div class="detalhes-info">
                        <span class="badge-status ${jogador.classeStatus}">${jogador.status}</span>
                        <h2>${jogador.nome}</h2>
                        <p class="meta">${jogador.posicao} • ${jogador.idade} • ${jogador.nacionalidade}</p>
                        
                        <div class="rota-transferencia">
                            <div class="clube-box">
                                <span>Clube Atual</span>
                                <strong>${jogador.clubeOrigem}</strong>
                            </div>
                            <div class="seta">➔</div>
                            <div class="clube-box destino">
                                <span>Destino</span>
                                <strong>${jogador.clubeDestino}</strong>
                            </div>
                        </div>

                        <p class="valor-destaque">Valor da operação: <strong>${jogador.valor}</strong></p>
                        <p class="contrato-info"><strong>Contrato:</strong> ${jogador.contrato}</p>
                    </div>
                </div>
                <div class="detalhes-resumo">
                    <h3>Resumo da Negociação</h3>
                    <p>${jogador.descricao}</p>
                </div>
            `;
        } else {
            containerDetalhes.innerHTML = `<p>Jogador não encontrado. <a href="index.html" style="color:#38bdf8;">Voltar para o início</a></p>`;
        }
    }
});
