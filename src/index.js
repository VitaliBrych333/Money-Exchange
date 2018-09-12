// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const sum = currency;
    if (sum <= 0) return {};
    if (sum > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    const COUNT_50 = Math.floor(sum / 50);
          balance_50 = sum % 50;
          COUNT_25 = Math.floor(balance_50 / 25);
          balance_25 = balance_50 % 25;
          COUNT_10 = Math.floor(balance_25 / 10);
          balance_10 = balance_25 % 10;
          COUNT_5 = Math.floor(balance_10 / 5);
          COUNT_1 = balance_10 % 5;
    
    let obj = {
    	"H": COUNT_50, 
    	"Q": COUNT_25, 
    	"D": COUNT_10,
    	"N": COUNT_5,
    	"P": COUNT_1
    };
    for (key in obj) {
      if ( obj[key] == 0) {
        obj[key] = undefined;
        obj = JSON.parse(JSON.stringify(obj));
      }
    }
    return obj;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}

