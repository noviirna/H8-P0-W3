function changeMe(arr) {
    // you can only write your code here!
    
    //move the array[][] into variable then put it inside of the object
    //do the loop as much as = (arr.length-1) times, each loop print the output as expected on the exercise objectives
    for(var i =0; i < arr.length; i++){
      var fullName = ''; //full name
      var fN = ''; //first name
      var lN = ''; //last name
      var g = ''; //gender
      var a = ''; //age

      //looping to assign each data from the array into expected variable 
      for(var j = 0; j< arr[i].length; j++){
        //because the array's pattern is [firstname, last name, gender, yearofborn], use conditional switch case
        switch(j){
          case 0 :
            fullName = fullName + arr[i][j] + ' '; //assign first name data  into fullName variable
            fN = arr[i][j]; // assign first name data into fN variable
            break;
          case 1 :
            fullName = fullName + arr[i][j]; //assign last name data into fullName variable
            lN = arr[i][j]; // assign last name data into lN variable
            break;
          case 2 :
            g = arr[i][j]; // assign gender data into g variable
            break;
          case 3 :
            a = 2019 - arr[i][j]; // assign age result into a variable
            break;
          default :
          break;
        }//end of conditional switch-case
          
        //if a is '', then assign string 'Invalid birth year' into a variable
        if(a == ''){
          a = 'Invalid birth year'
        }
        if(a != Math.abs(a)){
          a = 'Invalid birth year'
        }
        //end of conditional if
    
      }//end of loop array[][]
  
      //object
      var myObj =
      {
        firstName : fN, //assign fN variable into myObj 'firstName'
        lastName : lN, //assign ln variable into myObj 'lastName'
        gender : g, //assign g variable into myObj 'g'
        age : a, //assign a variable into myObj 'a'
      }
  
      //print fullname + counter at the end of the loop
      console.log(i+1 +'. ' + fullName + ':');
  
      //print the object at the end of the loop
      console.log(myObj);
      console.log('\n');
  
    } //end of loop array[]
    
  }// end of function
    
    // TEST CASES
    changeMe(
        [
          ['Christ', 'Evans', 'Male', 2020],
          ['Robert', 'Downey', 'Male'],
          ['Novi', 'Irnawati', 'Female', 1996]
        ]
      ); // 1. Christ Evans:
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