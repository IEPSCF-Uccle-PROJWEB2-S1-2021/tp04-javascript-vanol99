// fonction min
function min (a,b)
{
  if(a<b)
    return a;

  if (b<a)
    return b;
  if ((a=b))
    return a;

}
let resultmin=min(10,5)
console.log("le minimun est" + resultmin)

//fonction max

function max (a,b)
{
  if(a<b)
    return b;

  if (b<a)
    return a;
  if ((a=b))
    return a;

}
let resultmax=max(10,5)
console.log("le maximun est" + resultmax)

//fontion reduce
let numbers=[1,2,3,4,5]
funtfn (a,b)
return Math.floor(Math.random())*(a-b+1)+b;
{
let funtfn = fn();
function reduce(fn,numbers){
  let resultatprecedent=number[0];
  for (let i=1; i<numbers.lenght;i++){
    cont = numbers[i];
  let resultat=fn(resultatprecedent,cont);
  resultatprecedent=resultat;
} 
return resultatprecedent
