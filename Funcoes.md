1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

   function calcularIMC(peso, altura) {
   let resultado = peso / (altura**2);
   console.log(`Seu IMC é de ${resultado.toFixed(2)}`);
}

calcularIMC(50, 1.50);
