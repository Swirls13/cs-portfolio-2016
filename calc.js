// Javascript for calculator

var button = document.getElementById("submitButton");
var numBox1 = document.getElementById('numBox1');
var numBox2 = document.getElementById('numBox2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

// Calc start

button.addEventListener("click", doMath);

// function used to calculate when clicked on
function doMath() {
    
    // Note to self, add semicolons
    //
    
    if (dropdown.value == "+"){
        answer = parseInt(numBox1.value) + parseInt(numBox2.value);
        display.innerHTML = answer;
    }
    
    if (dropdown.value == "-"){
        answer = parseInt(numBox1.value) - parseInt(numBox2.value);
        display.innerHTML = answer;
    }
    
    if (dropdown.value == "x"){
        answer = parseInt(numBox1.value) * parseInt(numBox2.value);
        display.innerHTML = answer;
    }
    
    if (dropdown.value == "/"){
        answer = parseInt(numBox1.value) / parseInt(numBox2.value);
        display.innerHTML = answer;
    }
    
    if (dropdown.value == "^"){
        answer = Math.pow(numBox1.value, numBox2.value);
        display.innerHTML = answer;
    }
    
    if (dropdown.value == "%"){
        answer = parseInt(numBox1.value % numBox2.value);
        display.innerHTML = answer;
    }
    
    if (dropdown.value == "nroot"){
        answer = Math.pow(numBox1.value, 1 / numBox2.value);
        display.innerHTML = answer;
    }
}