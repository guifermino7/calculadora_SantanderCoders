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

let resultado;

function calcular(operacao) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    validaEhNumero(num1, num2);

    switch(operacao) {
        case 'adicao':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                alert("Não é possível dividir por 0.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Escolha inválida. Por favor, selecione novamente.");
            return;
    }

    document.getElementById("resultado").innerText = resultado;
}