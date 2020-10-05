$(document).ready(function() {

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

// var currentHour= moment().hours();
// console.log("currentHour", currentHour) 

$("#time").addClass("hour");
});