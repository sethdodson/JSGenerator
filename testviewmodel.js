var diceViewModel = {
	NumberOfDice : ko.observable(0),
	Sides : ko.observable(0),
	Result : ko.observable(0)
};
diceViewModel.Roll = function () {
	"use strict";
	diceViewModel.Result(App.Roll(diceViewModel.NumberOfDice(), diceViewModel.Sides()));
};
ko.applyBindings(diceViewModel);