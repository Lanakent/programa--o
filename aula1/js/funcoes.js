//camelcase -  escrevemos uma declaração sem espaço, começando com minusculo e alterando entre maiusculo 
//ex:saudarUsariologado 

function saudarUsario(nome){
console.log('olá,' + nome);
};


saudarUsario("Lana");

function somar(n1,n2){
    return n1 + n2;
}

console.log('a soma dos dois numeros e '+ somar(5,10));

saudarUsario("Lana");

function multiplicação(n1,n2){
    return n1 * n2;
};
console.log('a multiplicação dos numeros e' , multiplicação(3,45));


saudarUsario("Lana");

function SUBTRAÇÃO(n1,n2){
    return n1 - n2;
}
console.log('a subtração dos numeros e igual', SUBTRAÇÃO(45,30));


saudarUsario("Lana");

function DIVISÃO(n1,n2){
    return n1 / n2;
}
console.log('a divisão dos numeros e igual a' , DIVISÃO(7,95));




function corDoSemaforo(cor){
    if(cor === "verde"){
        return("siga");
    }else if ( cor === "amarelo"){
        return(ateção);
    }else if(cor ==="vermelho"){
       return("pare");
    }else{
        return("cor invalida");
    };
}

console.log("cor do semáforo", corDoSemaforo("verde"));



//array -lista

let frutas = ['maça','banana', 'uva','melancia' ]

console.log(frutas[3]);

frutas.pop("pera");

console.log(frutas);

let indice= frutas.indexOf("banana");
console.log(indice);
// contando as frutas 
let numerosDeFrutas = frutas.length;
console.log(numeroDeFrutas)
// verificando se a lista está vazia;
if(frutas.length === 0){
    console.log("a lista esta vazia");
}
else{
    console.log("a lista está cheia")
}


// verificar se um item contem um determindado element=incluido
let contemUva = frutas.incluidas("uva");

if(frutas.includes("uva")){
    console.log("não tem uva na lista")
}else{
    console.log("tem uva na lista");
}


function verificar (id){
    const idsAutorizados = [100,101,102,103,104,105];
    if(idsAutorizados.includes(id)){
        console.log("acesso autorizado!");
    }else{
        console.log("Acesso negado!");
    }
}


verificarAcesso(105);
































































