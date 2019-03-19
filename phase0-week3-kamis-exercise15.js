function highestScore (students) {
  // Code disini
  arrFoxes = []
  arrWolves = []
  arrTigers = []
  
  //get foxes class's student with the highest score 
  for(var i = 0; i < students.length; i++){
    if(students[i].kelas == 'foxes'){
      var temp = {
        name: students[i].name,
        score: students[i].score
      }
    arrFoxes.push(temp);
    }
  }
  var maxFox = arrFoxes[0];
  for(var i = 0; i < arrFoxes.length; i++){
    if(maxFox.score < arrFoxes[i].score){
      maxFox = arrFoxes[i]
    }
  }
  
  //get wolves class's student with the highest score 
  for(var i = 0; i < students.length; i++){
    if(students[i].kelas == 'wolves'){
      var temp = {
        name: students[i].name,
        score: students[i].score
        }
      arrWolves.push(temp);
    }
  }
  var maxWolf = arrWolves[0];
  for(var i = 0; i < arrWolves.length; i++){
    if(maxWolf.score < arrWolves[i].score){
      maxWolf = arrWolves[i]
    }
  }

  //get tigers class's student with the highest score 
  for(var i = 0; i < students.length; i++){
    if(students[i].kelas == 'tigers'){
      var temp = {
        name: students[i].name,
        score: students[i].score
      }
      arrTigers.push(temp);
    }
  }
  var maxTiger = arrTigers[0];
  for(var i = 0; i < arrTigers.length; i++){
    if(maxWolf.score < arrTigers[i].score){
      maxTiger = arrTigers[i]
    }
  }

  //define the objects
  var result = {

  };
  if(maxFox != undefined){
    result["foxes"] = maxFox
  }
  if(maxWolf != undefined){
    result["wolves"] = maxWolf
  }
  if(maxTiger != undefined){
    result["tigers"]= maxTiger 
  }
  return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    kelas: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    kelas: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    kelas: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    kelas: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    kelas: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    kelas: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    kelas: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    kelas: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    kelas: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}