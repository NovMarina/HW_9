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

translate(numberStr);

function reverse(number) {
    number = checkisnumber(number);
    number = Math.trunc(number).toString();
    let result = "";
    if (number.charAt(0) == "-") {
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



