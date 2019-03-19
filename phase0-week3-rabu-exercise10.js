function changeMe(arr) {
  // you can only write your code here!



  //put it inside
  for(var i =0; i < arr.length; i++){
    var fullName = '';
    var fN = '';
    var lN = '';
    var g = '';
    var a = '';
    for(var j = 0; j< arr[i].length; j++){
      switch(j){
        case 0 :
          fullName = fullName + arr[i][j] + ' ';
          fN = arr[i][j];
          break;
        case 1 :
          fullName = fullName + arr[i][j];
          lN = arr[i][j];
          break;
        case 2 :
          g = arr[i][j];
          break;
        case 3 :
          a = arr[i][j];
          break;
        default :
        break;
      }//end of conditional switch-case

      if(a == ''){
        a = 'Invalid birth year'
      }//end of conditional if

    }//end of loop array[][]
    var myObj =
    {
      firstName : fN,
      lastName : lN,
      gender : g,
      age : a,
    }
    //cetak Full Name & angka
    console.log(i+1 +'. ' + fullName + ':');
    console.log(myObj);
    console.log('\n');
  } //end of loop array[]

}// end of function

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""