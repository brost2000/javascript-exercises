const reverseString = function(string) {
  let stringSplit = string.split("");
  let arrReverse = stringSplit.reverse();
  let reverseString = arrReverse.join("");

  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
