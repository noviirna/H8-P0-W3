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
    
    //count jumlah number existing per masing-masing number
    var max = null;
    for (var i = arrcounter.length-2; i >= 0; i--){
      if(arrcounter[i] > arrcounter[i+1]){
          max = arrcounter[i];
      }
    }
    
    //jika semua angka jumlah counternya sama, maka return -1
    if(max == null){
      return -1;
    }
    
    //cek di indeks mana counter yang nilainya terbesar
    var maxAt = 0;
    for(var i = arrcounter.length-1; i > 0; i--){
      if(arrcounter[i] > arrcounter[i-1]){
        maxAt = i;
      }
    }
  
    //return array existingNumber indeks ke[maxAt]
    return existingNumber[maxAt];
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1