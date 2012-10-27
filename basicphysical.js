App.GetHeight = function (race, sex) {
	"use strict";
	var heightFromInches = function (inches) {
		return {
			Feet : Math.floor(inches / 12),
			Inches : inches % 12
		};
	},
		raceAndSex = race + " " + sex,
		inchesByRace = function () {
			switch (raceAndSex) {
			case "Dwarf Male":
				return App.Roll(1, 10) + 43;
			case "Dwarf Female":
				return App.Roll(1, 10) + 41;
			case "Elf Male":
				return App.Roll(1, 10) + 55;
			case "Elf Female":
				return App.Roll(1, 10) + 50;
			case "Gnome Male":
				return App.Roll(1, 6) + 38;
			case "Gnome Female":
				return App.Roll(1, 6) + 36;
			case "HalfElf Male":
				return App.Roll(2, 6) + 60;
			case "HalfElf Female":
				return App.Roll(2, 6) + 58;
			case "Halfling Male":
				return App.Roll(2, 8) + 32;
			case "Halfling Female":
				return App.Roll(2, 8) + 30;
			case "Human Male":
				return App.Roll(2, 10) + 60;
			case "Human Female":
				return App.Roll(2, 10) + 59;
			default:
				throw "Cannot get inchesByRace for " + raceAndSex;
			}
		};
	return heightFromInches(inchesByRace());
};

App.GetWeight = function (race, sex) {
	var raceAndSex = race + " " + sex;
	switch (raceAndSex) {
		case "Dwarf Male":
			return App.Roll(4, 10) + 130;
		case "Dwarf Female": 
			return App.Roll(4, 10) + 105;
		case "Elf Male":
			return App.Roll(3, 10) + 90;
		case "Elf Female":
			return App.Roll(3, 10) + 70;
		case "Gnome Male":
			return App.Roll(5, 4) + 72;
		case "Gnome Female":
			return App.Roll(5, 4) + 68;
		case "HalfElf Male":
			return App.Roll(3, 12) + 110;
		case "HalfElf Female":
			return App.Roll(3, 12) + 85;
		case "Halfling Male":
			return App.Roll(5, 4) + 52;
		case "Halfling Female":
			return App.Roll(5, 4) + 48;
		case "Human Male":
			return App.Roll(6, 10) + 140;
		case "Human Female":
			return App.Roll(6, 10) + 100;
	}
};