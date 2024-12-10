// strip white space
// snip 5 digits from the front to list 1, then to list 2, repeat
// sort lists by ascending value (smallest first)
// then crawl each by index, comparing and stashing value

var list1 = [];
var list2 = [];
var totalDifference = 0;

var { puzzleInput } = require('./puzzleInput.js');

// strip white space from puzzleInput
puzzleInput = puzzleInput.replace(/\s/g, '');
// console.log(puzzleInput);

while (puzzleInput.length > 0) {
  list1.push(puzzleInput.substr(0, 5));
  puzzleInput = puzzleInput.substr(5);
  list2.push(puzzleInput.substr(0, 5));
  puzzleInput = puzzleInput.substr(5);
}

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

// console.log(list1)
// console.log(list2)

for (var i = 0; i < list1.length; i++) {
    if (list1[i] > list2[i]) {
        totalDifference += Math.abs(list1[i] - list2[i])
    }
    else {
        totalDifference += Math.abs(list2[i] - list1[i])
    }
    // console.log(list1[i], list2[i], totalDifference)
}

console.log(totalDifference)