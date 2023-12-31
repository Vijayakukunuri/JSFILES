// capitalize first letter in a sentence//
function capitalizeFirstLetter(input) {
    const phrase = input.split(' '); // Split the input into words
    const capitalizedWords = [];

    for (let word of phrase) {
        if (word.length > 0) {
            const firstLetter = word[0].toUpperCase();
            const restOfWord = word.slice(1).toLowerCase();
            capitalizedWords.push(firstLetter + restOfWord);
        }
    }

    return capitalizedWords.join(' ');
}

const userInput = prompt("Enter a sentence:");
const capitalizedResult = capitalizeFirstLetter(userInput);

console.log("Converted input: " + capitalizedResult);