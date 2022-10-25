let a = 10;
let b = 20;
let aux = 0;
const distribuidor = 0.45;
const impostos = 0.28;
const comissao3 = 0.03;
const comissao5 = 0.05;
let i = 0;
let msg = "";
let cont = 0;

function ex01(){
    aux = a;
    a = b;
    b = aux;
    return "O valor da variável A era 10 agora é: " + a + "\nO valor da variável B era 20 agora é: " + b;
}

function ex02(){
    num = prompt("Informe um número: ");
    return parseInt(num) - 1;
}

function ex03(){
    com = prompt("Informe o comprimento do retângulo: ");
    alt = prompt("Informe a altura do retângulo: ");

    result = parseFloat(com) * parseFloat(alt);

    return result;
}

function ex04(){
    dia = prompt("Informe o dia de nascimento: ");
    mes = prompt("Informe o mês de nascimento: ");
    ano = prompt("Informe o ano de nascimento: ");

    ano = parseInt(ano) * 365;
    mes = parseInt(mes) * 30;

    diasVida = ano + mes + dia;
    return diasVida;
}

function ex05(){
    totalEleitores = prompt("Informe o total de eleitores: ");
    brancos = prompt("Informe o número de votos brancos: ");
    nulos = prompt("Informe o número de votos nulos: ");
    validos = prompt("Informe o número de votos válidos: ");

    brancos = (brancos / totalEleitores) * 100;
    nulos = (nulos / totalEleitores) * 100;
    validos = (validos / totalEleitores) * 100;

    return "Brancos: " + brancos +  "%\n" + "Nulos" + nulos + "%\n" + "Válidos" + validos + "%\n";
}

function ex06(){
    salario = prompt("Informe o seu salário atual: ");
    percentual = prompt("Informe o percentual de ajuste (%): ");
    percentual = parseFloat(salario) * (parseFloat(percentual) / 100);
    novoSalario = parseFloat(salario) + percentual;

    return "O novo salário com o ajuste é: " + novoSalario;
}

function ex07(){
    custoFabrica = parseFloat(prompt("Informe o custo de fábrica do carro: "));
    dist = custoFabrica * distribuidor;
    impo = custoFabrica * impostos;
    total = custoFabrica + dist + impo;

    return total;
}

function ex08(){
    nota1 = parseFloat(prompt("Informe o valor da 1° nota: "));
    nota2 = parseFloat(prompt("Informe o valor da 2° nota: "));
    nota3 = parseFloat(prompt("Informe o valor da 3° nota: "));

    media = (nota1 + nota2 + nota3) / 3;

    return media;
}

function ex09(){
    macas = parseFloat(prompt("Informe a quantidade de maçãs: "));

    if(macas < 12){
        total = macas * 1.3;
        return total;
    } else {
        return macas;
    }
}

function ex10(){
    salario = parseFloat(prompt("Informe o salário do vendedor R$: "));
    vendas = parseFloat(prompt("Informe o valor das vendas R$: "));

    if (vendas <= 1500) {
        total = vendas + (vendas * comissao3);
        return total;
    } else {
        total = vendas + (vendas * comissao3) + (vendas * comissao5);
        return total
    }
}

function ex11(){
    conta = parseInt(prompt("Informe o número da conta R$: "));
    saldo = parseFloat(prompt("Informe o saldo na conta R$: "));
    debito = parseFloat(prompt("Informe o saldo R$: "));
    credito = parseFloat(prompt("Informe o valor do crédito disponível R$: "));

    saldoAtual = saldo - debito + credito

    if (saldoAtual > 0){
        return "Saldo Positivo"
    } else {
        return "Saldo Negativo"
    }
}

/*function ex12(){
    var num = parseInt(prompt("Informe um número entre 1 e 10: "));
    let msg = "";

    for (i = 0; i<=10; i++){
        msg += num + " * " + i + " = " + (parseFloat(num) * parseFloat(i)) + "\n";
    }
    if (num < 1 || num > 10){
        return "Valor Inváldo para a tabuada";
    }
}*/

function ex12(){
    var num1 = parseInt(prompt("Informe um número entre 1 e 10: "));
    console.log("Tabuado do" + num1 + ":\n");
        for (i = 0; i<=10; i++ ){
        msg += num1 + "X" + i + "=" + (num1) * (i) +"\n"; 
    }
        console.log(msg + "\n");
}



function ex13(){
    n = parseInt(prompt("Informe um número: "));

    for(var i=1; i<=n; i++){
        console.log(i) + "\n";
    }
}

function ex14(){
    for (i = 0; i <= 10; i++){
        num = parseInt(prompt("Informe um valor: "));
        if (num < 0){
            cont = cont + 1;
        }
    }
    return cont;
}

function ex15(){
    for (i = 0; i <= 10; i++){
        num = parseInt(prompt("Informe um valor: "));
        if (num < 40) {
            cont = cont + num;
        }
    }
    return cont;
}

function ex16(){
    for (i = 15; i <= 100; i++){
        cont += i;
    }
    return cont;
}

function ex18(){
    num = parseInt(prompt("Informe um número: "));
    var vetor = [];

    for (i = 0; i <= num; i++){
        vetor = prompt("Informe o " + parseInt(i)+1 + "° número: ");
        cont += vetor[i];
    }
    maior = [];
    maior = vetor.sort;
    parseFloat(cont) = parseFloat(cont) / vetor.length;

    msg = "O maior número é: " + maior + "A média é: " + cont;
}

function ex19(){

}

/*console.log("Variáveis trocadas: " + ex01());
console.log("O número antecessor é: " + ex02());
console.log("A área do retângulo é: " + ex03());
console.log("A sua idade em dias é: " + ex04());
console.log(ex05());
console.log(ex06());
console.log("O custo final ao consumidor é: " + ex07());
console.log("A média é: " + ex08());
console.log("O preço de maçãs é: " + ex09());
console.log("O salário ajustado é: " + ex10());
console.log("O status do saldo é: " + ex11());
console.log(ex12());
console.log(ex13());
console.log("A quantidade de números negativos é: " + ex14);
console.log("A soma de valores menores que 40: " + ex15());
console.log("A soma dos valores entre 15 e 100: " + ex16());
console.log(ex18())*/

