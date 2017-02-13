// Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  let sorted = str.split(' ').sort((prev, next) => {
    return next.length - prev.length;
  });
  return sorted[0].length;
}


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

// titleCase("I'm a little tea pot");

// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  let largest = [];
  arr.forEach((subArr) => {
    subArr.sort((a,b) => {
      return b - a;
    });
    largest.push(subArr[0]);
  })
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
