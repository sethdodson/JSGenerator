App.MeetsRacialRequirements = function (race, abilities) {
	"use strict";
	switch (race) {
	case "Human":
		return true;
	case "Dwarf":
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
	case "Elf":
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
	case "Gnome":
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
	case "HalfElf":
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
	case "Halfling":
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
	default:
		throw "Cannot tell if " + race + " meets requirements.";
	}
};

App.GetAvailableRaces = function (abilities) {
	"use strict";
	var availableRaces = LINQ.GetCollection(["Human", "Dwarf", "Elf", "Gnome", "HalfElf", "Halfling"]);
	return availableRaces.Where(function (r) {
		App.MeetsRacialRequirements(r);
	});
};

App.GetRacialAdjustments = function (race, abilities) {
	"use strict";
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
	default:
		throw "Cannot get abilities for " + race;
	}
};