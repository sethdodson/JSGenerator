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
    var accumulateBonus = function (acc, wis) {

    };
};