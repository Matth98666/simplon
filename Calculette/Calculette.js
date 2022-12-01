function display(n) {
    document.getElementById("result").value += n;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function calcul(result) {
    var x = document.getElementById("result").value;
    result = eval(x);
    document.getElementById("result").value = result;
    console.log(result);
}

