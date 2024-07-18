// Custom Sort Function
// Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places
// all odd numbers before even numbers.
//Example:
// Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
// Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].

function sortNum(arr) {
  // สร้าง array ไว้เก็บ num
  const odd = [];
  const even = [];
  //เรียงลำดับจากน้อยไปมาก
  arr.sort((a, b) => a - b);
  // เอาเข้าลูปหาว่า คี่ หรือ คู่
  for (let num of arr)
    if (num % 2 === 0) {
      // ถ้าเป็นเลขคู่ push เข้าarry even
      even.push(num);
    } else {
      // ถ้าเป็นเลขคี่ push เข้าarry odd
      odd.push(num);
    }
  //เอามาต่อกัน เอา odd ขึ้นก่อน
  return odd.concat(even);
}

console.log(sortNum([4, 2, 5, 7, 1, 6]));
console.log(sortNum([25, 40, 14, 91, 31, 22, 49, 13, 6]));
