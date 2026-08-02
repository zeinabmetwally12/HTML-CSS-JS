// ==========================================
// Challenge 1: ATM Banking System
// ==========================================

// Setup basic variables
let userPin = "1234";
let enteredPin = "1234";
let currentBalance = 5000;
let selectedOperation = "withdraw"; // "withdraw", "deposit", "checkBalance", "changePin"
let transactionAmount = 1200;
let newPin = "5678";
let failedAttempts = 0;

// Check PIN first
if (failedAttempts >= 3) {
  console.log("Account is locked! Too many wrong PIN attempts.");
} else if (enteredPin !== userPin) {
  failedAttempts++;
  console.log("Wrong PIN! You have " + (3 - failedAttempts) + " attempts left.");
} else {
  console.log("PIN correct. Welcome to your account!");

  // Handle the chosen operation using switch
  switch (selectedOperation) {
    case "withdraw":
      if (transactionAmount <= 0) {
        console.log("Please enter an amount greater than 0.");
      } else if (transactionAmount > currentBalance) {
        console.log("Error: Not enough balance in your account.");
      } else {
        currentBalance = currentBalance - transactionAmount;
        console.log("Successfully withdrew: $" + transactionAmount);
        console.log("New Balance: $" + currentBalance);
      }
      break;

    case "deposit":
      if (transactionAmount <= 0) {
        console.log("Deposit amount must be greater than 0.");
      } else {
        currentBalance = currentBalance + transactionAmount;
        console.log("Successfully deposited: $" + transactionAmount);
        console.log("New Balance: $" + currentBalance);
      }
      break;

    case "checkBalance":
      console.log("Your current balance is: $" + currentBalance);
      break;

    case "changePin":
      // Check if new PIN is a string of length 4
      if (newPin.length === 4) {
        userPin = newPin;
        console.log("Your PIN has been changed successfully!");
      } else {
        console.log("Error: PIN must be exactly 4 numbers.");
      }
      break;

    default:
      console.log("Invalid operation selected.");
  }
}

console.log("\n-----------------------------------\n");

// ==========================================
// Challenge 2: E-Commerce Checkout System
// ==========================================

// Inputs
let customerName = "  Sara Ahmed  ";
let productCategory = "Electronics"; // Electronics, Clothing, Books
let productPrice = 1200;
let quantity = 2;
let couponCode = "SAVE10";
let paymentMethod = "CreditCard"; // CreditCard, VodafoneCash, Cash

// Clean up name space
let cleanName = customerName.trim();

// 1. Subtotal
let subtotal = productPrice * quantity;

// 2. Category Discount
let categoryDiscountRate = 0;
if (productCategory === "Electronics") {
  categoryDiscountRate = 0.10; // 10%
} else if (productCategory === "Clothing") {
  categoryDiscountRate = 0.15; // 15%
} else if (productCategory === "Books") {
  categoryDiscountRate = 0.05; // 5%
}
let categoryDiscount = subtotal * categoryDiscountRate;

// 3. Coupon Discount
let couponDiscount = 0;
if (couponCode === "SAVE10") {
  couponDiscount = 100;
} else if (couponCode === "SUPER20") {
  couponDiscount = 200;
}

// 4. Payment Method Discount
let paymentDiscountRate = 0;
if (paymentMethod === "CreditCard") {
  paymentDiscountRate = 0.05; // 5% extra discount
}
let paymentDiscount = subtotal * paymentDiscountRate;

// Total Discounts
let totalDiscount = categoryDiscount + couponDiscount + paymentDiscount;
let priceAfterDiscount = subtotal - totalDiscount;

// Bonus check: Price cannot be negative
if (priceAfterDiscount < 0) {
  priceAfterDiscount = 0;
}

// VAT calculation (14%)
let vat = priceAfterDiscount * 0.14;

// Final Total
let finalTotal = priceAfterDiscount + vat;

// Display Invoice
console.log("--- INVOICE ---");
console.log("Customer: " + cleanName);
console.log("Category: " + productCategory);
console.log("Quantity: " + quantity);
console.log("Subtotal: $" + subtotal);
console.log("Category Discount: -$" + categoryDiscount);
console.log("Coupon Discount: -$" + couponDiscount);
console.log("Payment Discount: -$" + paymentDiscount);
console.log("VAT (14%): +$" + vat);
console.log("Total to Pay: $" + finalTotal);

console.log("\n-----------------------------------\n");

// ==========================================
// Challenge 3: University Student Portal
// ==========================================

// Student inputs
let studentName = "Ali Hassan";
let attendancePercentage = 85;
let midtermScore = 22;   // out of 30
let finalExamScore = 48; // out of 50
let assignmentScore = 18; // out of 20
let tuitionPaid = true;

console.log("--- STUDENT REPORT ---");
console.log("Name: " + studentName);

if (tuitionPaid === false) {
  console.log("Result blocked: Please pay your tuition fees first!");
} else if (attendancePercentage < 75) {
  console.log("Failed due to attendance (" + attendancePercentage + "% is below required 75%).");
} else {
  let totalScore = midtermScore + finalExamScore + assignmentScore;
  let grade = "";

  if (totalScore >= 90) {
    grade = "A";
  } else if (totalScore >= 80) {
    grade = "B";
  } else if (totalScore >= 70) {
    grade = "C";
  } else if (totalScore >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log("Attendance: " + attendancePercentage + "%");
  console.log("Total Score: " + totalScore + " / 100");
  console.log("Grade: " + grade);

  if (totalScore >= 60) {
    console.log("Status: PASSED");
  } else {
    console.log("Status: FAILED");
  }

  // Bonus check for scholarship
  if (totalScore >= 90 && attendancePercentage >= 90) {
    console.log("Congrats! You are eligible for a scholarship!");
  }
}

console.log("\n-----------------------------------\n");

// ==========================================
// LeetCode Problem 1: Valid Parentheses
// ==========================================

function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // Push opening brackets to stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // If we see a closing bracket but stack is empty -> invalid
      if (stack.length === 0) {
        return false;
      }

      let lastOpen = stack.pop();

      // Check if closing bracket matches the last opening bracket
      if (char === ")" && lastOpen !== "(") return false;
      if (char === "}" && lastOpen !== "{") return false;
      if (char === "]" && lastOpen !== "[") return false;
    }
  }

  // If stack is completely empty, all brackets were matched properly
  return stack.length === 0;
}

// Test outputs
console.log("Valid Parentheses Tests:");
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false

console.log("\n-----------------------------------\n");

// ==========================================
// LeetCode Problem 2: Find Index of First Occurrence
// ==========================================

function strStr(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  // Loop through haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let matchFound = true;

    // Check if needle matches character by character starting from i
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        matchFound = false;
        break; // stop checking this position
      }
    }

    if (matchFound) {
      return i; // found starting index
    }
  }

  return -1; // needle not found
}

// Test outputs
console.log("First Occurrence Tests:");
console.log(strStr("sadbutsad", "sad"));   // 0
console.log(strStr("leetcode", "leeto"));  // -1