// Repeat a string
//
// Repeat a given string (first argument) num times (second argument)
// Return an empty string if num is not a positive number
//one option :
//with recursion

function repeatStringNumTimes (str, num) {
    if (num < 0) return "";
    if (num === 1) return str; //basecase
    // recursion is a function calling itself

    return str + repeatStringNumTimes(str, num - 1)
  }


console.log(repeatStringNumTimes("abc", 7));
