function cariMedian(array) {
    // you can only write your code here!
    var median = (array.length-1) / 2;
    var mdown = 0;
    var mup = 0;
  
    if(Math.round(median) == median){
      return array[median];  
    }
    else{
      mdown = Math.floor(median);
      mup = Math.ceil(median);
      median = array[mdown] + array[mup];
      median = median / 2;
      return median;
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5