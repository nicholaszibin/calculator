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
    else {
        return 'Error';
    }
};

const screen = document.querySelector('.screen');
let screenSting = '';
screen.textContent = screenSting

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    //console.log(button.textContent);
    screenSting += button.textContent + ' ';
    //console.log(screenSting);
    screen.textContent = screenSting
  });
});


