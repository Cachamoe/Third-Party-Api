var buttons = document.querySelector("#button-addon2");

var Inputs = {


};

$("#9AM");
$("#10AM");
$("#11AM");
$("#12PM");
$("#1PM");
$("#2PM");
$("#3PM");
$("#4PM");
$("#5PM");

$("#currentDay").append(moment().format('LLLL'));
console.log(moment().hour());


$(".timeCheck").each(function() {
    let check = localStorage.get("id");
    if(check != null) {
        $(this).value(check);
    }
});

localStorage.set("9am", "");


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
buttons.on("click", function (event) {
    event.preventDefault();
    console.log(Inputs);
    var inputValues = Inputs.value;

    if (inputValues === "") {
        return;
    }

    Inputs.push({ inputValues });
    Inputs.value = "";
    console.log(Inputs);
    storeItems();
}); 