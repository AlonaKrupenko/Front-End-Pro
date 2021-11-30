//#1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr3 = arr1.concat(arr2);

//#2
const arr4 = [1, 2, 3];
arr4.reverse();

//#3
const arr5 = [1, 2, 3];
arr5.push(4, 5, 6);

//#4
const arr6 = [1, 2, 3];
arr6.unshift(4, 5, 6);

//#5
const arr7 = ["js", "css", "jq"];
console.log(arr7[0]);

//#6
console.log(arr7[arr1.length - 1]);

//#7
const arr8 = [1, 2, 3, 4, 5];
const arr9 = arr8.slice(0, 3);

//#8
const arr10 = arr8.slice(-2);

//#9
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(1, 2);

//#10
const arr12 = arr8.slice(1, 4);

//#11
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(3, 0, "a", "b", "c");

//#12
const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1, 0, "a", "b");
arr14.splice(6, 0, "c");
arr14.splice(8, 0, "e");

//#13
const arr15 = [3, 4, 1, 2, 7];
arr15.sort()

//#14
const arr16 = [5, 6, 7, 8, 9]
const sum = arr16.reduce((sum, current) => sum + current, 0)

//#15
const arr17 = [5, 6, 7, 8, 9]
const arr18 = arr17.map(item => item ** 2)

//#16
const arr19 = [1,-3, 5, 6,-7, 8, 9,-11];
const arr20 = arr19.filter(elem => elem < 0)

//#17
const arr21 = [1,-3, 5, 6,-7, 8, 9,-11];
const arr22 = arr21.filter(elem => elem % 2 === 0);

//#18
const arr23 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr24 = arr23.filter(elem => elem.length > 5)

//#19
const arr25 = [1, 2, [3, 4], 5, [6, 7]];
const arr26 = arr25.filter(elem => Array.isArray(elem) === true)

//#20
const arr27 = [5,-3, 6,-5, 0,-7, 8, 9, ]
const arr28 = arr27.filter(elem => elem < 0)
const result = arr28.length;
