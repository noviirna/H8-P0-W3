function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    angka1 = [];
    angka2 = [];
    for (var i = 1; i <= angka; i++){
      if(angka % i == 0){
          angka1.push(i);
      }
    }
    
    for(var i = 0; i<angka1.length; i++){
      var temp = 0;
      temp = angka / angka1[i]
      angka2.push(temp);
    }
  
    var jumlah1dan2 = [];
    for(var i = 0; i<angka1.length;i++){
      var temp = 0;
      temp = angka1[i].toString().length + angka2[i].toString().length;
      jumlah1dan2.push(temp);
    }
  
    var j12length = jumlah1dan2.length-1;
    
    for(var batas = j12length; batas >= 0; batas--){  
      for(var now = 0; now <= batas; now++){
        var next = now + 1;
        var temp = ''; 
        if(jumlah1dan2[now] > jumlah1dan2[next]){ 
          temp = jumlah1dan2[next];
          jumlah1dan2[next] = jumlah1dan2[now];
          jumlah1dan2[now] = temp;
        }
      }
    }
  return jumlah1dan2[0];
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2