/** product: calculate the product of an array of numbers. */
// product([2, 3, 4])
function product(nums, index=0) {
  if (index === nums.length) return 1;
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */
// longest(["hello", "hi", "hola"])  // 5
function longest(words, index=0, longestWord=0) {
  if (index === words.length) return longestWord;
  longestWord = Math.max(words[index].length, longestWord);
  return longest(words, index+1, longestWord);
}

/** everyOther: return a string with every other letter. */
// everyOther("hello")  // "hlo"
function everyOther(str, index=0, newString="") {
  if (index >= str.length) return newString;
  newString += str[index];
  return everyOther(str, index+2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
// isPalindrome("tacocat")  // true
// isPalindrome("tacodog")  // false
function isPalindrome(str, index=0) {
  let leftIndex = index;
  let rightIndex = str.length-1-index;
  if (leftIndex >= rightIndex) return true;
  if (str[leftIndex] !== str[rightIndex]) return false;
  return isPalindrome(str, index+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
// let animals = ["duck", "cat", "pony"];

// findIndex(animals, "cat");  // 1
// findIndex(animals, "porcupine");   // -1
function findIndex(arr, val, index=0) {
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */
// revString("porcupine") // 'enipucrop'
function revString(str, index=0, newString="") {
  if (newString.length === str.length) return newString;
  newString += str[str.length - 1 - index];
  return revString(str, index + 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
// binarySearch([1,2,3,4],1) // 0
// binarySearch([1,2,3,4],3) // 2
// binarySearch([1,2,3,4],5) // -1
function binarySearch(arr, val, left=0, right=arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
