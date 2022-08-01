console.log('Calculadora Simples')

const { exit } = require('process');
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

    entradaDados.question('Digite o numero2: \n', function (valor2) {1
        let numero2 = parseFloat(valor2);
    
    entradaDados.question('Escolha a operacao a ser calculada: somar[+], subtrair [-], multiplicar [*], dividir[/]: \n'  , function(opcao) {
      //Declarando a variavel que vai receber o tipo de operacao matemática e convertendo o texto digitado em maiúsculo.
      // toUpperCase() converte em maiúsculo 
      //toLowerCase() converte em minúsculo
        let operacao = opcao.toUpperCase();
        let resultado;
        let erro = false;
     
        //Chama a funcao que realizara os calculos matematicos 
      if (resultado = calcular(numero1, numero2, operacao))
         console.log('O resultado é:' + resultado); 



    });
    
 });


}); 

 // Método tradicional de se criar função 
function calcular (valor1, valor2, opcaoCalculo) {

 
 //Criando variaveis locais para receber o conteudo dos argumentos que foram encaminhados na function
    let numero1 =  valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false; 


    //isNan() - funcao para validar se o conteudo de uma variavel numerica ou nao 

    if (isNaN(numero1) || isNaN(numero2))
    {
        console.log( 'ERRO: Somente será possível calcular se forem digitados números.');
        erro = true;
    } else  {
       
     /*  if(operacao == 'SOMAR' || operacao == '+' )
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
        
    } */
          
        switch(operacao)
            {
                case 'SOMAR': case '+':
                    resultado = numero1 + numero2;
            break;

                case 'SUBTRAIR': case '-':
                    resultado = numero1 - numero2;
                break;

                case 'MULTIPLICAR': case '*':
                    resultado = numero1 * numero2;
                break;

                case 'DIVIDIR': case '/':
                    if(numero2 == 0) {
                        console.log( 'ERRO: Nao foi escolhida uma operacao valida');
                    }
                    else 
                      resultado = numero1 / numero2;
                break;
                
                default: 
                console.log( 'ERRO: Não foi escolhida uma operação válida');
                erro = true;

            } 
        } 

        if (erro)
        return false;
    else 
        return resultado;
        
}