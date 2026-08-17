const frases = [
  "Acredite em você e no seu potencial.",
  "Cada pequeno passo te aproxima do seu objetivo.",
  "Não desista só porque está difícil.",
  "Você é capaz de superar grandes desafios.",
  "O esforço de hoje constrói o sucesso de amanhã.",
  "Transforme seus erros em aprendizado.",
  "Tenha coragem para começar e persistência para continuar.",
  "Grandes conquistas começam com pequenas atitudes.",
  "Confie no processo e continue avançando.",
  "Você pode chegar mais longe do que imagina."
];

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase(){
    let indice = Math.floor(Math.random() * frases.length);
    fraseTexto.textContent = frases[indice];
}
btnFrase.addEventListener("click", function(){
    mostrarFrase();
})