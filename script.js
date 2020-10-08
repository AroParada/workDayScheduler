$(document).ready(function() {

    let time = moment().hours();
    let hour = $(".time-block");
   
    
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var currentHour= moment().hours();
console.log("currentHour", currentHour) 

$(".col").addClass("hour");

$(".col3").addClass("saveBtn sBtni:hover ")

hour.each(function(){
    let currentId = $(this).attr("id")
    currentId = parseInt(currentId);
    if(currentId == time){
        $(this).addClass("present")
    }
    else if(currentId > time){
        $(this).addClass("future");
    }
    else{
        $(this).addClass("past");
    }
}) 


//Grabs the time and input and stores them in local storage
$('.save').on('click', function (){
    // console.log( $( this ).siblings(".task") )
    let time = $(this).parent().attr("id");
    let userInput = $(this).siblings(".task").val();
    

    localStorage.setItem(time, userInput);


});//text that was saved
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));

});

