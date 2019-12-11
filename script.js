function translatePigLatin(str) {
  let pigLatin = ''
  let regex = /[aeiou]/gi

  if (str.match(regex) == null){
    pigLatin = str + 'ay'
  } else if (str[0].match(regex)){
    pigLatin = str + 'way'
  } else {
    let vovelInd = str.indexOf(str.match(regex)[0])
let start = str.slice(0, vovelInd)
let end = str.slice(vovelInd,)
pigLatin = end + start + 'ay'
  }
  
return pigLatin

}

translatePigLatin("consonant");
