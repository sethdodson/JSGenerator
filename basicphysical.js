App.ChooseSex = function () {
    "use strict";
    var dieRoll = App.Roll(1, 2);
    if (dieRoll === 1) {
        return "Male";
    }
    return "Female";
};

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
    "use strict";
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
    default:
        throw "Cannot get weight for " + raceAndSex;
    }
};

App.GetHairColor = function (race, age) {
    "use strict";
    var hairColors = LINQ.GetCollection(["Black", "Brown", "Blond", "Auburn", "Chestnut", "Red"]),
        ageClass = App.GetAgeClass(race, age);
    if (ageClass === "Young") {
        return hairColors.Random();
    }
    if (ageClass === "MiddleAge") {
        return "Gray-" + hairColors.Random();
    }
    if (ageClass === "OldAge") {
        return "Gray";
    }
    if (ageClass === "Venerable") {
        return "White";
    }
};

App.GetEyeColor = function () {
    "use strict";
    var eyeColors = LINQ.GetCollection(["Amber", "Blue", "Brown", "Gray", "Green", "Hazel"]);
    return eyeColors.Random();
};