// *** YOUR ANSWER BELOW ***



function negate(s){
    let negated = "un" + s;
    return negated;
}
console.log(negate("cold"));

function intensify(s){
    let intensified = "plus" + s;
    return intensified;
}
console.log(intensify("cold"));

function reinforce(s){
    let reinforced = "double" + s;
    return reinforced;
}




console.log(reinforce(intensify("cold")));
console.log(reinforce(intensify(negate("good"))));
