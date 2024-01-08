/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;

  for (let i = 0; i < iterations % 4; i += 1) {
    let left = '';
    let right = '';
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        left += result[j];
      } else {
        right += result[j];
      }
    }
    result = left + right;
  }
  return result;
}

// '012345', 2 => '024135' => '043215'

// '024135'
// '043215'
// '031425'

console.log(shuffleChar('012345', 1));
console.log(shuffleChar('012345', 2));
console.log(shuffleChar('012345', 3));
console.log(shuffleChar('012345', 4));
console.log(shuffleChar('012345', 5));
