var Translate = (function(translate) {
    var french = {"merry":"Joyeux", "christmas":"noel", "and":"et", "happy":"bonne", "new":"nouvelle", "year":"an"};
    translate.translateToFrench = function(userInputArray) {
      var stringDisplay = "" ;
      for (i=0; i<userInputArray.length; i++){
        var currentInput = userInputArray[i];
        stringDisplay += french[currentInput] + " ";
        $("#container").html(stringDisplay);
      }
    return french[userInput];
    }
    translate.getVocab = function(){
    return french
    }
return translate
})
(Translate);



