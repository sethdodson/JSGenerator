App.GetDexterityReactionAdjustment = function (dexterity) {
    "use strict";
    if (dexterity === 1) {
        return -6;
    }
    if (dexterity === 2) {
        return -4;
    }
    if (dexterity === 3) {
        return -3;
    }
    if (dexterity === 4) {
        return -2;
    }
    if (dexterity === 5) {
        return -1;
    }
    if (dexterity < 16) {
        return 0;
    }
    if (dexterity === 16) {
        return 1;
    }
    if (dexterity === 17 || dexterity === 18) {
        return 2;
    }
    if (dexterity === 19 || dexterity === 20) {
        return 3;
    }
    if (dexterity < 24) {
        return 4;
    }
    if (dexterity < 26) {
        return 5;
    }
    throw "Impossible dexterity";
};

App.GetMissileAttackAdjustment = function (dexterity) {
    "use strict";
    if (dexterity === 1) {
        return -6;
    }
    if (dexterity === 2) {
        return -4;
    }
    if (dexterity === 3) {
        return -3;
    }
    if (dexterity === 4) {
        return -2;
    }
    if (dexterity === 5) {
        return -1;
    }
    if (dexterity < 16) {
        return 0;
    }
    if (dexterity === 16) {
        return 1;
    }
    if (dexterity === 17 || dexterity === 18) {
        return 2;
    }
    if (dexterity === 19 || dexterity === 20) {
        return 3;
    }
    if (dexterity < 24) {
        return 4;
    }
    if (dexterity === 24 || dexterity === 25) {
        return 5;
    }
    throw "Impossible dexterity";
};

App.GetDefensiveAdjustment = function (dexterity) {
    "use strict";
    if (dexterity < 3) {
        return 5;
    }
    if (dexterity === 3) {
        return 4;
    }
    if (dexterity === 4) {
        return 3;
    }
    if (dexterity === 5) {
        return 2;
    }
    if (dexterity === 6) {
        return 1;
    }
    if (dexterity < 15) {
        return 0;
    }
    if (dexterity === 15) {
        return -1;
    }
    if (dexterity === 16) {
        return -2;
    }
    if (dexterity === 17) {
        return -3;
    }
    if (dexterity < 21) {
        return -4;
    }
    if (dexterity < 24) {
        return -5;
    }
    if (dexterity === 24 || dexterity === 25) {
        return -6;
    }
    throw "Impossible dexterity";
};