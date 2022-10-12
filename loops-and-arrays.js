// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];
for (let i = 0; i <=names.length-1; i++){
    // i===i werkt ?
    // names[i] === names[i]
    // names[i] && names[i]
    // wat is beter === of && ?
    if(i === i){
        //Stel ik wil dat bij piet en joop doen kan ik dan ook meerdere index nummers achter elkaar zetten en kan dit eindeloos?
       names[i] = names[i]+"je"
    }
}
console.log(names)
    //ik heb nu geen ELSE ...kan dit wel???

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]




// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];
for ( let i=0;i<=numbers.length-1;i++)
    //Het verschil tussen [i] en numbers[i] is het indexnummer en het indexnummer+de waarde !!
    // % is modulus ... met (% 2 === 0) kun je kijken of je er een restwaarde is als er gedeeld wordt door 2 (dus even of oneven)
    //Waarom krijg ik NaN ?
    if(numbers[i] % 2 === 0) {
        numbers[i]=numbers[i]* 2
    }
    else  {
       numbers[i]= numbers[i]* 3
}
console.log(numbers)
// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 4, 8, 15, 87, 76 ];




// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [x] is [y]"
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];
for (let i=0; i<=squares.length-1; i++){
    const answer = squares[i]*squares[i]*squares[i];
    squares[i] = "Het volume van "+squares[i]+" is "+answer;
}
console.log(squares)



// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(squares) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(squares) geeft: [
//   'Het volume van 30 is 27000',
//   'Het volume van 2 is 8',
//   'Het volume van 8 is 512',
//   'Het volume van 24 is 13824',
//   'Het volume van 11 is 1331'
// ]
