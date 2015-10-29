$(document).ready(function() {
console.log(Translate);
var userInputArray=[];
var displayMessage = [];
var whichLanguage 
  $("#go").click(function(e){
  	// Get input as a string
    var str = $("#userInput").val();
    userInputArray = str.split(" ");
    whichLanguage = $("input:checked").attr('id');
    // console.log(whichLanguage);
    if (whichLanguage==="italian"){
      Translate.translateToItalian(userInputArray);
    }
    else if (whichLanguage==='spanish'){
      Translate.translateToSpanish(userInputArray);
    }
    else if (whichLanguage==='french')
    {
      Translate.translateToFrench(userInputArray);
    }
    else {window.alert("Please select a language, fool.")
    }
    
  	
  
  	
  	});






  

  // All the JavaScript that depends on jQuery will be written here
});