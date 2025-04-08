//Array
let timesPaulista =["Santos","São Paulo","Palmeiras","Ponte Preta"]

//Acessar um intem do Array
console.log(timesPaulista[0]);

//Verificar o tamanho do Array
console.log(timesPaulista.length)

//Adicionar um item nofinal do array
timesPaulista.push("Corinthians")

//Adicionar um item no inciio do Array
timesPaulista.unshift("Guarani")

//Removendo um valor no inicio do Array
timesPaulista.shift()
console.log(timesPaulista)

//Removendo um valor no fim do Array
timesPaulista.pop()
console.log(timesPaulista)

//Verificar a posição de um item
console.log(timesPaulista.indexOf("Santos"));


//Metodo Splice()
//-Adicionar
//-Remover
//-Modificar

//Remover um item a partir de uma posição
//array.splice(posição, quantidadeDeItensRemovidos)
timesPaulista.splice(1,3)
console.log(timesPaulista)

//Remover um item a partir de um valor
timesPaulista.splice(timesPaulista.indexOf("Santos"),1)
console.log(timesPaulista);

//Adicionar itens dentro de um array
timesPaulista.splice(0,0,"Santos","São Paulo","Palmeiras","Corinthians","Ponte Preta")
console.log(timesPaulista);

//Modificando itens de um array
timesPaulista.splice(2,1,"Guarani","Ponte Preta","Palmeiras","Corinthians")
console.log(timesPaulista);

//percorrer um Array
console.log("Maiores Times Paulista");
let i =0;

timesPaulista.forEach((time)=>{
    i++
    console.log(i,"-",time);
    
})

