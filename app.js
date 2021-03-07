// BUDGET CONTROLLER
var budgetController = (function () {})();

// UI CONTROLLER
var UIcontroller = (function () {})();

// GLOBAL APP CONTROL
var controller = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    // Get Input Data
    // Add item to the budget controller
    // Add the new item to user interface
    // calculate the budget
    // Display the budget in the UI
    console.log('test passed!')
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIcontroller);
