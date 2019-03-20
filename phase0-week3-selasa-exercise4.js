function cariModus(arr) {
    //cari angka apa aja yang ada dalam array & eliminasi yang redundan
    var existingNumber = [];
    for(var i = 0; i < arr.length; i++){
      if(existingNumber.indexOf(arr[i]) == -1){
        existingNumber.push(arr[i])
      }
    }
  
    //jika cuma ada 1 jenis angka maka return -1
    if(existingNumber.length == 1){
      return -1;
    }
    
    //periksa jumlah angka yang ada dalam array
    var arrcounter = [];
    for (var i = 0; i <= existingNumber.length-1; i++){
      var counter = 0;
      for(var j = 0; j <= arr.length-1; j++){
        if(existingNumber[i] == arr[j]){
          counter = counter+1;
        }
      }
      arrcounter.push(counter);
    }
    
    //cek di indeks mana counter yang nilainya terbesar
    var modus = null;
    for(var i = arrcounter.length-1; i >= 0; i--){
      var maxCounter;
      if(modus == null){
        if(arrcounter[i] > arrcounter[i-1]){
          modus = existingNumber[i];
          maxCounter = arrcounter[i];
        }
        if(arrcounter[i] < arrcounter[i-1]){
          modus = existingNumber[i];
          maxCounter = arrcounter[i-1];
        }
      }
      else{
        if(arrcounter[i] >= maxCounter){
          modus = existingNumber[i];
          maxCounter = arrcounter[i];
        }
      }
    }
    //jika semua angka jumlah counternya sama, maka return -1
    if(modus == null){
      return -1;
    }else{
      return modus;
    }
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  // 10 4 5 2
  // 1 2 1 1
  // 4

  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  // 5 10 6
  // 2 2 1
  // 5

  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  // 10 3 1 2 5
  // 1 1 1 1 1
  // -1

  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  // 1 2 3 4 5
  // 1 1 2 1 1
  // 3

  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  // 7
  //-1

  console.log(cariModus([1,3,3,2,1,4,3])); // 3
  // 1 3 2 4
  // 2 3 1 1
  // 3