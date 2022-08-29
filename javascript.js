const screen = document.querySelector('.screen');
let screenString = '';
let screenNumber = '';
screen.textContent = screenString

let num = [];
let operator = [];
let result = 0;


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
    answer.textContent = `${num}`;
    answer.style.textAlign = 'right';
    answer.style.paddingRight = '8px';
    answer.style.fontWeight = 'bold';
    screen.appendChild(answer);
}

const error = function() {

}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    
    if (button.className === 'equals') {
        num.push(Number(screenNumber));
        result = num[0];
        for (let i = 1; i < num.length; i++) {
            result = operate(operator[i-1], result, num[i]);
        }
        answer(result);

    } else if (button.className == 'number') {
        screenNumber += button.textContent;
        screen.textContent = screenNumber;

    } else if (button.className === 'operator') {
        num.push(Number(screenNumber));
        operator.push(button.textContent);

        screenString += ' ' + button.textContent + ' ';
        screenNumber = '';
        screen.textContent = screenString

    } else if (button.id === 'DEL') {
        screenString = screenString.slice(0,-2);
        screen.textContent = screenString;

    } else if (button.id === 'AC') {
        screenString = '';
        screen.textContent = screenString;
        num = [];
        operator = [];
        result = 0;
    }
  });
});


