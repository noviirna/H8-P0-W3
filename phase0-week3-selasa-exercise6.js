function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  pembagi = [];
  for (var i = 1; i <= angka; i++){
    if(angka % i == 0){
        pembagi.push(i);
    }
  }
  var arrDigitSum = [];
  for (var i = 0; i < pembagi.length; i++){
    for(var j = pembagi.length-1; j >=0; j--){
        var digitSum = pembagi[i].toString().length + pembagi[j].toString().length;
        arrDigitSum.push(digitSum);
        i++;    
    }
  }
  var smallestAt = Math.floor(arrDigitSum.length / 2)
  var result = arrDigitSum[smallestAt]
  return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2

  // // appproach untuk ambil result nya bisa juga seperti ini, pakai median
  // var median = ( arrDigitSum.length - 1 ) / 2
  // var result = ( arrDigitSum[Math.floor(median)] + arrDigitSum[Math.ceil(median)] ) / 2