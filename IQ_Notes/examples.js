function getDayName(value) {
    switch (String(value).trim()) {
        case "1":
            return "Sunday";
        case "2":
            return "Monday";
        case "3":
            return "Tuesday";
        case "4":
            return "Wednesday";
        case "5":
            return "Thursday";
        case "6":
            return "Friday";
        case "7":
            return "Saturday";
        default:
            return "Invalid number";
    }
}

if (typeof prompt === "function") {
    const num = prompt("Enter a number between 1 and 7 to get the corresponding day of the week:");
    console.log(getDayName(num));
} else if (typeof require === "function" && typeof process !== "undefined") {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter a number between 1 and 7 to get the corresponding day of the week: ", (num) => {
        console.log(getDayName(num));
        rl.close();
    });
} else {
    console.log("Input is not supported in this environment.");
}
