// extrutura ou bloco de codigo if
// dentro dos parenteses a condição, e no bloco o que serar decidido
if(true) {
    console.log("Testando o if");
}

if(false) {
    console.log("Entrando no if");
} else {
    console.log("Entrando no else");
}

// segundo exemplo
let provas = 7
let trabalhos = 6
let media = (provas + trabalhos) / 2


// if encadeados
if (media >= 6 && media <= 10) {
    console.log("Média: " + media);
    console.log("Aluno: Aprovado.");
    
} else if (media < 0 || media > 10) {
    console.log(media);
    console.log("Notas incorretas.")
    
} else {
    console.log(media)
    console.log("Aluno: Reprovado.")

}