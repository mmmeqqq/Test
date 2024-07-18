// Sum of All Primes
// Task: Write a JavaScript function that takes a number n and returns the sum of all prime
// numbers up to and including n.
// Example:
// Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
// Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7….. To 59).

//หา prime ก่อน
function findPrime(num) {
  // จำนวนที่น้อยกว่าหรือเท่ากับ1ไม่ใช่prime
  if (num <= 1) return false;
  //ลูปเพื่อหาprime เริ่มจาก 2 และใช้Math.sqrtด้เพื่อลดจำนวนลงลูป
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//sum ค่าprimeทั้งหมด
function sumPrimes(num) {
  //สร้งarrayเก็บค่า
  const primes = [];
  for (let i = 2; i <= num; i++) {
    if (findPrime(i)) {
      primes.push(i);
    }
  }
  //เอามาหามผลรวม
  let sum = 0;
  for (let prime of primes) {
    sum += prime;
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(59));
