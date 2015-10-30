$(document).ready(function() {
var userInputArray=[];
var displayMessage = [];
var lexi 
  $("#go").click(function(e){
    var str = $("#userInput").val();
    userInputArray = str.split(" ");
    lexi = $("input:checked").attr('id');
    lexi==="italian"?
      Translate.translateToItalian(userInputArray):
    lexi==='spanish'?
      Translate.translateToSpanish(userInputArray):
    lexi==='french'?
      Translate.translateToFrench(userInputArray):
    window.alert("Please select a language, fool.");
  	});
});