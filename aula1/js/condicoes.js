
let dinheiroMenino = 100;
let gasto = 725;

let morangos = 20;
let laranjas = 5;
let abacate = 15;
let melancia = 30;
let maracuja = 15;

let compras = morangos + laranjas + abacate + melancia + maracuja;

let limiteCompras = 60; 

if(compras > dinheiroMenino){
    console.log('O valor da compra excedeu o dinheiro que o menino tinha');
    console.log('O valor da compra foi de:', compras);
}

else if(compras >= limiteCompras){
    console.log('A compra excedeu o limite, o menino apanhou.');
    console.log('O valor da compra foi de:', compras )
}

else{
    console.log('Parabens, o valor da compra não excedeu e o menino não apanhou');
    console.log('O valor da compra foi de:' )
}











