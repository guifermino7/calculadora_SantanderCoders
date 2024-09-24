console.log("Testando script...");

const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;

console.log(num1);
console.log(num2);

function validaEhNumero(num1, num2) {
    const num1EhNumero = isNaN(num1);
    const num2EhNumero = isNaN(num2);

    if(num1EhNumero) {
       return alert("O primeiro valor informado não é um número. Por favor, insira novamente."); 
    }

    if(num2EhNumero) {
        return alert("O segundo valor informado não é um número. Por favor, insira novamente.");
    }
}