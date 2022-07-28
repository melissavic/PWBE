console.log('Calculadora Simples')

// import da biblioteca de entrada de dados
var readline = require('readline');

//Instancia o objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada do valor1
entradaDados.question('Digite o numero1: \n' , function (valor1) {
    //Declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat (valor1);

    //typeof() - verifica qual o tipo de dados de uma variavel ou um objeto
    //console.log(typeof(numero1))

    entradaDados.question('Digite o numero2: \n', function (valor2) {
        let numero2 = parseFloat(valor2);
    
    entradaDados.question('Escolha a operacao a ser calculada: somar[+], subtrair [-], multiplicar [*], dividir[/]: \n'  , function(opcao) {
      //Declarando a variavel que vai receber o tipo de operacao matemática e convertendo o texto digitado em maiúsculo.
      // toUpperCase() converte em maiúsculo 
      //toLowerCase() converte em minúsculo
        let operacao = opcao.toUpperCase();
        let resultado;
        let erro = false;

       /* if(operacao == 'SOMAR' || operacao == '+' )
        {
            resultado = numero1 + numero2; 

        } else if (operacao == 'SUBTRAIR' || operacao == '-' )
        {
            resultado = numero1 - numero2;

        } else if (operacao == 'MULTIPLICAR' || operacao == '*' )
        {
                resultado = numero1 * numero2;

        } else if (operacao == 'DIVIDIR' || operacao == '/' ) {
            resultado = numero1 / numero2;
        }

        else {
            resultado = 'ERRO: Não foi escolhida uma operação válida';
            erro = true;
        }
        */
 
            switch(operacao)
            {
                case 'SOMAR':
                    resultado = numero1 + numero2;
            break;

                case 'SUBTRAIR':
                    resultado = numero1 - numero2;
                break;

                case 'MULTIPLICAR':
                    resultado = numero1 * numero2;
                break;

                case 'DIVIDIR': 
                resultado = numero1 / numero2;
                
                default: 
                resultado = 'ERRO: Não foi escolhida uma operação válida';
                erro = true;

            }

        if (erro) {
            console.log(resultado)
        }
        else{
            console.log('O resultado é:' + resultado);
        }

    });
    
 });


}); 

