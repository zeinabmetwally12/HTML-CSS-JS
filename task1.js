// ==========================================
// Challenge 1: ATM Banking System
// ==========================================

// Initial Account State
let correctPin = "1234";
let balance = 1500.00;
let isLocked = false;
let failedAttempts = 0;

// Inputs for this transaction
let enteredPin = "1234";
let operation = "withdraw"; // Options: "withdraw", "deposit", "checkBalance", "changePin"
let amount = 200.00;
let newPinInput = "5678";

// ------------------------------------------
// PIN Authentication & Account Lock Handling
// ------------------------------------------
if (isLocked) {
    console.log("ACCOUNT LOCKED: Your account is currently locked due to multiple incorrect PIN attempts.");
} else if (enteredPin !== correctPin) {
    failedAttempts++;
    console.log(`AUTHENTICATION ERROR: Invalid PIN. Attempt ${failedAttempts} of 3.`);
    if (failedAttempts >= 3) {
        isLocked = true;
        console.log("ACCOUNT LOCKED: Too many incorrect attempts. Your account has been locked.");
    }
} else {
    // Reset failed attempts on successful login
    failedAttempts = 0;
    console.log("PIN Authenticated Successfully.\n");

    // ------------------------------------------
    // Operation Logic
    // ------------------------------------------
    switch (operation) {
        case "withdraw":
            if (amount <= 0) {
                console.log("TRANSACTION ERROR: Withdrawal amount must be greater than $0.");
            } else if (amount > balance) {
                console.log(`TRANSACTION ERROR: Insufficient funds. Your current balance is $${balance.toFixed(2)}.`);
            } else {
                balance -= amount;
                console.log(`WITHDRAWAL SUCCESSFUL: $${amount.toFixed(2)} withdrawn.`);
                console.log(`Remaining Balance: $${balance.toFixed(2)}`);
            }
            break;

        case "deposit":
            if (amount <= 0) {
                console.log("TRANSACTION ERROR: Deposit amount must be greater than $0.");
            } else {
                balance += amount;
                console.log(`DEPOSIT SUCCESSFUL: $${amount.toFixed(2)} deposited.`);
                console.log(`New Balance: $${balance.toFixed(2)}`);
            }
            break;

        case "checkBalance":
            console.log(`CURRENT BALANCE: $${balance.toFixed(2)}`);
            break;

        case "changePin":
            // PIN validation rule: must be exactly 4 digits
            const isFourDigits = /^\d{4}$/.test(newPinInput);
            if (!isFourDigits) {
                console.log("PIN CHANGE ERROR: The new PIN must consist of exactly 4 digits.");
            } else {
                correctPin = newPinInput;
                console.log("PIN CHANGED: Your PIN has been updated successfully.");
            }
            break;

        default:
            console.log("INVALID OPERATION: Please select a valid ATM operation.");
    }
}

// ==========================================
// Challenge 2: E-Commerce Checkout System
// ==========================================

// Inputs
const customerName = "John Doe";
const productCategory = "Electronics"; // e.g., "Electronics", "Clothing", "Books"
const productPrice = 250.00;
const quantity = 2;
const couponCode = "SAVE10";
const paymentMethod = "Credit Card"; // e.g., "Credit Card", "Wallet", "Cash"

// Business Rules Setup
const VAT_RATE = 0.14; // 14% VAT

// Calculate Subtotal
const subtotal = productPrice * quantity;

// 1. Category Discount
let categoryDiscountPercent = 0;
switch (productCategory.toLowerCase()) {
    case "electronics":
        categoryDiscountPercent = 0.10; // 10%
        break;
    case "clothing":
        categoryDiscountPercent = 0.15; // 15%
        break;
    case "books":
        categoryDiscountPercent = 0.05; // 5%
        break;
    default:
        categoryDiscountPercent = 0.0;
}
const categoryDiscountAmount = subtotal * categoryDiscountPercent;

// 2. Coupon Discount
let couponDiscountAmount = 0;
if (couponCode === "SAVE10") {
    couponDiscountAmount = 10.00; // $10 flat discount
} else if (couponCode === "SUPER20") {
    couponDiscountAmount = subtotal * 0.20; // 20% discount
}

// 3. Payment Method Discount
let paymentDiscountPercent = 0;
if (paymentMethod.toLowerCase() === "wallet") {
    paymentDiscountPercent = 0.05; // 5% extra discount for wallet payments
}
const paymentDiscountAmount = subtotal * paymentDiscountPercent;

// Calculate Total Discounts & Ensure Base Price After Discount Isn't Negative
const totalDiscounts = categoryDiscountAmount + couponDiscountAmount + paymentDiscountAmount;
let discountedSubtotal = subtotal - totalDiscounts;

// Bonus Rule: Prevent negative prices
if (discountedSubtotal < 0) {
    discountedSubtotal = 0;
}

// 4. Calculate Tax (VAT applied after discounts)
const vatAmount = discountedSubtotal * VAT_RATE;
const finalTotal = discountedSubtotal + vatAmount;

// ------------------------------------------
// Invoice Display
// ------------------------------------------
console.log("==========================================");
console.log("           INVOICE / RECEIPT              ");
console.log("==========================================");
console.log(`Customer Name:     ${customerName}`);
console.log(`Product Category:  ${productCategory}`);
console.log(`Unit Price:        $${productPrice.toFixed(2)}`);
console.log(`Quantity:          ${quantity}`);
console.log("------------------------------------------");
console.log(`Subtotal:          $${subtotal.toFixed(2)}`);
console.log(`Category Discount: -$${categoryDiscountAmount.toFixed(2)}`);
console.log(`Coupon Discount:   -$${couponDiscountAmount.toFixed(2)}`);
console.log(`Payment Discount:  -$${paymentDiscountAmount.toFixed(2)}`);
console.log(`Total Savings:     -$${totalDiscounts.toFixed(2)}`);
console.log("------------------------------------------");
console.log(`Discounted Price:  $${discountedSubtotal.toFixed(2)}`);
console.log(`VAT (14%):         +$${vatAmount.toFixed(2)}`);
console.log("==========================================");
console.log(`FINAL TOTAL:       $${finalTotal.toFixed(2)}`);
console.log("==========================================");

// ==========================================
// Challenge 3: University Student Portal
// ==========================================

// Inputs
const studentName = "salma ahmed";
const attendancePercentage = 90; 
const midtermScore = 20;         
const finalExamScore = 45;       
const assignmentScore = 16;      
const isTuitionPaid = true;

// Business Requirements
const MIN_ATTENDANCE_REQUIRED = 75;

console.log("==================================================");
console.log(" challenge 3:UNIVERSITY STUDENT PORTAL RESULTS    ");
console.log("==================================================");
console.log(`Student Name: ${studentName}\n`);

// 1. Check Tuition Payment Status
if (!isTuitionPaid) {
    console.log("ACCESS DENIED: Results are unavailable due to unpaid tuition fees.");
    console.log("Please contact the financial administration office.");
} 
// 2. Check Attendance Requirement
else if (attendancePercentage < MIN_ATTENDANCE_REQUIRED) {
    console.log(`Attendance: ${attendancePercentage}% (Minimum Required: ${MIN_ATTENDANCE_REQUIRED}%)`);
    console.log("❌ ACADEMIC STATUS: FAILED (Reason: Insufficient Attendance)");
} 
// 3. Process Grades
else {
    const totalScore = midtermScore + finalExamScore + assignmentScore;
    let letterGrade = "";
    let isPassed = false;

    if (totalScore >= 90) {
        letterGrade = "A";
        isPassed = true;
    } else if (totalScore >= 75) {
        letterGrade = "B";
        isPassed = true;
    } else if (totalScore >= 65) {
        letterGrade = "C";
        isPassed = true;
    } else if (totalScore >= 50) {
        letterGrade = "D";
        isPassed = true;
    } else {
        letterGrade = "F";
        isPassed = false;
    }

    console.log(`Attendance:       ${attendancePercentage}%`);
    console.log(`Midterm Score:    ${midtermScore} / 30`);
    console.log(`Assignment Score: ${assignmentScore} / 20`);
    console.log(`Final Exam Score: ${finalExamScore} / 50`);
    console.log("------------------------------------------");
    console.log(`Total Score:      ${totalScore} / 100`);
    console.log(`Letter Grade:     ${letterGrade}`);
    console.log(`Academic Status:  ${isPassed ? "PASSED" : "FAILED"}`);

    // Bonus: Scholarship Eligibility Rule
    if (totalScore >= 95) {
        console.log("------------------------------------------");
        console.log("CONGRATULATIONS! You are eligible for an Academic Merit Scholarship.");
    }
}