//Declare Variables
const screen = document.querySelector('.screen');
let screenString = '';
let screenNumber = '';
screen.textContent = screenString

let num = [];
let operator = [];
let result = 0;

//Functions
const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2;
};

const mod = function(num1, num2) {
    return num1 % num2;
};

const operate = function(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    else if (operator === '-') {
        return subtract(num1, num2);
    }
    else if (operator === 'x') {
        return multiply(num1, num2);
    }
    else if (operator === '/') {
        return divide(num1, num2);
    }
    else if (operator === '%') {
        return mod(num1, num2);
    }
    else {
        return 'Error';
    }
};

const answer = function (num) {
    const answer = document.createElement('div');
    answer.classList.add('answer');
    answer.style.textAlign = 'right';
    answer.style.paddingRight = '8px';
    answer.style.fontWeight = 'bold';
    answer.style.fontSize = '36px';
    answer.style.paddingBottom = '8px';
    
    if (isNaN(Number(screenString.slice(-1)))) {
        answer.textContent = 'Error';
        screen.appendChild(answer)
    } else {
        answer.textContent = `${num}`;
        screen.appendChild(answer);
    }
    result = 0;
}

//Button Functionality
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (button.className === 'equals') {

        num.push(Number(screenNumber));
        screenNumber = '';

        result = num[0];
        for (let i = 1; i < num.length; i++) {
            result = operate(operator[i-1], result, num[i]);
        }
        answer(result);
        
    } else if (button.className == 'number') {
        screenNumber += button.textContent;
        screenString += button.textContent;
        screen.textContent = screenString

    } else if (button.className === 'operator') {
        num.push(Number(screenNumber));
        screenNumber = '';
        operator.push(button.textContent);

        screenString += ' ' + button.textContent + ' ';
        screen.textContent = screenString

        document.getElementById('decimal').disabled = false;

    } else if (button.id === 'DEL') {

        if (screenString.slice(-1) == ' ') {
            screenString = screenString.slice(0,-2);
            screen.textContent = screenString;

        } else if (screenString.slice(-1) == '.') {
            document.getElementById('decimal').disabled = false;
            screenString = screenString.slice(0,-1);
            screen.textContent = screenString;
            screenNumber = screenNumber.slice(0,-1);

        } else {
            screenString = screenString.slice(0,-1);
            screen.textContent = screenString;
            screenNumber = screenNumber.slice(0,-1);
        }

    } else if (button.id === 'AC') {
        screenString = '';
        screen.textContent = screenString;
        num = [];
        operator = [];
        result = 0;
        document.getElementById('decimal').disabled = false;
        
    } else if (button.id === 'decimal') {
        screenNumber += button.textContent;
        screenString += button.textContent;
        screen.textContent = screenString
        document.getElementById('decimal').disabled = true;
    }
  });
});


