<<<<<<< HEAD
function processOrders(orders) {
    let revenue = 0;
    let success = 0;
    let count = 0;

    let skippedInRow = 0;
    let stockFailures = 0;
    let stopMessage = "";

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        let isSkipped =
            order.status === "cancelled" ||
            order.status === "invalid" ||
            !order.stockAvailable;

        if (isSkipped) {
            skippedInRow++;

            if (!order.stockAvailable) {
                stockFailures++;
            }

            if (skippedInRow === 3 || stockFailures === 3) {
                stopMessage = "System failure";
                break;
            }

            continue;
        }

        revenue += order.amount;
        success++;
        count++;
        skippedInRow = 0;
    }

    return {
        revenue,
        success,
        count,
        stopMessage
    };
}

const orders = [
    { id: 1, status: "valid", stockAvailable: true, amount: 100 },
    { id: 2, status: "cancelled", stockAvailable: true, amount: 200 },
    { id: 3, status: "valid", stockAvailable: false, amount: 150 },
    { id: 4, status: "invalid", stockAvailable: true, amount: 300 },
    { id: 5, status: "valid", stockAvailable: true, amount: 250 }
];

console.log(processOrders(orders));

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 5, 3, 4]));

function greaterThan(arr, value) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            result.push(arr[i]);
        }
    }

    return result;
}

=======
function processOrders(orders) {
    let revenue = 0;
    let success = 0;
    let count = 0;

    let skippedInRow = 0;
    let stockFailures = 0;
    let stopMessage = "";

    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        let isSkipped =
            order.status === "cancelled" ||
            order.status === "invalid" ||
            !order.stockAvailable;

        if (isSkipped) {
            skippedInRow++;

            if (!order.stockAvailable) {
                stockFailures++;
            }

            if (skippedInRow === 3 || stockFailures === 3) {
                stopMessage = "System failure";
                break;
            }

            continue;
        }

        revenue += order.amount;
        success++;
        count++;
        skippedInRow = 0;
    }

    return {
        revenue,
        success,
        count,
        stopMessage
    };
}

const orders = [
    { id: 1, status: "valid", stockAvailable: true, amount: 100 },
    { id: 2, status: "cancelled", stockAvailable: true, amount: 200 },
    { id: 3, status: "valid", stockAvailable: false, amount: 150 },
    { id: 4, status: "invalid", stockAvailable: true, amount: 300 },
    { id: 5, status: "valid", stockAvailable: true, amount: 250 }
];

console.log(processOrders(orders));

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 5, 3, 4]));

function greaterThan(arr, value) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            result.push(arr[i]);
        }
    }

    return result;
}

>>>>>>> ebdfcb3a1aef6f6e1d84b6fe46fbe35ea0663c70
console.log(greaterThan([10, 20, 30, 40, 50], 25));