//using foor loop....
let occassion = 'Dussera holidays in october'
let lastVowel = [];

for (let x = 0; x < occassion.length; x++) {
    let k = occassion[x];

    if ('aeiou'.includes(k) && !lastVowel.includes(k)) {
        console.log(k);
        lastVowel.push(k);
    }
}
console.log("---------------------------------------------------------------------")
