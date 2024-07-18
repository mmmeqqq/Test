// Sum Of Two in Array
// //Task: Implement a JavaScript function that, given an array of integers and a target integer,
// returns whether any two integers in the array sum up to the target number.
// Example:
// Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
// Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true

function sumOfTwo(arr, target) {
  // เอาตัวแรกตั้ง
  for (let i = 0; i < arr.length; i++) {
    // วนลูปอีกทีเอาตัวที่สองมาบวก เพื่อให้ได้เท่ากับtarget
    for (let j = i - 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // ถ้า i + j = target return true
        return true;
      }
    }
  }
  //ถ้าไม่ = target return false
  return false;
}

console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwo([12, 17, 14, 11, 19, 8], 20));
