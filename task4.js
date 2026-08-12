//task 1

const products = {
    1: "Laptop",
    2: "Phone",
    3: "Tablet"
};

function getProduct(id) {
    return new Promise((resolve, reject) => {
        if (products[id]) {
            resolve(products[id]);
        } else {
            reject("Product not found");
        }
    });
}

getProduct(2)
    .then((product) => {
        console.log(product);
    })
    .catch((error) => {
        console.log(error);
    });





    //task 2

function calculateShipping(weight) {
    return new Promise((resolve, reject) => {
        if (weight <= 0) {
            reject("Invalid weight");
        } else {
            const cost = weight * 5;
            resolve(cost);
        }
    });
}

calculateShipping(10)
    .then((cost) => {
        console.log("Shipping cost:", cost);
    })
    .catch((error) => {
        console.log(error);
    });
    






//task 3

function sendVerificationEmail(email) {
    return new Promise((resolve, reject) => {
        if (!email) {
            reject("Email is required");
        } else {
            console.log("Sending verification email...");

            setTimeout(() => {
                console.log("Email sent successfully");
                resolve();
            }, 2000);
        }
    });
}

async function registerUser(name, email) {
    try {
        if (!name || !email) {
            throw "Name and email are required";
        }

        await sendVerificationEmail(email);

        console.log("User registered successfully");
    } catch (error) {
        console.log(error);
    }
}

registerUser("Zeinab", "zeinabmetwaly@gmail.com");



//task 4

async function getUserProfile(id) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
            throw new Error("User not found");
        }

        const user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
    } catch (error) {
        console.log("API Error:", error.message);
    }
}

getUserProfile(1);