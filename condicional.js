function media(){
var val1 = document.getElementById('valor1').value;
var val2 = document.getElementById('valor2').value;
var result = (parseInt(val1) + parseInt(val2))/2;


if(result >= 6 )

alert('Aprovado')
else
alert('Reprovado')
}

function comparar(){
    var val1 = document.getElementById("valor1").value
    var val2 = document.getElementById("valor2").value

    if(val1==val2)
    alert('Os valores são iguais');
    else if(val1 > val2)
    alert('O valor 1 é maior que o valor 2')
    else 
    alert('O valor 2 é maior que o valor 1')
}  