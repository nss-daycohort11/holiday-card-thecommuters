$(document).ready(function() {


var Translate = (function(translateIt) {
  var Italian = 20;
  // {"merry":"Buon", "christmas":"Natale", "and":"e", "happy":"felice", "new":"anno", "year":"nuovo"};
  console.log(Italian);


  translateIt.getIt = function() {
  	// for (var prop in translations) {
  	// 	console.log(translations);
  	// }
  	return Italian;
  };

    // return translateIt;

	})(Translate);

});
