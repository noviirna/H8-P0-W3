function shoppingTime(memberId, money) {
  // you can only write your code here!

  var remainingMoney = money;

  var hargaStacattu = 1500000;
  var hargaZoro = 500000;
  var hargaHN = 250000;
  var hargaUniklooh = 175000;
  var hargaCasing = 50000;
  
  var itemsSale = ['Sepatu Stacattu', 'Baju Zoro', 'Baju HN','Sweater Uniklooh', 'Casing HP']
  var itemsPrice = [hargaStacattu, hargaZoro, hargaHN, hargaUniklooh, hargaCasing];

  var itemsBought = [];


  //if not a member of toko X, then return string 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if(memberId == '' || memberId == undefined || memberId == null){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  //if money is less than 50000, then return string 'Mohon maaf, uang tidak cukup'
  if(money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }

  for(var i = 0; i <= itemsPrice.length; i++){
    if(remainingMoney >= itemsPrice[i]){
      itemsBought.push(itemsSale[i]);
      remainingMoney = remainingMoney - itemsPrice[i];
    }
  }// end of for loop

  var myObj = {
    memberId : memberId,
    money : money,
    listPurchased: itemsBought,
    changeMoney: remainingMoney
  }
  return myObj;
}//end of function

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja