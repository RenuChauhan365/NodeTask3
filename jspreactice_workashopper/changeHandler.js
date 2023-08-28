// changeHandler.js

module.exports = {
  releaseChange: function(currentBalance) {
    // This method releases the change by converting the current balance into change coins.
    // It then decreases the balance to zero.
    var change = this.convertToChange(currentBalance);
    this.decreaseBalance(currentBalance);
    return change;
  },

  convertToChange: function(amount) {
    // This method converts the given amount into an array of change coins.
    var coins = [];
    var coinTypes = ['q', 'd', 'n', 'p'];
    var coinValues = [25, 10, 5, 1];

    for (var i = 0; i < coinTypes.length; i++) {
      var coinType = coinTypes[i];
      var coinValue = coinValues[i];
      while (amount >= coinValue) {
        coins.push(coinType);
        amount -= coinValue;
      }
    }

    return coins;
  }
};
