const senhaCorreta = "12345"
const btnEnviar = document.querySelector(".btnEnviar")

btnEnviar.addEventListener("click", function(){
    verificar();
})

function verificar(){
    const input = document.querySelector(".inputSenha"); // ou pode ser .value aqui no final do ()
    let inputValue = input.value;
    const senha = document.querySelector(".senha");
    for(let i = 0; i <5; i++){
        let number = senha.children[i]
        number.textContent = inputValue[i]

        if(inputValue[i] == senhaCorreta[i]){
            number.classList.add("certo");
        } else {
            number.classList.add("erro");
        }
 }
}