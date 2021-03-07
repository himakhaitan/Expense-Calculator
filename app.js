var budgetController = (function () {
    // var x= 23;
    // var add = function (a) {
    //     return x + a;
    // }

    // return {
    //     publicTest: function (b) {
    //         return add(b) ;
    //     }
    // }
})();

var UIcontroller = (function () {

})();

var controller = (function (budgetCtrl, UICtrl) {
    // var z = budgetCtrl.publicTest(10);
    // return {
    //     otherPublic: function() {
    //         console.log(z);
    //     }
    // }
})(budgetController, UIcontroller);