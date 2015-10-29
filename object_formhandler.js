$(document).ready(function() {

var userInputArray=[];
var displayMessage = [];
var whichLanguage 
  $("#go").click(function(e){
  	// Get input as a string
  	var str = $("#userInput").val();
    whichLanguage = $("input:checked").attr('id');
  	console.log(whichLanguage);
    if (whichLanguage==="italian"){
      moveToItalian();
    }
    else if (whichLanguage==='spanish'){
      moveToSpanish();
    }
    else if (whichLanguage==='french')
    {
      moveToFrench();
    }
    else {window.alert("Please select a language, fool.")
    }
    // Convert input to an array
  	console.log(str);
  	userInputArray = str.split(" ");
  	
  	// Loops through array

  // 	for (i=0; i<=userInputArray.length; i++){
		// // For each item on array, loops through object properties.
  // 		for (var hit in Translate){	
  // 			// Compares userinput array to Translate object
  // 			console.log(hit);
  // 		if (res[i] === Translate[hit])
  // 			// Concatenates displayMessage as array.
  // 			displayMessage += hit
  // 			displaymessage.toString();
  // 		}
  	
  	}






  
});
  // All the JavaScript that depends on jQuery will be written here
});