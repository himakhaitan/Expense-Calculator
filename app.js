// BUDGET CONTROLLER
var budgetController = (function () {})();

// UI CONTROLLER
var UIcontroller = (function () {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function()  {
      var type = document.querySelector(DOMstrings.inputType).value; // Will be either inc or exp.
      var description = document.querySelector(DOMstrings.inputDescription).value;
      var value = document.querySelector(DOMstrings.inputValue).value;

      return {
        type,
        description,
        value
      }
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };



})();

// GLOBAL APP CONTROL
var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {

    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  }

  
  var ctrlAddItem = function () {
    // Get Input Data

    var input = UICtrl.getInput();
    console.log(input)
    // Add item to the budget controller
    // Add the new item to user interface
    // calculate the budget
    // Display the budget in the UI
  };

  return {
    init: function () {
      console.log('Application Started!');
      setupEventListeners();
    }
  }
  
})(budgetController, UIcontroller);

controller.init();
