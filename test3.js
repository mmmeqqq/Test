// Largest Number
// Task: Given a list of non-negative integers, arrange them such that they form the largest
// possible number.
// Example
// Input: [10, 2, 13, 7], Output: "721310".
// Input: [21, 36, 8, 45], Output: “8453621”

function largestNumber(arr) {
  //ทำให้เป็นสตริงก่อน
  const toString = arr.map(String);
  //เอามาเรียงลำดับว่าถ้าตัวไหนอยู่หน้าจะมีค่ามากสุด
  //ถ้า b+a > a+b จะให้ b ขึ้นก่อน
  //ถ้า b+a < a+b จะให้ a ขึ้นก่อน
  //ถ้า b+a = a+b จะไม่เปลี่ยนที่ อันไหนอยู่หน้าหรือหลังก็ได้
  toString.sort((a, b) => (b + a).localeCompare(a + b));
  // ตรวจสอบกรณีมีค่าเป็น 0
  if (toString[0] === "0") {
    return "0";
  }
  //เรียงตัวเลขต่อกัน
  return toString.join("");
}

console.log(largestNumber([10, 2, 13, 7]));
console.log(largestNumber([21, 36, 8, 45]));

let num = ["15","12","05"]
const result = num[1] + num[2]
result

const result2 = num[2] + num[1]
result2

sum = ['1205','0512']
sum.sort((a,b) => b.localeCompare(a) );
console.log(sum);