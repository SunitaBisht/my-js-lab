var sallingprice = 500;
var listingPrice = 7000;

var discountpercentage = ((listingPrice - sallingprice) / listingPrice) * 100;
console.log("The discount is:" + discountpercentage);

var DisplayDiscountpercentage = Math.round(discountpercentage);

console.log(DisplayDiscountpercentage + "%Off");
