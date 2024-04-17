1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

   function calcularIMC(peso, altura) {
   let resultado = peso / (altura**2);
   console.log(`Seu IMC é de ${resultado.toFixed(2)}`);
}

calcularIMC(50, 1.50);



2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

   let resultado = calcularFatorial(5);

function calcularFatorial(num) {
    let fatorial = 1; // dentro da função, garantindo que ela seja redefinida a cada chamada da função. 
    for (let i = 1; i <= num; i++) { //inicializa com 1, enquando menor igual a num o contador (I) adiciona mais um ATÉ 5
        fatorial *= i; //não podemos usar a variável "num" diretamente para calcular o fatorial, pois isso distorceria o valor original de num, que é o máximo, criamos uma variável separada chamada fatorial para armazenar o resultado do fatorial enquanto iteramos sobre os números. 
    }
    return fatorial;
}

console.log(`O resultado do fatorial é: ${resultado}`);




3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

function converterDolar(valorEmDolar) { // funcao recebe valorEmDolar como parametro
    let cotacaoDolar = 4.80; // definimos a cotacao do dolar
    return valorEmDolar *= cotacaoDolar; //retorna o  parametro valorEmDolar, que recebe ele mesmo multiplicado pela cotacaoDolar
}

let valorEmDolar = 100; // A variável valorEmDolar só está disponível dentro da função converterDolar, por isso criamos uma variável fora da função para usarmos concatenado p imprimir
let valorEmReais = converterDolar(valorEmDolar); // variavel que recebe o retorno da função converterDolar
console.log(`${valorEmDolar} DOLARES EM REAIS É IGUAL A: ${valorEmReais}`);

//tambem pode 

// function converterDolar(valorEmDolar) { // funcao recebe valorEmDolar como parametro
//     let cotacaoDolar = 4.80; // definimos a cotacao do dolar
//     return valorEmDolar *= cotacaoDolar; //retorna o  parametro valorEmDolar, que recebe ele mesmo multiplicado pela cotacaoDolar
// }

// console.log(converterDolar(100));




4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
