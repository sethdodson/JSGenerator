App.GetStartingAge = function (race) {
    "use strict";
    switch (race) {
    case "Dwarf":
        return App.Roll(5, 6) + 40;
    case "Elf":
        return App.Roll(5, 6) + 100;
    case "Gnome":
        return App.Roll(3, 12) + 60;
    case "HalfElf":
        return App.Roll(1, 6) + 15;
    case "Halfling":
        return App.Roll(3, 4) + 20;
    case "Human":
        return App.Roll(1, 4) + 15;
    default:
        throw "Cannot get starting age for " + race;
    }
};

App.GetAgeClass = function (race, age) {
    "use strict";
    var ageClass = function (ageMaximums) {
        if (age < ageMaximums.Young) {
            return "Young";
        }
        if (age < ageMaximums.MiddleAge) {
            return "MiddleAge";
        }
        if (age < ageMaximums.OldAge) {
            return "OldAge";
        }
        return "Venerable";
    };
    switch (race) {
    case "Dwarf":
        return ageClass({
            Young : 125,
            MiddleAge : 167,
            OldAge : 250
        });
    case "Elf":
        return ageClass({
            Young : 175,
            MiddleAge : 233,
            OldAge : 350
        });
    case "Gnome":
        return ageClass({
            Young : 100,
            MiddleAge : 133,
            OldAge : 200
        });
    case "HalfElf":
        return ageClass({
            Young : 62,
            MiddleAge : 83,
            OldAge : 125
        });
    case "Halfling":
        return ageClass({
            Young : 50,
            MiddleAge : 67,
            OldAge : 100
        });
    case "Human":
        return ageClass({
            Young : 45,
            MiddleAge : 60,
            OldAge : 90
        });
    default:
        throw "Cannot get age class for " + race;
    }
};

App.ModifyForAgingEffects = function (abilities, race, age) {
    "use strict";
    switch (App.GetAgeClass(race, age)) {
    case "Young":
        return abilities;
    case "MiddleAge":
        abilities.Strength = abilities.Strength - 1;
        abilities.Constitution = abilities.Constitution - 1;
        abilities.Intelligence = abilities.Intelligence + 1;
        abilities.Wisdom = abilities.Wisdom + 1;
        return abilities;
    case "OldAge":
        abilities.Strength = abilities.Strength - 3;
        abilities.Dexterity = abilities.Dexterity - 2;
        abilities.Constitution = abilities.Constitution - 2;
        abilities.Wisdom = abilities.Wisdom + 2;
        return abilities;
    case "Venerable":
        abilities.Strength = abilities.Strength - 4;
        abilities.Dexterity = abilities.Dexterity - 3;
        abilities.Constitution = abilities.Constitution - 3;
        abilities.Intelligence = abilities.Intelligence + 2;
        abilities.Wisdom = abilities.Wisdom + 3;
        return abilities;
    }
};