function changeVocals (str) {
  //code di sini
  if(str.length < 5){
    return ''
  }
  var vocalsUp = 'AIUEO'
  var vocalsLow = 'aiueo'
  var consUp = 'BJVFP'
  var consLow = 'bjvfp'
  var changed = ''
  for(var i = 0; i < str.length; i++){
    var temp = {}
    var isVocal = false
    for(var j = 0; j < vocalsUp.length; j++){
      if(str[i] == vocalsUp[j]){
        isVocal = true
        temp = consUp[j]
      }
      if(str[i] == vocalsLow[j]){
        isVocal = true
        temp = consLow[j]
      }
    }
    if(isVocal == false){
      temp = str[i]  
    }
    changed += temp
  }
  return changed
}

function reverseWord (str) {
  //code di sini
  var reversed = ''
  for(var i = str.length-1; i >=0; i--){
    reversed += str[i]
  }
  return reversed
}

function setLowerUpperCase (str) {
  //code di sini
  var ucAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lcAlphabet = 'abcdefghijklmnopqrstuvwxyz'
  var changed = ''
  for(var i = 0; i < str.length; i++){
    var temp = ''
    var needChange = false
    for(var j = 0; j < ucAlphabet.length; j++){
      if(str[i] == ucAlphabet[j]){
        temp = lcAlphabet[j]
        needChange = true
      }
      if(str[i] == lcAlphabet[j]){
        temp = ucAlphabet[j]
        needChange = true
      }
    }
    if(needChange ==  false){
      temp = str[i]
    }
    changed += temp
  }
  return changed
}

function removeSpaces (str) {
  //code di sini
  var removed = ''
  for(var i = 0; i < str.length; i++){
    if(str[i] != ' '){
      removed+= str[i]
    }
  }
  return removed
}

function passwordGenerator (name) {
  result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  if(result == ''){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  else{
    return result
  } 
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'