let tarefas = [];
let contadorId = 0;

let inputText = document.querySelector(".inputText");
let btnEnviar = document.querySelector(".btnEnviar");
let lista = document.querySelector(".lista");

btnEnviar.addEventListener("click", function(){
    adicionarTarefa();
})

inputText.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        adicionarTarefa();
    }
})

function adicionarTarefa() {
    //serve para deixar a pessoa fazer espaços nas pontas exemplo:      lavar carro
    let texto = inputText.value.trim();
    // serve para não enviar a lista vazia exemplo: vazio
    if(texto !== ""){
        contadorId++;
        tarefas.push({id: contadorId, tarefa: texto, concluido: false});
        inputText.value = "";
        renderizar();
 }
}

function renderizar(){
    // innerHtml serve para o texto não ser escrito mais de 1 vez
    lista.innerHTML = "";
    // loop para fazer uma lista 
    tarefas.forEach(function(item){
        let li = document.createElement("li");
        li.textContent = item.tarefa;
        lista.appendChild(li);;
                // btnExcluir serve para excluit a lista quando ela ja estiver cheia
        let btnExcluir = document.createElement("button")
        btnExcluir.innerHTML = "❌"
        li.appendChild(btnExcluir)
        btnExcluir.addEventListener("click", function(e){
            // serve para não adicionar na lista
            e.stopPropagation();
            tarefas = tarefas.filter(function(t){
                return t.id !== item.id
    })
    renderizar();
   })
 })
}