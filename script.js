// create calculator class
class Calculator {

    // constructor function
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    //function to clear variables
    clear() {
       this.previousOperand = '';
       this.currentOperand = '';
       this.operation = undefined;
    }

    //function to remove single number
    delete() {

    }

    //function to add digit selected to number 
    appendNumber(number) {

        // check if period button pressed and number already has period
        if (number==="." && this.currentOperand.includes('.')) return ;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    //function to choose operation selected
    chooseOperation(operation) {

        // if no number in current display, can't allow any operation
        if (this.currentOperand==='') return;
        
        // if number in previous display, then do the computation
        if (this.previousOperandTextElement!=='') {
            this.compute();
        }

        this.operation = operation;

        // when operation clicked, add the current number from the 'current operand' to the 'previous operand'
        this.previousOperand = this.currentOperand;
        // clear current operand
        this.currentOperand = '';
    }

    //function to do the math
    compute() {

        let computation;

        // get number version of current/previous operand
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        // if no number for prev or current (no 2 numbers to add), don't allow computation
        if (isNaN(prev) || isNaN(current)) return;

        // handle different computations (operations)
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev + current;
                break;
            default:
                return
        }

        // update current operand
        this.currentOperand = computation;
        // update operation
        this.operation = undefined;
        // update previous operand
        this.previousOperand = '';
    }

    //function to update display
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }
}

//store buttons in variables (select by data attribute)
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


// create calculator object
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// add event listener to NUMBER buttons: append number to current operand and update the display of the number
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

// add event listener to OPERATIONS buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

// add event listener to EQUALS button
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

// add event listener to ALL CLEAR button
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})