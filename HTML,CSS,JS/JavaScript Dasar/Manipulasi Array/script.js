// Menambah isi array
// let arr = [];
// arr[0] = "Kontolodon";
// arr[1] = "Kintilidin";
// arr[2] = "Paijo";
// arr[3] = "Rijal";

// Menghapus isi array
// let arr = ["Kontolodon", "Totlodon", "Paijo"];
// arr[1] = undefined;

// Menampilkan isi array
// let arr = ["Kontolodon", "Totlodon", "Paijo"];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr);

// METHOD PADA ARRAY
let arr = ["Kontolodon", "Totlodon", "Paijo"];
// Join
// console.log(arr.join());

// Push & Pop
// arr.push("Rijal Tzy", "Udin Tzy");
// console.log(arr);
// arr.pop()
// arr.pop()
// console.log(arr);

// Unshift & Shift
// arr.unshift("Rijal Tzy", "Udin Tzy");
// console.log(arr);
// arr.shift()
// arr.shift()
// console.log(arr);

// Splice
// .splice(indexawal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...);
// arr.splice(2, 0, "Rijal Tzy")
// console.log(arr);

// Slice
// .slice(awal, akhir);
// let arr1 = ["Kontolodon", "Totlodon", "Paijo", "Rijal", "Reja"];
// let arr2 = arr1.slice(1, 4);
// console.log(arr2.join());

// ForEach
// let numbers = [1,2,3,4,5,6,7,8,9]
// let students = ["Totlodon", "Rijal", "Reja"]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// numbers.forEach(function(n) {
//     console.log(n);
// })
// students.forEach(function(e, i) {
//     console.log(`Mahasiswa ke-${i} : ${e}`);
// })

// Map
// let numbers = [1,4,7,5,2,9,8,6]
// let numbers2 = numbers.map(function(n) {
//     return n * 3
// })
// console.log(numbers2);

// Sort
// let numbers = [1,4,7,5,2,9,8,6]
// console.log(numbers.sort());

// Filter
// let numbers = [1,4,7,5,2,9,8,6]
// let numbers2 = numbers.filter(function(n) {
//     return n <= 5
// })
// console.log(numbers2);