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