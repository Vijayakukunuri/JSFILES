// reduce,map,filter//
// filter//
let x=[154,56,3767,62,827,552,727];
console.log(x.filter(n=>n%2===0));
let result=x.filter(n=>n%2===0);
// map//
console.log(result.map(n=>n*2));
let res=result.map(n=>n*2);
// reduce//
console.log(res.reduce((a,b)=>a*b));

// practice//
// filter//
let num=[123,1234,12345,123456];
// finding odd//
console.log(num.filter(n=>n%2===1));
// reduce//
const phrase=["gud"," ","mrng"];
console.log(phrase.reduce((a,b)=>a+b));
// map//
const sen=['vijaya','surya'];
console.log(sen.map(str1=>str1+str1));
 

// filter to find vowels in a string//
let phr="finding vowels";
let vow=phr.split('');
let result2=vow.filter(m=> !'aeiouAEIOU'.includes(m));
console.log(result2.join(''));



  
   