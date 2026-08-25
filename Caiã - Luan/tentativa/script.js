function criarTabuleiro(){
    const clTabuleiro = document.querySelector(".clTabuleiro");

    for (let c = 1; c <= 5; c++){
        for (let i = 1; i <= 7; i++){
        let casa = document.createElement("div");
        casa.classList.add("casa");
        clTabuleiro.appendChild(casa);

        if ((c + i) % 2 == 0){
   } 
  }
 }
}

criarTabuleiro();