$(document).ready(function() {


  			var displayMessage = [];
 
  $("#go").click(function(e){
  	// Get input as a string
  	var str = $("#userInput").val()
  	// Convert input to an array
  	
  	var res = str.split(" ");
  	console.log(res);
  	// Loops through array

  	for (i=0; i=<res.length; i++){
		// For each item on array, loops through object properties.
  		for (var hit in Translate){	
  			// Compares userinput array to Translate object
  			console.log(hit);
  		if (res[i] === Translate[hit])
  			// Concatenates displayMessage as array.
  			displayMessage += hit
  			displaymessage.toString();
  		}
  	
  	}






  }

  // All the JavaScript that depends on jQuery will be written here
});