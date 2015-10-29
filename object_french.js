$(document).ready(function() {
  function moveToFrench() {
console.log("moveToFrench fired")
  }

  var Translate = (function(translate) {
  var french = {"merry":"joyeux", "christmas":"noel", "and":"et", "happy":"bonne", "new":"annee", "year":"!"}
;
  
    Translate.translateToFrench = function() {
    for (i=0; i<=userInputArray.length; i++){
    // For each item on array, loops through object properties.
      for (var x in Translate){ 
        // Compares userinput array to Translate object
        console.log(x);
      if (userInputArray[i] === Translate[x])
        // Concatenates displayMessage as array.
        displayMessage += hit
        displaymessage.toString();
        console.log(displaymessage)
      }
    return french[userInput];
    
    $("go").click(funtion(e)){}
    } 
      
  
    Translate.getVocab = function(){
      return French;
  }
  }

  // userInput.getAge = function() {
  //   return age;
  // };

  // userInput.getDwarves = function() {
  //   return dwarfCount;
  // };

  // userInput.SetDwarves = function(newCount) {
  //   dwarfCount = newCount;
  // };

  // userInput.getInner = function() {
  //   return innerfive;
  // };

  // return userInput;

 })(Translate);

// console.log(solarSystem);
// console.log(solarSystem.setAge(9));
  // All the JavaScript that depends on jQuery will be written here


});