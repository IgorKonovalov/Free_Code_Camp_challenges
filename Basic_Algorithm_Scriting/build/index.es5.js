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

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  if (target == str.substring(str.length - target.length)) return true;else return false;
}

// console.log(confirmEnding("Bastian", "n"));

function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';else {
    var rStr = '';
    for (var i = 0; i < num; i++) {
      rStr += str;
      console.log(rStr);
    }
    return rStr;
  }
}

// console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0, -(str.length - num)) + '...';else return str.slice(0, -(str.length - (num - 3))) + '...';
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length / size; i++) {
    newArr.push(arr.slice(i * size, (i + 1) * size));
  }
  return newArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {
  return arr.splice(howMany);
}

// console.log(slasher([1, 2, 3], 2));

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
  for (var i = 0; i < arr[1].length; i++) {
    var char = arr[1][i].toLowerCase();
    if (arr[0].toLowerCase().indexOf(char) === -1) return false;
  }
  return true;
}

// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

// Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(function (el) {
    return Boolean(el);
  });
}

// console.log(bouncer([7, "ate", "", false, 9]));

// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var argsArray = [].concat(Array.prototype.slice.call(arguments));

  var _loop = function _loop(i) {
    argsArray[0] = argsArray[0].filter(function (el) {
      return el != argsArray[i];
    });
  };

  for (var i = 0; i <= argsArray.length; i++) {
    _loop(i);
  }
  return argsArray[0];
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  arr.push(Number(num));
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  });
  return sortedArr.indexOf(num);
}

// console.log(getIndexToIns([5, 3, 20, 3], 5));

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.