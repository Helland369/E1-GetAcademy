

const bodyElement = document.querySelector("body").classList; // Get first element with the tag "body"

let currentColor;   // To store color in a variable

function remove() {   // Remove applyed color;
    bodyElement.remove(currentColor);
}
// Color selector
function changeColor(color) {
    if(color == 1) {
        currentColor = 'blueStyle'; 
        bodyElement.add(currentColor);
    }
    else if(color == 2) {
        currentColor = 'greenStyle';
        bodyElement.add(currentColor);
    }
    else if(color == 3) {
        currentColor = 'yellowStyle';
        bodyElement.add(currentColor);
    }
    else if(color == 4) {
        currentColor = 'purpleStyle';
        bodyElement.add(currentColor);
    }
}
