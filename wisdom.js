App.GetMagicalDefenseAdjustment = function (wisdom) {
    "use strict";
    if (wisdom === 1) {
        return -6;
    }
    if (wisdom < 6) {
        return wisdom - 6;
    }
    if (wisdom === 6 || wisdom === 7) {
        return -1;
    }
    if (wisdom < 15) {
        return 0;
    }
    if (wisdom < 19) {
        return wisdom - 14;
    }
    return 5;
};

App.GetBonusSpells = function (wisdom) {
    "use strict";
    var bonusSpells = LINQ.GetCollection([]),
        accumulateBonus = function (wis) {
            switch (wis) {
            case 13:
                bonusSpells.Add(1);
                break;
            case 14:
                bonusSpells.Add(1);
                accumulateBonus(13);
                break;
            case 15:
                bonusSpells.Add(2);
                accumulateBonus(14);
                break;
            case 16:
                bonusSpells.Add(2);
                accumulateBonus(15);
                break;
            case 17:
                bonusSpells.Add(3);
                accumulateBonus(16);
                break;
            case 18:
                bonusSpells.Add(4);
                accumulateBonus(17);
                break;
            case 19:
                bonusSpells.AddRange([1, 3]);
                accumulateBonus(18);
                break;
            case 20:
                bonusSpells.AddRange([2, 4]);
                accumulateBonus(19);
                break;
            case 21:
                bonusSpells.AddRange([3, 5]);
                accumulateBonus(20);
                break;
            case 22:
                bonusSpells.AddRange([4, 5]);
                accumulateBonus(21);
                break;
            case 23:
                bonusSpells.AddRange([1, 6]);
                accumulateBonus(22);
                break;
            case 24:
                bonusSpells.AddRange([5, 6]);
                accumulateBonus(23);
                break;
            case 25:
                bonusSpells.AddRange([6, 7]);
                accumulateBonus(24);
                break;
            }
        };
    accumulateBonus(wisdom);
    return bonusSpells;
};

App.GetChanceOfSpellFailure = function (wisdom) {
    "use strict";
    if (wisdom === 1) {
        return 80;
    }
    if (wisdom === 2) {
        return 60;
    }
    if (wisdom < 13) {
        return (13 - wisdom) * 5;
    }
    return 0;
};

App.GetSpellImmunity = function (wisdom) {
    "use strict";
    var immunities = LINQ.GetCollection([]),
        getImmunities = function (wis) {
            switch (wis) {
                case 19:
                    immunities.AddRange(["cause fear", "charm person", "command", "friends", "hypnotism"]);
                    break;
                case 20:
                    immunities.AddRange(["forget", "hold person", "ray of enfeeblement", "scare"]);
                    getImmunities(19);
                    break;
                case 21:
                    immunities.AddRange(["fear"]);
                    getImmunities(20);
                    break;
                case 22:
                    immunities.AddRange(["charm monster", "confusion", "emotion", "fumble", "suggestion"]);
                    getImmunities(21);
                    break;
                case 23:
                    immunities.AddRange(["chaos", "feeblemind", "hold monster", "magic jar", "quest"]);
                    getImmunities(22);
                    break;
                case 24:
                    immunities.AddRange(["geas", "mass suggestion", "rod of rulership"]);
                    getImmunities(23);
                    break;
                case 25:
                    immunities.AddRange(["antipathy/sympathy", "death spell", "mass charm"]);
                    getImmunities(24);
                    break;
            }
        };
    getImmunities(wisdom);
    return immunities;
};