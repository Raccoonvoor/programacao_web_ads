let pagina = document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);  


function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome)

    let idade = document.getElementById("idade").value;
    console.log(idade)
    let cpf = document.getElementById("cpf").value; 
    console.log(cpf)

    if(nome =="") { // Não considerar nomes com somente espaços! (remover espaçoes em branco) 
        alert("Nome não deve ser vazio!")
    }
}

function validaCPF(cpf) {
    // Retorna true se o cpf for valido, caso o contrario retorna false
    return true;
}