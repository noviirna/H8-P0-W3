function ubahHuruf(kata) {
  // you can only write your code here!
var result = ''
for(var i = 0; i<=kata.length-1; i++){
    switch(kata[i]){
        case 'a' : result = result + 'b'
        break;
        case 'b' : result = result + 'c'
        break;
        case 'c' : result = result + 'd'
        break;
        case 'd' : result = result + 'e'
        break;
        case 'e' : result = result + 'f'
        break;
        case 'f' : result = result + 'g'
        break;
        case 'g' : result = result + 'h'
        break;
        case 'h' : result = result + 'i'
        break;
        case 'i' : result = result + 'j'
        break;
        case 'j' : result = result + 'k'
        break;
        case 'k' : result = result + 'l'
        break;
        case 'l' : result = result + 'm'
        break;
        case 'm' : result = result + 'n'
        break;
        case 'n' : result = result + 'o'
        break;
        case 'o' : result = result + 'p'
        break;
        case 'p' : result = result + 'q'
        break;
        case 'q' : result = result + 'r'
        break;
        case 'r' : result = result + 's'
        break;
        case 's' : result = result + 't'
        break;
        case 't' : result = result + 'u'
        break;
        case 'u' : result = result + 'v'
        break;
        case 'v' : result = result + 'w'
        break;
        case 'w' : result = result + 'x'
        break;
        case 'x' : result = result + 'y'
        break;
        case 'y' : result = result + 'z'
        break;
        default : result = result + 'a'
        break;
    }
}
return result;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu