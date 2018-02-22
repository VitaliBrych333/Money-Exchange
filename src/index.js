// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var sum = currency;
    if (sum <= 0) return {};
    if (sum > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var a = Math.floor(sum/50);
    var b = Math.floor((sum - 50*a)/25);
    var c = Math.floor((sum - 50*a - 25*b)/10);
    var d = Math.floor((sum - 50*a -25*b - 10*c)/5);
    var e = sum - 50*a - 25*b - 10*c - 5*d;
    var obj = {
    	"H": a, 
    	"Q": b, 
    	"D": c,
    	"N": d,
    	"P": e
    };
    for (key in obj) {
    	if ( obj[key]==0) delete obj[key];
    }
    return obj;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
