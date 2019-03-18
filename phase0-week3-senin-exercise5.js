function ubahHuruf(kata) {
  // you can only write your code here!
var alfabet = 'abcdefghijklmnopqrstuvwxyz'
var result = ''
for(var i = 0; i<=kata.length-1; i++){
    for(var j = 0; j <= alfabet.length-1; j++){
        if(alfabet[j] == kata[i] && kata[i] != 'z'){
            result = result + alfabet[j+1]
        }
        if(alfabet[j] == kata[i] && kata[i] == 'z'){
            result = result + alfabet[0]
        }
    }
}
return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascriptz')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu