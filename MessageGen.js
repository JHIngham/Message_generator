const verb = ['pull', 'walk', 'sprint', 'kick'];
const noun = ['chair', 'house', 'zebra', 'plant'];
const adj = ['good', 'big', 'small', 'scary'];


const randomVerb = (verb) => {
    let verbIndex = Math.floor(Math.random() * verb.length);
    return verb[verbIndex];
};

const randomNoun = (noun) => {
    let nounIndex = Math.floor(Math.random() * noun.length);
    return noun[nounIndex];
};

const randomAdj = (adj) => {
    let adjIndex = Math.floor(Math.random() * adj.length);
    return adj[adjIndex];
};

const joke = `Your mother looks like a ${randomAdj(adj)} ${randomNoun(noun)}!`;

const inspQuote = `Dont't let the ${randomAdj(adj)} ${randomNoun(noun)} get you down. Just ${randomVerb(verb)} it.`;


console.log(inspQuote);
console.log(joke);