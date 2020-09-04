// Append current date and time (top of page)
$("#currentDay").append(moment().format('LLLL'));


// Store and retrieve data inputs for each hour
var saveBtn = document.getElementById("#saveBtn");
$(document).ready(function () {
    $("*[data-store]").each(function () {
        $(this).val(localStorage.getItem("item" + $(this).attr("data-store")));
    });
    $("#saveBtn1").on("click", function () {
        localStorage.setItem("item" + $("#textArea1").attr("data-store"), textArea1.value);
    });
    $("#saveBtn2").on("click", function () {
        localStorage.setItem("item" + $("#textArea2").attr("data-store"), textArea2.value);
    });
    $("#saveBtn3").on("click", function () {
        localStorage.setItem("item" + $("#textArea3").attr("data-store"), textArea3.value);
    });
    $("#saveBtn4").on("click", function () {
        localStorage.setItem("item" + $("#textArea4").attr("data-store"), textArea4.value);
    });
    $("#saveBtn5").on("click", function () {
        localStorage.setItem("item" + $("#textArea5").attr("data-store"), textArea5.value);
    });
    $("#saveBtn6").on("click", function () {
        localStorage.setItem("item" + $("#textArea6").attr("data-store"), textArea6.value);
    });
    $("#saveBtn7").on("click", function () {
        localStorage.setItem("item" + $("#textArea7").attr("data-store"), textArea7.value);
    });
    $("#saveBtn8").on("click", function () {
        localStorage.setItem("item" + $("#textArea8").attr("data-store"), textArea8.value);
    });
    $("#saveBtn9").on("click", function () {
        localStorage.setItem("item" + $("#textArea9").attr("data-store"), textArea9.value);
    });
})


// Display hours (9-5) 
let currentHour = moment().hours();
var nine = moment().hours(9).format("hA");
$("#time-9").text(nine);
var ten = moment().hours(10).format("hA");
$("#time-10").text(ten);
var eleven = moment().hours(11).format("hA");
$("#time-11").text(eleven);
var twelve = moment().hours(12).format("hA");
$("#time-12").text(twelve);
var thirteen = moment().hours(13).format("hA");
$("#time-13").text(thirteen);
var fourteen = moment().hours(14).format("hA");
$("#time-14").text(fourteen);
var fifteen = moment().hours(15).format("hA");
$("#time-15").text(fifteen);
var sixteen = moment().hours(16).format("hA");
$("#time-16").text(sixteen);
var seventeen = moment().hours(17).format("hA");
$("#time-17").text(seventeen);

changetimeColor();

// Function for changing background colors as time passes
function changetimeColor() {
    $(".hour").each(function () {
        var hourChoices = parseInt($(this).attr("id").split("-")[1]);
        if (hourChoices < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present", "future");
        } else if (hourChoices === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past", "future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past", "present");
        }
    })
}