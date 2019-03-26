function sorting(arrNumber) {
  // code di sini
  arrLastIndex = arrNumber.length-1;
  for(var batas = arrLastIndex; batas >= 0; batas--){  
    for(var now = 0; now <= batas; now++){
      var next = now + 1;
      var temp = ''; //variabel temporary untuk nampung saat menukar angka
      if(arrNumber[now] < arrNumber[next]){ //kalau angka di indeks selanjutnya < angka di indeks sekarang
        //tukar posisi, yang paling kecil makin ke kanan
        temp = arrNumber[next];
        arrNumber[next] = arrNumber[now];
        arrNumber[now] = temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  var largest = arrNumber[0];
  if(largest == undefined){
    return '';
  }

  var total = 0;
  for(var i = 0; i < arrNumber.length; i++){
    if(arrNumber[i] == largest){
      total++;
    }
  }
  var result = "angka paling besar adalah " + largest + " dan jumlah kemunculan sebanyak " + total + " kali";
  return result;
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''