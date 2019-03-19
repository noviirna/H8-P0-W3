function shoppingTime(memberId, money) {
  // you can only write your code here!

  var remainingMoney = money; //initiate by declaring remainingMoney variable to store remaining money before and after bought item(s) from the store
  
  //assign the price into the variable
  var hargaStacattu = 1500000; // harga sepatu stacattu
  var hargaZoro = 500000; // harga baju zoro
  var hargaHN = 250000; // harga baju hn
  var hargaUniklooh = 175000; // harga sweater uniklooh
  var hargaCasing = 50000; // harga casing handphone
  
  //assign item for sale into itemsSale variable and its price into itemsPrice variable;
  var itemsSale = ['Sepatu Stacattu', 'Baju Zoro', 'Baju HN','Sweater Uniklooh', 'Casing HP']
  var itemsPrice = [hargaStacattu, hargaZoro, hargaHN, hargaUniklooh, hargaCasing];

  //declare a variable to store the bought item, assign it as an empty array
  var itemsBought = [];

  //if not a member of toko X, then return string 'Mohon maaf, toko X hanya berlaku untuk member saja'
  if(memberId == '' || memberId == undefined || memberId == null){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  //if money is less than 50000, then return string 'Mohon maaf, uang tidak cukup'
  if(money < 50000){
    return 'Mohon maaf, uang tidak cukup'
  }

  // do the loop to calculate the item, if remaining money is enough to buy the item then add the item to the itemsBought array and substract the remaining money with the item's price, do it on each loop
  for(var i = 0; i <= itemsPrice.length; i++){
    if(remainingMoney >= itemsPrice[i]){
      itemsBought.push(itemsSale[i]);
      remainingMoney = remainingMoney - itemsPrice[i];
    }
  }// end of for loop

  //store the data in the variable above into myObj
  var myObj = {
    memberId : memberId,
    money : money,
    listPurchased: itemsBought,
    changeMoney: remainingMoney
  }

  //return myObj to print the object into the terminal
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