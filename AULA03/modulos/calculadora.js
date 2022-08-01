/*********************************************************************************************************** 
 * Objetivo: Arquivo que contém todas as funcoes para calculos matematicos
 * Autor: Melissa Victória
 * Data de criação: 01/08/2022
 * Versão: 1.0 
****************************************************************************************************/

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


   // As funçoes que serao importadas em outros projetos, precisam obrigatoriamente serem incluidas no module.exports>
  // As funcoes que nao forem incluidas no module.exports, ela iria funcionar apenas localmente neste arquivo.

   module.exports = {
    calcular
   }