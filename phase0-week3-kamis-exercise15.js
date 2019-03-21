function highestScore (students) {
  // Code disini
  var result = {};
  for (var i = 0; i < students.length; i++){
    var temp = {
      name : students[i].name,
      score : students[i].score
    }
    if(result[students[i].kelas] == undefined){
      result[students[i].kelas] = temp;
    }
    else{
    var temp = {
        name : students[i].name,
        score : students[i].score
      }
      if(result[students[i].kelas] !== undefined){
        if(temp.score > result[students[i].kelas].score){
          result[students[i].kelas] = temp;
        }
      }
    }
  }
  return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 9,
    kelas: 'foxes'
  },
  {
    name: 'Alexei',
    score: 8,
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
//   foxes: { name: 'Sergei', score: 74 },
//   wolves: { name: 'Anastasia', score: 78 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 10,
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
//   foxes: { name: 'Vladimir', score: 92 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}