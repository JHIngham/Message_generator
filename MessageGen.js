const verb = ['pull', 'walk', 'sprint', 'kick'];
const noun = ['chair', 'house', 'zebra', 'plant'];
const adj = ['good', 'big', 'small', 'scary'];


const random = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};


const joke = `Your mother looks like a ${random(adj)} ${random(noun)}!`;

const inspQuote = `Dont't let the ${random(adj)} ${random(noun)} get you down. Just ${random(verb)} it.`;


console.log(inspQuote);
console.log(joke);