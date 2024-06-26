/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
  // Split string into words
  return string.split(' ')
    //Maps over the words
    .map((word) => [...word].map((letter, i) =>{
      //Splits words into letters and changes to weird case
      return i % 2 === 0? letter.toUpperCase() : letter.toLowerCase()
      //Joins changed letters to form words again
    }).join(''))
    //Joins words again to form the output string
    .join(' ')
}