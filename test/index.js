var arr = [1, 2, , 3, , -3, null, , 0, , undefined, 4, , 4, , 5, , , , , ,];
// output:  ["1","2","3","4","5"]

const filteredArray = new Set(arr.filter((el) => el && el > -1));
console.log(Array.from(filteredArray));
