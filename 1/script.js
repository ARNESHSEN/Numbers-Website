// script.js

function showSection(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

function showPrimeChecker() {
  showSection("primeChecker");
}

function showFibonacci() {
  showSection("fibonacci");
}

function showFactorial() {
  showSection("factorial");
}

function showSumOfDigits() {
  showSection("sumOfDigits");
}

function showArmstrong() {
  showSection("armstrong");
}

function showPerfect() {
  showSection("perfect");
}

function showPalindrome() {
  showSection("palindrome");
}

function showEvenOdd() {
  showSection("evenOdd");
}

function showGCD() {
  showSection("gcd");
}

function showLCM() {
  showSection("lcm");
}

function checkPrime() {
  const number = parseInt(document.getElementById("primeInput").value);
  let isPrime = true;
  if (number === 1) {
    isPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  const result = (document.getElementById("primeResult").innerText = isPrime
    ? `${number} is a prime number.`
    : `${number} is not a prime number.`);

  const about = document.getElementById("prime");
  about.classList.add("see");
}

function generateFibonacci() {
  const terms = parseInt(document.getElementById("fibonacciInput").value);
  let fibSeries = [0, 1];
  for (let i = 2; i < terms; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }
  document.getElementById(
    "fibonacciResult"
  ).innerText = `Fibonacci Series: ${fibSeries.join(", ")}`;

  const about = document.getElementById("fibo");
  about.classList.add("see");
}

function calculateFactorial() {
  const number = parseInt(document.getElementById("factorialInput").value);
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  document.getElementById(
    "factorialResult"
  ).innerText = `Factorial of ${number} is ${factorial}`;

  const about = document.getElementById("fact");
  about.classList.add("see");
}

function sumDigits() {
  const number = parseInt(document.getElementById("sumOfDigitsInput").value);
  const sum = number
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  document.getElementById(
    "sumOfDigitsResult"
  ).innerText = `Sum of digits of ${number} is ${sum}`;

  const about = document.getElementById("sumdigit");
  about.classList.add("see");
}

function checkArmstrong() {
  const number = parseInt(document.getElementById("armstrongInput").value);
  const sum = number
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Math.pow(parseInt(digit), 3), 0);
  const isArmstrong = sum === number;
  document.getElementById("armstrongResult").innerText = isArmstrong
    ? `${number} is an Armstrong number.`
    : `${number} is not an Armstrong number.`;

  const about = document.getElementById("arms");
  about.classList.add("see");
}

function checkPerfect() {
  const number = parseInt(document.getElementById("perfectInput").value);
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  const isPerfect = sum === number;
  document.getElementById("perfectResult").innerText = isPerfect
    ? `${number} is a perfect number.`
    : `${number} is not a perfect number.`;

  const about = document.getElementById("perfectNum");
  about.classList.add("see");
}

function checkPalindrome() {
  const number = parseInt(document.getElementById("palindromeInput").value);
  const reversed = number.toString().split("").reverse().join("");
  const isPalindrome = number.toString() === reversed;
  document.getElementById("palindromeResult").innerText = isPalindrome
    ? `${number} is a palindrome.`
    : `${number} is not a palindrome.`;

  const about = document.getElementById("palinNum");
  about.classList.add("see");
}

function checkEvenOdd() {
  const number = parseInt(document.getElementById("evenOddInput").value);
  const isEven = number % 2 === 0;
  document.getElementById("evenOddResult").innerText = isEven
    ? `${number} is an even number.`
    : `${number} is an odd number.`;

  const about = document.getElementById("evenodd");
  about.classList.add("see");
}

function calculateGCD() {
  const number1 = parseInt(document.getElementById("gcdInput1").value);
  const number2 = parseInt(document.getElementById("gcdInput2").value);
  let gcd = 1;
  for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i === 0 && number2 % i === 0) {
      gcd = i;
    }
  }
  document.getElementById(
    "gcdResult"
  ).innerText = `GCD of ${number1} and ${number2} is ${gcd}`;

  const about = document.getElementById("Gcd");
  about.classList.add("see");
}

function calculateLCM() {
  const number1 = parseInt(document.getElementById("lcmInput1").value);
  const number2 = parseInt(document.getElementById("lcmInput2").value);
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (number1 * number2) / gcd(number1, number2);
  document.getElementById(
    "lcmResult"
  ).innerText = `LCM of ${number1} and ${number2} is ${lcm}`;

  const about = document.getElementById("Lcm");
  about.classList.add("see");
}
