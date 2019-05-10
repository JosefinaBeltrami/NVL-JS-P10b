var pares = [];
var impares = [];
var i = 0;
var random =[];

for (i =0 ; i < 50; i++) 
{
  var numero = Math.floor((Math.random() * 100) + 1);
  random[i] = numero;

  console.log(random.legth);

  if (numero %2 == 0) {
  // valor par
    pares.push(numero);
   }
 	else
  {
    // valor impar
    impares.push(numero);
	}

}
console.log(pares);
console.log(impares);
