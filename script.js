// whiteboarding
    // writing out the steps of what you want to accomplish
    // setting up an order and plan of attack
    // not writing code! just writing in plain english

    // user story requirements
        // user selects numbers and can do things
        // user can add numbers
        // user can subtract numbers
        // user can divide numbers
        // user can multiple numbers
        // user can see output
        // user can clear all operations & start from 0

// pseudocoding
    // addEventListeners for all buttons
    // attach # values to numbers
    // add operators to + - * / 
    // input operations and numbers - the state of the calculator
    // how to store the state of the calculator?
    // what information to track?
    // when user clicks a button - how do I get which number or operation they clicked?
    // when user clicks a certain button - what code are you going to have to run?
    // TRY not to use a separate event handler for each button
    // With $(event.currentTarget) you can use just 1 event handler for the numbers by grabbing the text from the clicked element

    
// rubber ducking
    // method of debugging code by articulating a problem in spoken or written natural language 
    // vocalize your plans and your problems/bugs
    // to help you catch any errors
    // referenced from a story in a book: The Pragmatic Programmer


// VARIABLES
const calcDisplay = document.getElementById("calcDisplay");
const calcButtons = document.getElementById("frame");
let userInput = "";
let userOperation = null;
let result = null;

// FUNCTION - Update Display from User Input
function updateCalc() {
  calcDisplay.textContent = userInput;
}

// EVENT LISTENER - User Inputs & Calc Display Update
calcButtons.addEventListener("click", (event) => {
  const target = event.target;

  // Number Buttons
  if (target.classList.contains("number-button")) {
    userInput += target.textContent;
    updateCalc();
  }

  // Operation Buttons
  else if (target.classList.contains("operation-button")) {
    userOperation = target.textContent;
    result = parseFloat(userInput);
    userInput = "";
  }

  // Equals Button with switch operations
  else if (target.classList.contains("equals-button")) {
    if (result && userOperation !== null && userInput !== "") {
      switch (userOperation) {
        case "+":
          result += parseFloat(userInput);
          break;
        case "-":
          result -= parseFloat(userInput);
          break;
        case "*":
          result *= parseFloat(userInput);
          break;
        case "/":
          result /= parseFloat(userInput);
          break;
      }

      calcDisplay.textContent = result;
      userInput = "";
      userOperation = null;
      result = null;
    }
  }

  // Reset Button
  else if (target.classList.contains("reset-button")) {
    userInput = "";
    userOperation = null;
    result = null;
    updateCalc();
  }
});
