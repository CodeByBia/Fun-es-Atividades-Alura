function calcularIMC(peso, altura) {
   let resultado = peso / (altura**2);
   console.log(`Seu IMC é de ${resultado.toFixed(2)}`);
}

calcularIMC(50, 1.50);
