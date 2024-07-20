// Break e continue, usado em estruturas de repetição

for (var i = 10; i > 0; i--) {
    
    console.log(i);

    if (i == 5) {
        break;
    }
    
}

console.log("Deu o break");

// testando loop continue
var x = 10;

while (x < 100) {

    x += 10;

    if (x === 60) {
        continue;
        
    }
    console.log("Testando continue " + x);
}

