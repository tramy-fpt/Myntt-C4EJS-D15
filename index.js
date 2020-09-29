// A. Problem Solving
// Bài 1

function findOppositeNumber(n, inputNumber) {
    return inputNumber >= n / 2 ? (inputNumber - n / 2) : (inputNumber + n / 2);
}

// Bài 2

function merge2String(s1, s2) {
    let a = '';
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] && s2[i]) {
            a += s1[i] + s2[i];
        }
    }
    let b = s1.length - s2.length;
    if (b === 0) {
        return a;
    }
    return (b > 0) ? (a + s1.substring(s1.length - b)) : (a + s2.substring(s2.length + b));
}


//B. Code Challenge

let num = 0;

function inputNumber() {
    let n = Math.floor(Math.random() * 10 + 1);
    let input = document.getElementById("num").value;
    if (input) {
        if ((input <= 0 || input > 10)) {
            document.getElementById("result").innerHTML = "Wrong! Try again";
            num++;
        } else if (n === Number(input)) {
            document.getElementById("result").innerHTML = "Congratulation!";
            num = 0;
        } else {
            document.getElementById("result").innerHTML = `Wish you luck next time! Lucky Number is ${n}`;
        }
        if (num === 3) {
            document.getElementById("result").innerHTML = "Over 3 times! Let re-load and try again!";
            document.getElementById("num").setAttribute("disabled", "disabled");
        }
    }
}
