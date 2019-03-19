function deepSum (arr) {
  // Code disini

  if(arr.length < 1){
    return 'no number';
  }
  var sum = 0;
  var a = arr.length-1;
  for(var i = 0; i <= a; i++){
    var b = arr[i].length-1;
    for(var j = 0; j <= b; j++){
      var c = arr[i][j].length-1;
      for(var k = 0; k <=c; k++){
        sum = sum + arr[i][j][k];
      }
    }
  }
  return sum;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number