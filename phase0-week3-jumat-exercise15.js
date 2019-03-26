//approach 1
function makanTerusRekursif(waktu) {
  // you can only write your code here!
  var count = 0;
  if(waktu == 0 ){
    return count;
  }
  else if(waktu < 15){
    count++
    return count
  }
  else{
    waktu = waktu - 15
    count++
    return count + makanTerusRekursif(waktu)
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
console.log(makanTerusRekursif(35)); // 3
console.log(makanTerusRekursif(15)); // 1


//approach 2
function makanTerusRekursif(waktu) {
  // you can only write your code here!
  if(waktu == 0){
    return 0
  }
  if(waktu <= 15){
    return 1
  }
  if(waktu > 15){
    return 1 + makanTerusRekursif(waktu-15)
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
