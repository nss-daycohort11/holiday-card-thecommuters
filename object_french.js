$(document).ready(function() {
  var Translate = (function(translate) {
  var french = {"merry":"joyeux", "christmas":"noel", "and":"et", "happy":"bonne", "new":"annee", "year":"!"}
;
  
  translate.translateToFrench = function(userInput) {
    
    } 
      
  
userInput.getVocab = function(){
  return french[userInput];
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

  return userInput;

})(Translate);

// console.log(solarSystem);
// console.log(solarSystem.setAge(9));
  // All the JavaScript that depends on jQuery will be written here


});