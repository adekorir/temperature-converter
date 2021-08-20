
function convertCelToFahr(degCel) {
    return (degCel * 9/5) + 32;
}

function buttonClicked() {
    // get the input value
    var tempCelcius = document.getElementById("tempCelcius");
    var inputValue = tempCelcius.value;
    
    var parsedNumber = parseInt( inputValue );
    
    var cel = 0;
    if (isNaN(parsedNumber)) { 
        cel = 0;
    } else {
        cel = inputValue;
    }

    // convert value
    var fahr = convertCelToFahr(cel);

    // display the values
    var degCel = document.getElementById("degCel");
    var degFahr = document.getElementById("degFahr");

    degCel.textContent = cel;
    degFahr.textContent = fahr;

    tempCelcius.value = 0;
}

// attach the click event to the buttonClicked() function
var button = document.getElementById("btnConvert");
button.addEventListener('click', buttonClicked);