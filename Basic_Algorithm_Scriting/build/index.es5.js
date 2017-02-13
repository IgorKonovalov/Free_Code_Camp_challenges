'use strict';

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
  var strArray = str.toLowerCase().split(' ');
  var newWords = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = strArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;

      var wordArray = word.split('');
      wordArray[0] = wordArray[0].toUpperCase();
      newWords.push(wordArray.join(''));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return newWords.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
console.log('foo');