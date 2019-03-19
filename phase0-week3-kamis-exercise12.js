function countProfit(shoppers) {
  //declare the items that are being on sale
  let listBarang =
    [ ['Sepatu Stacattu', 1500000, 10],
      ['Baju Zoro', 500000, 2],
      ['Sweater Uniklooh', 175000, 1]
    ];
  // you can only write your code here!

  // if the input is empty then return []
  if(shoppers.length < 1){
    return shoppers;
  }
 
  //declare stock variable, and assign it as an empty array
  var stock = []

  //with this loop, assign the stock variable with objects as much as n times(where n is how many index that is existed in listBarang)
  for(var i = 0; i < listBarang.length; i++){

    //declare the product as an object, it have 4 key, and assign each key with the data from listBarang
    var product =
      {
        productName : listBarang[i][0],
        shoppers : [],
        leftOver : listBarang[i][2],
        totalProfit : 0
      }

    stock.push(product); //on each end of the loop, push the object (product) into the stock variable

  } // end of for loop

  // with this loop, check each data in shoppers and assign it into the stock variable according to its name, where h is index number of stock variable 
  for (var h = 0; h < stock.length; h++){

    var profit = 0; // initiate profit variable to calculate total profit from a product i.e. Sepatu's Stacatto total profit
    
    //with this loop within loop, check if each shoppers are buying the item on stock, i is index number of shoppers variable
    for (var i = 0; i < shoppers.length; i++){
    
        //if the shoppers are buying the item on stock, check if the stock are equal or larger than what shoppers will buy then do something if the later statement is true
      if(shoppers[i].product == listBarang[h][0]){
    
        if(stock[h].leftOver >= shoppers[i].amount){
    
          stock[h].shoppers.push(shoppers[i].name); //push the shoppers[i] name into the stock[h].shoppers
          profit = profit + ( listBarang[h][1] * shoppers[i].amount ); // count the profit of each shoppers transaction
          stock[h].leftOver = stock[h].leftOver - shoppers[i].amount; // substract the stock leftover with how many item does the customer buy
        
        } // end of the conditional if within if

      } // end of the nested if

    } // end of loop
    stock[h].totalProfit = profit; // assign the stock[h] totalprofit with the calculated profit that have been generated through loop above
  } // end of loop

return stock; //return stock data after checking all items and shoppers

} // end of function

// TEST CASES
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

// console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

// console.log(countProfit([])); //[]
