function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  //initiate result variable as an empty array
  var result = [];

  //loop as much as n times, where n is length of the arrPenumpang
  for(var i = 0; i < arrPenumpang.length; i++){
    var startAt = 0; //variable to store the starting point (index number)
    var endAt = 0; //variable to store the destination point (index number)
    
    //do the loop to get the starting point and destination point
    for(var j = 0; j < rute.length; j++){
      if(arrPenumpang[i][1] == rute[j]){
        startAt = j;
      }
      if(arrPenumpang[i][2] == rute[j]){
        endAt = j;
      }
    } // end of the loop

    //declare the object and assign it with its keys and values
    var objPenumpang = {
      penumpang : arrPenumpang[i][0], // nama penumpang
      naikDari : arrPenumpang[i][1], // starting points
      tujuan : arrPenumpang[i][2], // destination
      bayar : (endAt-startAt) * 2000 // fare
    }
    result.push(objPenumpang); // push each object on the end of each looping
  } // end of the loop
  return result; // return the result
} // end of function

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]