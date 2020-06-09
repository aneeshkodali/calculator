// create calculator class
class Calculator {

    // constructor function
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
    }

    //function to clear variables
    clear() {
       
    }

    //function to remove single number
    delete() {

    }

    //function to add digit selected to number 
    appendNumber(number) {

    }

    //function to choose operation selected
    chooseOperation(operation) {

    }

    //function to do the math
    compute() {

    }

    //function to update display
    updateDisplay() {

    }
}

//store buttons in variables (select by data attribute)
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operations]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

