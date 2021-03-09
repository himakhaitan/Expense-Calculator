// BUDGET CONTROLLER
var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {

    allItems: {
      exp: [],
      inc: [],
    },
    totals : {
      exp: 0,
      inc: 0,
    }
  };

  return {
     addItem: function (type, des, val) {
       var newItem;

      // Create New Id
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
    } else {
        ID = 0;
    }
       
      // Create New Item
       if(type === 'exp') {
        newItem = new Expense (ID, des, val);
       }
       else if (type === 'inc') {
        newItem = new Income (ID, des, val);
       }
      //  Push it into Data Structure
       data.allItems[type].push(newItem);
      //  Return The new Element
       return newItem;
       
     }
  }
})();

// UI CONTROLLER
var UIcontroller = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };

  return {
    getInput: function () {
      var type = document.querySelector(DOMstrings.inputType).value; // Will be either inc or exp.
      var description = document.querySelector(DOMstrings.inputDescription)
        .value;
      var value = document.querySelector(DOMstrings.inputValue).value;

      return {
        type,
        description,
        value,
      };
    },
    addListItem: function (obj, type) {
      var html, newHtml, element;
      // Create Html String with placeholder text
      if (type ==='inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }      
      // replace Place holder

      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value)

      // Insert html into the dom
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); 
    }, 
    getDOMstrings: function () {
      return DOMstrings;
    },
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
  };

  var ctrlAddItem = function () {
    // Get Input Data

    var input = UICtrl.getInput();
    console.log(input);
    // Add item to the budget controller
    var newItem = budgetCtrl.addItem(input.type, input.description, input.value)
    // Add the new item to user interface
    UICtrl.addListItem(newItem, input.type);
    // calculate the budget
    // Display the budget in the UI
  };

  return {
    init: function () {
      console.log("Application Started!");
      setupEventListeners();
    },
  };
})(budgetController, UIcontroller);

controller.init();
