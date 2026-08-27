const clpalavras = [
  "AMONG",
  "JOGAR",
  "SENHA",
  "NAVIO",
  "VERDE",
  "FESTA",
  "TERRA",
  "MUNDO",
  "FOLHA",
  "CASAS",
  "LIVRO",
  "CARRO",
  "PORTA",
  "MOUSE",
  "TECLA",
  "JOGOS",
  "FICHA",
  "GRUPO",
  "SABOR",
  "NOITE",
];


let clsenhaCorreta;
let cltentativaAtual = 0;


const clmaxTentativas = 6;


const cltabuleiro = document.querySelector(".tabuleiro");
const clinputSenha = document.querySelector(".inputSenha");
const clbtnEnviar = document.querySelector(".btnEnviar");
const clbtnRetornar = document.querySelector(".retornar");
const clcontador = document.querySelector(".contador");
const clbtnsFechar = document.querySelectorAll(".fecharFinal");


const cltelaVitoria = document.querySelector(".telaVitoria");
const cltelaDerrota = document.querySelector(".telaDerrota");


const clpalavraVitoria = document.querySelector(".palavraVitoria");
const clpalavraDerrota = document.querySelector(".palavraDerrota");


function sortearPalavra() {
  const clindice = Math.floor(Math.random() * clpalavras.length);
  clsenhaCorreta = clpalavras[clindice];
}


function criarTabuleiro() {
  cltabuleiro.innerHTML = "";


  for (let cllinha = 0; cllinha < clmaxTentativas; cllinha++) {
    const clnovaLinha = document.createElement("div");
    clnovaLinha.classList.add("linha");


    for (let clcoluna = 0; clcoluna < 5; clcoluna++) {
      const clcasa = document.createElement("div");
      clcasa.classList.add("digito");


      clnovaLinha.appendChild(clcasa);
    }


    cltabuleiro.appendChild(clnovaLinha);
  }
}


function atualizarContador() {
  clcontador.innerHTML = `<span class="contadorCor">${cltentativaAtual}</span>/${clmaxTentativas}`;
}


function verificar() {
  if (cltentativaAtual >= clmaxTentativas) {
    return;
  }


  const clpalavraDigitada = clinputSenha.value.toUpperCase().trim();


  if (clpalavraDigitada.length !== 5) {
    alert("Digite uma palavra com 5 letras!");
    return;
  }


  const cllinhaAtual = cltabuleiro.children[cltentativaAtual];
  const clletrasRestantes = clsenhaCorreta.split("");


  for (let cli = 0; cli < 5; cli++) {
    const clcasa = cllinhaAtual.children[cli];


    clcasa.textContent = clpalavraDigitada[cli];


    if (clpalavraDigitada[cli] === clsenhaCorreta[cli]) {
      clcasa.classList.add("certo");


      const clindiceLetra = clletrasRestantes.indexOf(clpalavraDigitada[cli]);


      if (clindiceLetra !== -1) {
        clletrasRestantes.splice(clindiceLetra, 1);
      }
    }
  }


  for (let cli = 0; cli < 5; cli++) {
    const clcasa = cllinhaAtual.children[cli];


    if (clcasa.classList.contains("certo")) {
      continue;
    }


    const clindiceLetra = clletrasRestantes.indexOf(clpalavraDigitada[cli]);


    if (clindiceLetra !== -1) {
      clcasa.classList.add("quase");


      clletrasRestantes.splice(clindiceLetra, 1);
    } else {
      clcasa.classList.add("erro");
    }
  }


  cltentativaAtual++;
  atualizarContador();


  if (clpalavraDigitada === clsenhaCorreta) {
    mostrarVitoria();
    return;
  }


  if (cltentativaAtual === clmaxTentativas) {
    mostrarDerrota();
    return;
  }


  clinputSenha.value = "";
  clinputSenha.focus();
}


function mostrarVitoria() {
  clpalavraVitoria.textContent = "Você acertou a palavra: " + clsenhaCorreta;


  cltelaVitoria.classList.add("ativa");
}


function mostrarDerrota() {
  clpalavraDerrota.textContent = "A palavra era: " + clsenhaCorreta;


  cltelaDerrota.classList.add("ativa");
}


function voltarInicio() {
  window.location.href = "index.html";
}


function resetarJogo() {
  cltentativaAtual = 0;


  sortearPalavra();
  criarTabuleiro();
  atualizarContador();


  clinputSenha.value = "";
  clinputSenha.focus();


  cltelaVitoria.classList.remove("ativa");
  cltelaDerrota.classList.remove("ativa");
}


clbtnEnviar.addEventListener("click", verificar);


clbtnRetornar.addEventListener("click", resetarJogo);


clbtnsFechar.forEach(function (clbotao) {
  clbotao.addEventListener("click", voltarInicio);
});


clinputSenha.addEventListener("keydown", function (clevent) {
  if (clevent.key === "Enter") {
    verificar();
  }
});


sortearPalavra();
criarTabuleiro();
atualizarContador();
clinputSenha.focus();