var Translate = (function(translate) {
    var french = {"merry":"noyeux", "christmas":"noel", "and":"et", "happy":"bonne", "new":"nouvelle", "year":"an"};
  
    translate.translateToFrench = function(userInputArray) {
  
      var stringDisplay = "" ;
    for (i=0; i<userInputArray.length; i++){
  
      var currentInput = userInputArray[i];
      // displayMessage = french[currentInput];
      stringDisplay += french[currentInput] + " ";
      $("#container").html(stringDisplay);
  
      }
    return french[userInput];
    }
  
    


    translate.getVocab = function(){
      return French;
    }
  return translate;

  }


  


 )
(Translate);

// console.log(solarSystem);
// console.log(solarSystem.setAge(9));
  // All the JavaScript that depends on jQuery will be written here


