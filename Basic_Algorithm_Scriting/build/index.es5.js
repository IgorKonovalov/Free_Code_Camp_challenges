'use strict';

// Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
  var sorted = str.split(' ').sort(function (prev, next) {
    return next.length - prev.length;
  });
  return sorted[0].length;
}

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

// titleCase("I'm a little tea pot");

// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
  var largest = [];
  arr.forEach(function (subArr) {
    subArr.sort(function (a, b) {
      return b - a;
    });
    largest.push(subArr[0]);
  });
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));