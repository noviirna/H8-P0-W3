function urutkanAbjad(str) {
    var arr = str.split('');
    // you can only write your code here!
    for(var batas = arr.length-1; batas >= 0; batas--){  
        for(var now = 0; now <= batas; now++){
          var next = now + 1;
          var temp = '';
          if(arr[now] > arr[next]){ 
            temp = arr[next];
            arr[next] = arr[now];
            arr[now] = temp;
          }
        }
      }
    str = arr.join('');
    return str;
    }
      
      // TEST CASES
      console.log(urutkanAbjad('hello')); // 'ehllo'
      console.log(urutkanAbjad('truncate')); // 'acenrttu'
      console.log(urutkanAbjad('developer')); // 'deeeloprv'
      console.log(urutkanAbjad('software')); // 'aeforstw'
      console.log(urutkanAbjad('aegis')); // 'aegis'