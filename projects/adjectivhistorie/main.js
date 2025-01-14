


// model // variables

const display = document.getElementById("display");

let word1 = "_____";
let word2 = "_____";
let word3 = "_____";
let word4 = "_____";
let word5 = "_____";
let word6 = "_____";

// view // what you see
dispFunc();
function dispFunc() {
display.innerHTML = `
  <div>Det var en gang, en ${word1} ${word2} som gikk til ${word3} og der var det en ${word4}, dyret var ${word5} i fargen og veldig ${word6}!</div>
`;
}

// controller // apply changes

function updateWords(choice) {
    if (choice == 0) {
        word1 = "liten";
        dispFunc();
    }
    else if (choice == 1) {
        word1 = "stor";
        dispFunc();
    }
    else if (choice == 2) {
        word2 = "frøken";
        dispFunc();
    }
    else if (choice == 3) {
        word2 = "hærre";
        dispFunc();
    }
    else if (choice == 4) {
        word3 = "butikken";
        dispFunc();
    }
    else if (choice == 5) {
        word3 = "byen";
        dispFunc();
    }
    else if (choice == 6) {
        word4 = "katt";
        dispFunc();
    }
    else if (choice == 7) {
        word4 = "hund";
        dispFunc();
    }
    else if (choice ==  8) {
        word5 = "blå";
        dispFunc();
    }
    else if (choice == 9) {
        word5 = "grønn";
        dispFunc();
    }
    else if (choice == 10) {
        word6 = "søt";
        dispFunc();
    }
    else if (choice == 11) {
        word6 = "skummel";
        dispFunc();
    }
}
