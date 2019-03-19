function checkAB(num) {
    // you can only write your code here!
    var stat = false;
    var arr = num.split("");
    var counter = 0;
    var selisihAB = [];
  
    var arrA = [];
    var arrB = [];
  
    //cek a dan b ada di indeks ke berapa
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == 'a'){
        arrA.push(i);
      }
      if(arr[i] == 'b'){
        arrB.push(i);
      }
    }
  
    for(var i = 0;  i < arrA.length; i++){
      for(var j = 0; j < arrB.length; j++){
        var temp = arrA[i] - arrB[j];
        temp = Math.abs(temp);
        selisihAB.push(temp);
      }
    }
  
    for(var i = 0; i < selisihAB.length; i++){
      if(selisihAB[i] == 4){
        counter = counter + 1;
      }
    }
  
    if(counter >= 1){
      return true;
    }
    else{
      return stat;
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false