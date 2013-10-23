var App = {};

App.Roll = function (numberOfDice, sides) {
    "use strict";
    var i = 0,
        results = 0;
    for (i; i < numberOfDice; i = i + 1) {
        results = results + Math.floor(Math.random() * sides) + 1;
    }
    return results;
};