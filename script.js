//=========Intermediate Algorithm Scripting:=========== 

//=====Pig Latin

function translatePigLatin(str) {
  let pigLatin = ''
  let regex = /[aeiou]/gi

  if (str.match(regex) == null) {
    pigLatin = str + 'ay'
  } else if (str[0].match(regex)) {
    pigLatin = str + 'way'
  } else {
    let vovelInd = str.indexOf(str.match(regex)[0])
    let start = str.slice(0, vovelInd)
    let end = str.slice(vovelInd)
    pigLatin = end + start + 'ay'
  }

  return pigLatin

}

translatePigLatin("consonant");

//=====Search and Replace
function myReplace(str, before, after) {
  let index = str.indexOf(before)

  if (str[index] == str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1)
  }

  str = str.replace(before, after)

  return str
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


//=====DNA Pairing
function pairElement(str) {
  let arr = str.split('')
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }
  return arr.map(value => [value, pairs[value]])
}

pairElement("GCG");

//=====Missing letters
function fearNotLetter(str) {
  let start = str.charCodeAt(0)
  let end = str.charCodeAt(str.length - 1)
  let missing
  for (let i = start; i < end; i++) {
    if (str.indexOf(String.fromCharCode(i)) < 0) {
      missing = String.fromCharCode(i)
    }
  }
  return missing
}

fearNotLetter("abce");



//=====Sorted Union
function uniteUnique(arr) {
  let newArr = []
  let arg = []
  for (let i = 0; i < arguments.length; i++) {
    arg.push(arguments[i])
  }

  for (let k = 0; k < arg.length; k++) {
    for (let j = 0; j < arg[k].length; j++) {
      if (newArr.indexOf(arg[k][j]) < 0)
        newArr.push(arg[k][j])
    }
  }

  return newArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


//=====Convert HTML Entities
function convertHTML(str) {
  const htmlEl = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  return str.replace(/[&<>"']/g, item => htmlEl[item])
}

convertHTML("Dolce & Gabbana");

//=====Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  if (num <= 1) return 1
  let fib = [1, 1]
  let nextNum = 0
  while ((nextNum = fib[0] + fib[1]) <= num) {
    fib.unshift(nextNum)
  }

  return fib.filter(value => value % 2 != 0).reduce((a, b) => a + b)
}

sumFibs(4);


//=====Sum All Primes
function sumPrimes(num) {
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }
    return primes;
  }

  let primesArr = getPrimes(num)
  return primesArr.reduce((a, b) => a + b)
}

sumPrimes(10);


//=====Smallest Common Multiple
function smallestCommons(arr) {
  arr.sort((a, b) => a - b)
  let newArr = []

  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i)
  }

  let a = Math.abs(newArr[0])

  for (let i = 1; i < newArr.length; i++) {
    let b = Math.abs(newArr[i]), c = a;
    while (a && b) {
      a > b ? a %= b : b %= a
    }
    a = Math.abs(c * newArr[i]) / (a + b);
  }

  return a
}

smallestCommons([1, 5]);


//=====Drop it
function dropElements(arr, func) {
  let startIndex = arr.indexOf(arr.filter(func)[0])
  if (startIndex < 0) return []
  else
    return arr.slice(startIndex)
}

dropElements([1, 2, 3], function (n) { return n > 2; });
dropElements([1, 2, 3, 4], function (n) { return n > 5; })

//=====Steamroller
function steamrollArray(arr) {
  var newArr = []

  function flatten(arg) {
    if (!Array.isArray(arg)) {
      newArr.push(arg)
    } else {
      for (let a in arg) {
        flatten(arg[a])
      }
    }
  }

  arr.forEach(flatten)
  return newArr
}
steamrollArray([1, [2], [3, [[4]]]]);


//=====Binary Agents
function binaryAgent(str) {
  let arr = str.split(" ");
  let newString = [];

  for (let i = 0; i < arr.length; i++) {
    newString.push(String.fromCharCode(parseInt(arr[i], 2)));
  }

  return newString.join("")
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//=====Everything Be True
function truthCheck(collection, pre) {
  let allTrue = true
  for (let obj in collection) {
    if (collection[obj][pre]) {
    } else {
      return false
    }
  }
  return allTrue
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");


//=====Arguments Optional
function addTogether() {
  let argArr = [...arguments]
  return argArr.some(n => typeof n != 'number')
    ? undefined
    : argArr.length > 1
      ? argArr.reduce((acc, el) => acc += el)
      : n => (typeof n === "number" ? n + argArr[0] : undefined)

}

addTogether(2)(3)




//=====Make a Person
var Person = function (firstAndLast) {
  let fullName = firstAndLast

  this.getFullName = function () {
    return fullName
  }

  this.getFirstName = function () {
    return fullName.split(' ')[0]
  }

  this.getLastName = function () {
    return fullName.split(' ')[1]
  }

  this.setFirstName = function (first) {
    fullName = first + ' ' + fullName.split(' ')[1]
  }

  this.setLastName = function (last) {
    fullName = fullName.split(' ')[0] + ' ' + last
  }

  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast
  }

};

var bob = new Person('Bob Ross');
bob.getFullName();


//======Map the Debris
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.map(function (el) {
    return {
      name: el.name,
      orbitalPeriod: Math.round((2 * Math.PI) *
        Math.sqrt(Math.pow(earthRadius + el.avgAlt, 3) / GM))
    }
  });

}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);


/**   JavaScript Algorithms and Data Structures Projects: */

//=====Palindrome Checker 
function palindrome(str) {
  str = str.toLowerCase().match(/[a-z0-9]/g).join('')
  let reverse = str.split('').reverse().join('')
  return str == reverse
}

palindrome("My age is 0, 0 si ega ym.")




//=====Telephone Number Validator
function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
  return regex.test(str)

}

telephoneCheck("555-555-5555");


//=====Roman Numeral Converter

function convertToRoman(num) {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let romanized = ''

  for (let i = 0; i < decimal.length; i++) {
    while (num >= decimal[i]) {
      romanized += roman[i]
      num -= decimal[i]
    }
  }
  return romanized
}

convertToRoman(100)


//=====Caesars Cipher
function rot13(str) {
  let input = str.split('')
  let newStr = ''

  for (let i = 0; i < input.length; i++) {
    if (/\W/.test(input[i])) {
      newStr += input[i]
    } else if (str.charCodeAt(i) <= 77 && str.charCodeAt(i) > 64) {
      newStr += String.fromCharCode(str.charCodeAt(i) + 13)
    } else if (str.charCodeAt(i) > 77) {
      newStr += String.fromCharCode(str.charCodeAt(i) - 13)

    }
  }

  return newStr
}

// Change the inputs below to test
rot13("SERR CVMMN!");




//======Cash Register

var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function (acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

// test here
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);