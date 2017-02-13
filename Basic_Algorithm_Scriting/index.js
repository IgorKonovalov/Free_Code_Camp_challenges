// Return the length of the longest word in the provided sentence.
// function findLongestWord(str) {
//   let sorted = str.split(' ').sort((prev, next) => {
//     return next.length - prev.length;
//   });
//   return sorted[0].length;
// }
//
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  let strArray = str.toLowerCase().split(' ');
  let newWords = [];
  for (var word of strArray) {
    let wordArray = word.split('');
    wordArray[0] = wordArray[0].toUpperCase();
    newWords.push(wordArray.join(''));
  }
  return newWords.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log('foo');
