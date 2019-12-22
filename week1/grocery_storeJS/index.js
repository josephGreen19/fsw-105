
var shopper = {
    fName: "Joe",
    lName: "Green",
    age: 31,
    payCash: true,
    payCard: false,
    cash: 85,
    change: 1,
    totalMoney: function(cash,change) {
        return this.cash + this.change;
    },
    
    groceryCart: [ "steak", "milk", "coffee", "bread"]
}
console.log(shopper)