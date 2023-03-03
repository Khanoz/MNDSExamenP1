numeros = [5, 2, 3];
menor = numeros[0];
for(let i = 1;i < numeros.length; i++){
    if(numeros[i] < menor){
        menor = numeros[i];
    }
}
console.log(`El numero menor es: ${menor}`);