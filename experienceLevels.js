App.GetHitPoints = function (classType, level, hitpointBonus) {
    "use strict";
    if (classType === "Warrior") {
        if (level < 10) {
            return App.Roll(level, 10) + hitpointBonus;
        }
        return App.Roll(9, 10) + ((level - 9) * 3) + hitpointBonus;
    }
    if (classType === "Wizard") {
        if (level < 11) {
            return App.Roll(level, 4) + hitpointBonus;
        }
        return App.Roll(10, 4) + level - 10 + hitpointBonus;
    }
    if (classType === "Priest") {
        if (level < 10) {
            return App.Roll(level, 8) + hitpointBonus;
        }
        return App.Roll(9, 8) + ((level - 9) * 2) + hitpointBonus;
    }
    if (classType === "Rogue") {
        if (level < 11) {
            return App.Roll(level, 6) + hitpointBonus;
        }
        return App.Roll(10, 6) + ((level - 10) * 2) + hitpointBonus;
    }
};

App.GetExperience = function (characterClass, level) {
    "use strict";
    if (level === 1) {
        return 0;
    }
    if (characterClass.Name === "Fighter" || characterClass.Name === "Paladin") {
        if (level < 8) {
            return Math.pow(2, (level - 1)) * 1000;
        }
        if (level === 8) {
            return 125000;
        }
        return (level - 8) * 250000;
    }
    if (characterClass.Name === "Ranger") {
        if (level === 2) {
            return 2250;
        }
        if (level === 3) {
            return 4500;
        }
        if (level === 4) {
            return 9000;
        }
        if (level === 5) {
            return 18000;
        }
        if (level === 6) {
            return 36000;
        }
        if (level === 7) {
            return 75000;
        }
        if (level === 8) {
            return 150000;
        }
        return (level - 8) * 300000;
    }
    if (characterClass.ClassType === "Wizard") {
        switch (level) {
        case 2:
            return 2500;
        case 3:
            return 5000;
        case 4:
            return 10000;
        case 5:
            return 20000;
        case 6:
            return 40000;
        case 7:
            return 60000;
        case 8:
            return 90000;
        case 9:
            return 135000;
        case 10:
            return 250000;
        case 11:
            return 375000;
        case 12:
            return 750000;
        case 13:
            return 1125000;
        case 14:
            return 1500000;
        case 15:
            return 1875000;
        case 16:
            return 2250000;
        case 17:
            return 2625000;
        case 18:
            return 3000000;
        case 19:
            return 3375000;
        case 20:
            return 3750000;
        }
    }
    if (characterClass.Name === "Cleric") {
        switch (level) {
        case 2:
            return 1500;
        case 3:
            return 3000;
        case 4:
            return 6000;
        case 5:
            return 13000;
        case 6:
            return 27500;
        case 7:
            return 55000;
        case 8:
            return 110000;
        case 9:
            return 225000;
        case 10:
            return 450000;
        case 11:
            return 675000;
        case 12:
            return 900000;
        case 13:
            return 1125000;
        case 14:
            return 1350000;
        case 15:
            return 1575000;
        case 16:
            return 1800000;
        case 17:
            return 2025000;
        case 18:
            return 2250000;
        case 19:
            return 2475000;
        case 20:
            return 2700000;
        }
    }
    if (characterClass.Name === "Druid") {
        switch (level) {
        case 2:
            return 2000;
        case 3:
            return 4000;
        case 4:
            return 7500;
        case 5:
            return 12500;
        case 6:
            return 20000;
        case 7:
            return 35000;
        case 8:
            return 60000;
        case 9:
            return 90000;
        case 10:
            return 125000;
        case 11:
            return 200000;
        case 12:
            return 300000;
        case 13:
            return 750000;
        case 14:
            return 1500000;
        case 15:
            return 3000000;
        case 16:
            return 3500000;
        case 17:
            return 4000000;
        case 18:
            return 4500000;
        case 19:
            return 5000000;
        case 20:
            return 5500000;
        }
    }
    if (characterClass.ClassType === "Rogue") {
        switch (level) {
        case 2:
            return 1250;
        case 3:
            return 2500;
        case 4:
            return 5000;
        case 5:
            return 10000;
        case 6:
            return 20000;
        case 7:
            return 40000;
        case 8:
            return 70000;
        case 9:
            return 110000;
        case 10:
            return 160000;
        case 11:
            return 220000;
        case 12:
            return 440000;
        case 13:
            return 660000;
        case 14:
            return 880000;
        case 15:
            return 1100000;
        case 16:
            return 1320000;
        case 17:
            return 1540000;
        case 18:
            return 1760000;
        case 19:
            return 1980000;
        case 20:
            return 2200000;
        }
    }
};