// ================= ATM =================

let pin = "1234";
let balance = 1500;
let locked = false;
let tries = 0;

let enteredPin = "1234";
let operation = "withdraw";
let amount = 200;
let newPin = "5678";

if (locked) {
    console.log("Account is locked.");
} else if (enteredPin !== pin) {
    tries++;
    console.log("Wrong PIN.");

    if (tries >= 3) {
        locked = true;
        console.log("Account locked.");
    }
} else {
    console.log("Login successful.");

    if (operation === "withdraw") {
        if (amount > balance) {
            console.log("Not enough balance.");
        } else {
            balance -= amount;
            console.log("Withdraw completed.");
            console.log("Balance = $" + balance);
        }
    }

    else if (operation === "deposit") {
        if (amount > 0) {
    balance += amount;
} else {
    console.log("Invalid amount.");
}
        console.log("Deposit completed.");
        console.log("Balance = $" + balance);
    }

    else if (operation === "checkBalance") {
        console.log("Balance = $" + balance);
    }

    else if (operation === "changePin") {
        if (/^\d{4}$/.test(newPin)) {
            pin = newPin;
            console.log("PIN changed.");
        } else {
            console.log("PIN must have 4 digits.");
        }
    }

    else {
        console.log("Invalid operation.");
    }
}

// ================= E-Commerce =================

let customer = "John Doe";
let category = "Electronics";
let price = 250;
let quantity = 2;
let coupon = "SAVE10";
let payment = "Credit Card";

let vat = 0.14;

let subtotal = price * quantity;

let categoryDiscount = 0;

if (category === "Electronics") {
    categoryDiscount = subtotal * 0.10;
} else if (category === "Clothing") {
    categoryDiscount = subtotal * 0.15;
} else if (category === "Books") {
    categoryDiscount = subtotal * 0.05;
}

let couponDiscount = 0;

if (coupon === "SAVE10") {
    couponDiscount = 10;
} else if (coupon === "SUPER20") {
    couponDiscount = subtotal * 0.20;
}

let paymentDiscount = 0;

if (payment === "Wallet") {
    paymentDiscount = subtotal * 0.05;
}

let totalDiscount =
    categoryDiscount + couponDiscount + paymentDiscount;

let newPrice = subtotal - totalDiscount;

if (newPrice < 0) {
    newPrice = 0;
}

let tax = newPrice * vat;
let total = newPrice + tax;

console.log("------------------------");
console.log("Customer:", customer);
console.log("Category:", category);
console.log("Price:", price);
console.log("Quantity:", quantity);
console.log("------------------------");
console.log("Subtotal =", subtotal);
console.log("Discount =", totalDiscount);
console.log("VAT =", tax);
console.log("Total =", total);
console.log("------------------------");

// ================= University Portal =================

let name = "Zeinab Metwally";
let attendance = 85;
let midterm = 24;
let assignment = 18;
let finalExam = 48;
let paid = true;

if (!paid) {
    console.log("Fees are not paid.");
} else if (attendance < 75) {
    console.log("Failed because of attendance.");
} else {
    let totalMark = midterm + assignment + finalExam;
    let grade = "";

    if (totalMark >= 90) {
        grade = "A";
    } else if (totalMark >= 80) {
        grade = "B";
    } else if (totalMark >= 70) {
        grade = "C";
    } else if (totalMark >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log("Student:", name);
    console.log("Attendance:", attendance + "%");
    console.log("Total:", totalMark);
    console.log("Grade:", grade);

    if (grade === "F") {
        console.log("Failed");
    } else {
        console.log("Passed");
    }

    if (totalMark >= 95) {
        console.log("Scholarship available.");
    }
}
