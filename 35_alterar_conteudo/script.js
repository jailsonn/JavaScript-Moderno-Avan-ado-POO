// primeiro, selecionar o elemento
// querySelectour ou getElementeById; celetor css
var title = document.querySelector('#title');
 console.log(title);


// Pra Alterar o Texto temos: 
// innerHTML e 

// textContent


// innerHTML
// title.innerHTML = "jailsonnn feio "
title.innerHTML = "Alterando o texto do titulo";



// textContent   
// -> mais utilizado, recomendado e Performatico etc.
var subtitle = document.querySelector(".subtitle");
 console.log(subtitle);

 subtitle.textContent = "Alterando o Subtitulo do elemento";

//  alterando o paragrafo
var paragrafo1 = document.querySelector("#paragrafo");
 console.log(paragrafo1);

//  paragrafo1.innerHTML = "TEXTO ALTERADO"
paragrafo1.textContent = "SEGUNDO TEXTO ALTERADO";


var title3 = document.querySelector(".title3");
console.log(title3);
title3.textContent = "ja mudou";

// mudando o titulo 4
var title4 = document.querySelector(".title4");
console.log(title4);

title4.textContent = "MUDOU O DOM.............";
