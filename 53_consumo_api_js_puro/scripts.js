fetch("https://reqres.in/api/users?")
  .then((resposta) => {
    return resposta.json();
  })
  .then((corpo) => {
    // console.log(corpo);
    // document.getElementById("span").innerHTML = corpo
    document.querySelector("#span").textContent = corpo
  });
