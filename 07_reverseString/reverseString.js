const reverseString = function(string) {
  let stringArray = string.split("");
  let reverseArray = stringArray.reverse();
  let stringReversed = reverseArray.join("");

  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
