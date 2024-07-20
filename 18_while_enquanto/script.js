// Estrutura de repetição While ou Enquanto

// Obs: se a lógica for (menor usa o ++, se for maior o --)
var x = 0;

while (x <= 5) {
    console.log("Testando repetição: " + x);

    // incrementador
    x++;
}

// testando em um arrei
var arr = ['teste', 'testando', 'a', 'b', 'c'];

var y = 0;

while (y <= 4) {
    console.log(arr[y]);
    //nao esquecer de incrementar, loop infinito
    y++;
}

var palavra = "Matheus";
var i = 0;

while(i <= 6) {
    console.log(palavra[i])

    i++;
   // i += 1;

}
