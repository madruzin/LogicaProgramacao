//getElementsBytagName- seleciona todas as tag que eu desejar 
let paragrafos = document.getElementsByTagName("p")
paragrafos[0].innerHTML= "Palmeiras 2 x 0, sem mundial"




//getElementById - Seleciona um elemento do tipo ID
var titulo = document.getElementById("titulo")
titulo.innerHTML= "Alterando usando JS"

//GetElementsByClassName - seleciona todos os elementos do tipo class
const caixas = document.getElementsByClassName("caixa")
caixas[0].style.backgroundColor = "Green"
caixas[1].style.backgroundColor = "purple"

//QuerySelectoR - seleciona um elemento do tipo Class ou Id
const paragrafoQuery = document.querySelector("#paragrafoQuery")
paragrafoQuery.style.backgroundColor="blue"
paragrafoQuery.style.padding ="10px"



function AlteraTexto() {
    let input = document.getElementsByTagName("input")[0].value
    titulo.textContent = input
}

function AlteraQuery() {
    let input = document.getElementsByTagName("input")[1].value
    paragrafoQuery.textContent = input
   } 
//QuerySelectorALL - seleciona um elemento do tipo Class ou Id
const caixaQuery= document.querySelectorAll(".caixaQuery")
caixaQuery[0].style.backgroundColor= "red"
caixaQuery[0].style.color= "white"
caixaQuery[1].style.backgroundColor= "orange"
caixaQuery[1].style.color= "white"
