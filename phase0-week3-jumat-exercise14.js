function changeVocals (str) {
    //code di sini
    if(str.length < 5){
      return null
    }
    var result = ''
    var vocalUpperCase = "AEIOU"
    var switchVocalUC = "BFJPV"
    var vocalLowerCase = "aeiou"
    var switchVocalLC = "bfjpv"
  
    for (var i = 0; i < str.length; i++){
      var temp = ''
      var cek = str[i];
      var isVocal = false;
      for(var j = 0; j < vocalUpperCase.length; j++){
        if(cek === vocalUpperCase[j]){
          temp  = switchVocalUC[j];
          isVocal = true;
        }
        if(cek  === vocalLowerCase[j]){
          temp  = switchVocalLC[j];
          isVocal = true
        }
      }
      if(isVocal == false){
        temp = str[i];
      }
      result = result + temp;
    } // end of for loop
    return result;
  } // end of function
  
  function reverseWord (str) {
    //code di sini
    if(str == null){
      return null
    }
    var reverse = '';
    for(var i = str.length-1; i >= 0; i--){
      reverse = reverse + str[i];
    }
    return reverse;
  } // end of function
  
  
  function setLowerUpperCase (str) {
    //code di sini
    if(str == null){
      return null
    }
    var upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
  
    for(var i = 0; i < str.length; i++){
      var isAlphabet = false;
      
      for(var j = 0; j < upperCaseAlphabet.length; j++){
        if(str[i] == upperCaseAlphabet[j] || str[i] == lowerCaseAlphabet[j]){
          isAlphabet = true;
        }
      } // end of for loop
        
        if(isAlphabet == false){
        result = result + str[i];
      }
        else{
        for(var j = 0; j < upperCaseAlphabet.length; j++){
          if(str[i] == upperCaseAlphabet[j]){
            result = result + lowerCaseAlphabet[j];
          }
          if(str[i] == lowerCaseAlphabet[j]){
            result = result + upperCaseAlphabet[j]; 
          }
        } // end of for loop
      } // end of conditional if else 
    } // end of for loop
    return result;
  } // end of function
  
  function removeSpaces (str) {
    //code di sini
    if(str == null){
      return null
    }
    var result = ''
    for(var i = 0; i < str.length; i++){
      if(str[i] === ' '){
        result = result + '';
      }
      else{
        result = result + str[i];
      }
    }
    return result;
  } // end of function
  
  function passwordGenerator (name) {
    //code di sini
    var result = changeVocals(name);
    result = reverseWord(result);
    result = setLowerUpperCase(result);
    result = removeSpaces(result);
    if(result == null){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    else{
      return result
    }
  } // end of function
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'