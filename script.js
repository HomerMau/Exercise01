/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = prompt(`Digite o primeiro numero para o calculo: `)
let numberTwo = prompt(`Digite o segundo número para o calculo: `)

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

sum = numberOne + numberTwo
sub = numberOne - numberTwo
multi = numberOne * numberTwo
div = numberOne / numberTwo
restDiv = numberOne % numberTwo

alert(
  `A Soma de ${numberOne} e ${numberTwo} é: ${sum}
A Subtração de ${numberOne} e ${numberTwo} é: ${sub}
A Multiplicação de ${numberOne} e ${numberTwo} é: ${multi}
A Divisão de ${numberOne} e ${numberTwo} é: ${div}
O resto da Divisão de ${numberOne} e ${numberTwo} é: " ${restDiv}`
)

if (restDiv == 0) {
  alert(`A soma dos números é par`)
} else {
  alert(`A soma dos números é ímpar`)
}

if(numberOne == numberTwo) {
  alert`
  Os números inseridos são iguais`
} else {
  alert`
  Os numeros inseridos são diferentes`
}
