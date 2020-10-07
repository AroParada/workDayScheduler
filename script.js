

$(document).ready(function() {

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var currentHour= moment().hours();
console.log("currentHour", currentHour) 


$(".col").addClass("hour");

$(".col3").addClass("saveBtn sBtni:hover ")

$(".col-10 ").addClass("past")

$('.save').on('click', function (){
    console.log( $( this ).siblings(".task") )
});

});

