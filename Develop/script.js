var buttons = document.querySelector("#button-addon2");
var Inputs = [Input9, Input10, Input11, Input12, Input1, Input2, Input3, Input4, Input5];
var Input9 = [];
var Input10 = [];
var Input11 = [];
var Input12 = [];
var Input1 = [];
var Input2 = [];
var Input3 = [];
var Input4 = [];
var Input5 = [];


// $("#currentDay").append("moment().format('LLLL')");



// $("#button-addon2").on("click", function() {
//     localStorage

// }

// A) Render 
retrieveItems();

function renderInputs() {

    for (var i = 0; i < Inputs.length; i++) {
        var input = Inputs[i];
    }
}


// B) Retrieve Items
function retrieveItems() {

    var storedItems = JSON.parse(localStorage.getItem("Inputs"))

    if (storedItems !== null) {
        Inputs = storedItems;
    }

    console.log(Inputs)

    renderInputs();
}


// C) Store Items
function storeItems() {
    localStorage.setItem("Inputs", JSON.stringify(Inputs));

    retrieveItems();
}


// D) When form is submitted
buttons.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(Inputs);
    var inputValues = Inputs.value;


    if (inputValues === "") {
        return;
    }
    Inputs.push({ userName: inputValues, score });
    Inputs.value = "";
    console.log(Inputs);
    storeItems();
});

