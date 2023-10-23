//print the only vowels in the strring without duplicates
let sentence = "with out duplicates";
let i= 0;
let vowelsPrinted = [];

while (i < sentence.length) {
    let k = sentence[i];

    if ('aeiou'.includes(k) && !vowelsPrinted.includes(k)) {
        console.log(k);
        vowelsPrinted.push(k);
    }

    i++;
}
console.log("--------------------------------------------------")
