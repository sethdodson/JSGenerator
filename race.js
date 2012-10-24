App.MeetsRacialRequirements = function (race) {
	"use strict";
	switch (race) {
	case "Human":
		return function (abilities) { 
			return true;
		};
	case "Dwarf":
		return function (abilities) {
			return App.MeetsRequirements(abilities, {
				Strength : { 
					Minimum : 8,
					Maximum : 18
				},
				Dexterity : {
					Minimum : 3,
					Maximum : 17
				},
				Constitution : {
					Minimum : 11,
					Maximum : 18
				},
				Intelligence : {
					Minimum : 3,
					Maximum : 18
				},
				Wisdom : {
					Minimum : 3,
					Maximum : 18
				},
				Charisma : {
					Minimum : 3,
					Maximum : 17
				}
			});
		};
	case "Elf":
		return function (abilities) {
			return App.MeetsRequirements(abilities, {
				Strength : {
					Minimum : 3,
					Maximum : 18
				},
				Dexterity : {
					Minimum : 6,
					Maximum : 18
				},
				Constitution : {
					Minimum : 7,
					Maximum : 18
				},
				Intelligence : {
					Minimum : 8,
					Maximum : 18
				},
				Wisdom : {
					Minimum : 3,
					Maximum : 18
				},
				Charisma : {
					Minimum : 8,
					Maximum : 18
				}
		});
	};
	case "Gnome":
		return function (abilities) {
			return App.MeetsRequirements(abilities, {
				Strength : {
					Minimum : 6,
					Maximum : 18
				},
				Dexterity : {
					Minimum : 3,
					Maximum : 18
				},
				Constitution : {
					Minimum : 8,
					Maximum : 18
				},
				Intelligence : {
					Minimum : 6,
					Maximum : 18
				},
				Wisdom : {
					Minimum : 3,
					Maximum : 18
				},
				Charisma : {
					Minimum : 3,
					Maximum : 18
				}
			});
		};
	case "HalfElf":
		return function (abilities) {
			return App.MeetsRequirements(abilities, {
				Strength : {
					Minimum : 3,
					Maximum : 18
				},
				Dexterity : {
					Minimum : 6,
					Maximum : 18
				},
				Constitution : {
					Minimum : 6,
					Maximum : 18
				},
				Intelligence : {
					Minimum : 4,
					Maximum : 18
				},
				Wisdom : {
					Minimum : 3,
					Maximum : 18
				},
				Charisma : {
					Minimum : 3,
					Maximum : 18
				}
			});
		};
	case "Halfling":
		return function (abilities) {
			return App.MeetsRequirements(abilities, {
				Strength : {
					Minimum : 7,
					Maximum : 18
				},
				Dexterity : {
					Minimum : 7,
					Maximum : 18
				},
				Constitution : {
					Minimum : 10,
					Maximum : 18
				},
				Intelligence : {
					Minimum : 6,
					Maximum : 18
				},
				Wisdom : {
					Minimum : 3,
					Maximum : 17
				},
				Charisma : {
					Minimum : 3,
					Maximum : 18
				}
			});
		};		
	}
};

App.GetAvailableRaces = function (abilities) {
	var availableRaces = LINQ.GetCollection(["Human", "Dwarf", "Elf", "Gnome", "HalfElf", "Halfling"]);
	return availableRaces.Where(function (r) {
		App.MeetsRacialRequirements(r);
	});

App.GetRacialAdjustments = function(race, abilities) {
	switch (race) {
		case "Human": 
			return abilities;
		case "HalfElf":
			return abilities;
		case "Dwarf":
			abilities.Constitution = abilities.Constitution + 1;
			abilities.Charisma = abilities.Charisma - 1;
			return abilities;
		case "Elf":
			abilities.Dexterity = abilities.Dexterity + 1;
			abilities.Constitution = abilities.Constitution - 1;
			return abilities;
		case "Gnome":
			abilities.Intelligence = abilities.Intelligence + 1;
			abilities.Wisdom = abilities.Wisdom - 1;
			return abilities;
		case "Halfling":
			abilities.Dexterity = abilities.Dexterity + 1;
			abilities.Strength = abilities.Strength - 1;
			return abilities;
	}
};