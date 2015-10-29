// $(document).ready(function() {


var Translate = (function(translate) {
    var Italian = {"merry":"Buon", "christmas":"Natale", "and":"e", "happy":"felice", "new":"anno", "year":"nuovo"};
  
    translate.translateToItalian = function(userInputArray) {
  var stringDisplay = "" ;
    for (i=0; i<userInputArray.length; i++){
  
      var currentInput = userInputArray[i];
      // displayMessage = french[currentInput];
      stringDisplay += Italian[currentInput] + " ";
      $("#container").html(stringDisplay);
  
      }
    return Italian[userInput];
    }

    translate.getVocab = function(){
      return Italian;
    }
  return translate;

  })(Translate);
