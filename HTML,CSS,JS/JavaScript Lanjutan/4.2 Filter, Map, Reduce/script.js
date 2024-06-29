const nums = [5, -1, 3, -8, 2, 4, -9, 6, 7, -4]

// filter
const result = nums.filter(n => n >= 0)
// map
.map(n => n * 2)
// reduce
.reduce((acc, cur) => acc + cur)
console.log(result);