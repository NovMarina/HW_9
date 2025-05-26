let numberStr = prompt("Enter any number you want:")
numberStr = parseInt(numberStr.trim());

function checkisnumber(number) {
    while (isNaN(number)) {
        console.log("Wrong number! Enter right number!");
        number = prompt("Enter any number you want:")
    }
    return number;
}

function translate(number) {
    number = checkisnumber(number);
    if (number) {
        alert(number + "  in bin= " + number.toString("2") + "; in hex= " + number.toString("16"));
    }
}

function binary(number) {
    if (number === 0)
        return "0";
    let sign = "";
    if (number < 0) {
        sign = "-";
        number = -number;
    }
    let result = "";
    while (number !== 0) {
        result += (number % 2);
        number = parseInt(number / 2);
    }
    return sign + result;
}

console.log(binary(numberStr));

function hex(number) {
    if (number === 0) return "0";
    let sign = "";
    if (number < 0) {
        sign = "-";
        number = -number;
    }
    const digits = "0123456789abcdef";
    let result = "";
    while (number !== 0) {
        let i = number % 16;
        result += digits[i];
        number = parseInt(number / 16);
    }
    return sign + result;
}

console.log(hex(numberStr));

translate(numberStr);

function reverse(number) {
    number = checkisnumber(number);
    number = Math.trunc(number).toString();
    let result = "";
    if (number.charAt(0) === "-") {
        result += number.charAt(0);
        for (let i = number.length - 1; i > 0; i--)
            result += number.charAt(i);
    } else {
        for (let i = number.length - 1; i >= 0; i--)
            result += number.charAt(i);
    }
    alert("revers = " + result);
}

reverse(numberStr);

function sumAllNumbers(number) {
    number = checkisnumber(number);
    let digits = Math.abs(Math.trunc(number)).toString();
    let result = 0;
    for (let i = 0; i < digits.length; i++)
        result += Number(digits[i]);
    alert("sum = " + result);
}

sumAllNumbers(numberStr);


let expr = prompt("Enter mathematical expression ()*/+- :");
alert(expr + " = " + eval(expr));


