//not recursive, need to add more for loop inside the loop if want to add more dimension in array
function deepSum (arr) {
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
  if(sum == 0){
    return 'no number';
  }
  else{
    return sum;
  }
}

//recursive
function deepSumRecursive(arr) {
    var sum = 0;
    //forEach() method calls a provided function once for each element in an array, in order
    arr.forEach(
      function(arrElement) {
        // checking array element is an array
        if (typeof arrElement == 'object')
          // if array then getting sum it's element (recursion)
          {sum += deepSumRecursive(arrElement);}
        else
          {// else adding the value with sum
          sum += arrElement}
      }
    );
    // returning the result
    if(sum == 0){
        return 'no number';
    }
    else{
        return sum;
    }
  }

//TEST CASE
console.log(deepSumRecursive([
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
  
  console.log(deepSumRecursive([
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
  
  console.log(deepSumRecursive([])); // No number

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