const repeatString = function(string, num) {
  let word = '';
  if (num < 0) {
    return "ERROR";
  }
  for (i = 0; i < num; i++) {
    word += string;
  }

  return word;
};

// do not edit below this line
module.exports = repeatString;
