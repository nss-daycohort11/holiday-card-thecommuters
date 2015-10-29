var Translate = (function(translate) {
    var spanish = {"merry":"Feliz", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"ano", "year":"nuevo"};
  
    translate.translateToSpanish = function(userInputArray) {
  
      var stringDisplay = "" ;
    for (i=0; i<userInputArray.length; i++){
  
      var currentInput = userInputArray[i];
      // displayMessage = french[currentInput];
      stringDisplay += spanish[currentInput] + " ";
      $("#container").html(stringDisplay);
  
      }
    return spanish[userInput];
    }
  
    


    translate.getVocab = function(){
      return spanish;
    }
  return translate;

  })(Translate);