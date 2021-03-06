function tukarBesarKecil(str) {
    var upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
  
    for (var i = 0; i < str.length; i++){
        var temp = str[i];
        for(var j = 0; j < upperCaseAlphabet.length; j++){
          if(str[i] === upperCaseAlphabet[j]){
            temp  = lowerCaseAlphabet[j];
          }
          if(str[i]  === lowerCaseAlphabet[j]){
            temp  = upperCaseAlphabet[j];
          }
        }
        result = result + temp;
      } // end of for loop
    return result;
  } // end of function
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"


/*
// second approach using array
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    arrKalimat = kalimat.split("");
    var panjangString = arrKalimat.length;
    var result = [];
    var isLowCase = kalimat.toLowerCase();
    var isUpCase = kalimat.toUpperCase();
    
    for(var i = 0; i < panjangString; i++){
        if(arrKalimat[i] == isLowCase[i]){
            result.push(isUpCase[i]);
        }
        else if(arrKalimat[i] == isUpCase[i]){
            result.push(isLowCase[i]);
        }
        else{
            result.push(arrKalimat[i]);
        }
    }
    result = result.join("");
    return result;
}
*/
