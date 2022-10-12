//array blokhaken,[index] vanaf 0, array heeft een property.length
//aanspreken naamVanArray gevolgd door [],
//syntax wijzigen array[]=waarde die je wil toekennen
// const text = ["Hoera","Hoera","Hoera"];

//object curly brackets, propertys met key:value, (integer is een nummer bijv temp:12, distcriprion is een string,)
//aanspreken naamVanObject, gevolgd door een punt, en dan key
//syntax wijzigen object.key= nieuwe waarde
// const object = {temp: 12, description:"zonnig"};

//i staat voor index, let betekent dat we de waarde kunnen overschrijven,
//de loop begint bij 0 (dat is het 1e getal), dus bij <3 logt hij 0 1 2
//Als je met een array werkt vul je bij < plaats je property.length van array
// for (let i = 0; i < text.length; i++){
//     console.log(text[i]);
// }


// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================

//voorbeeld van array en object
//Array.
const hurray= ["Hoera","Hoera","Hoera"];
for (let i = 0; i < hurray.length; i++){
    console.log(hurray[i]);
}
// Object
const word = {
    first:"Hoera",
    second:"Hoera",
    third:"Hoera"
};
for (let i = 0; i <3; i++){
    console.log(word.first);
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================
const assignment = ["loop....","loop....","loop....","loop....","klaar!"];
for (let i = 0; i < assignment.length; i++){
    console.log(assignment[i])
}


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over. Google daarom eens naar 'mdn webdocs remainder operator'.
// ==========================================
// The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
const number= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (let i = 0; i < number.length; i++){
    if (i % 2){
        console.log(number[i]+" is even")
       }
    else{
        console.log(number[i]+" is oneven")
    }
}


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
for (let i = 0; i <= 9; i++) {
    if (i<3){
        console.log(i)
    }
    else if (i<6){
        console.log("> "+i)
    }
    else
        console.log(">> "+i)
}
