App.GetHitPointAdjustment = function (constitution, characterClass) {
    "use strict";
    if (constitution === 1) {
        return -3;
    }
    if (constitution < 4) {
        return -2;
    }
    if (constitution < 7) {
        return -1;
    }
    if (constitution < 15) {
        return 0;
    }
    if (constitution === 15) {
        return 1;
    }
    if (constitution === 16) {
        return 2;
    }
    if (characterClass.ClassType !== "Warrior") {
        return 2;
    }
    if (constitution === 17) {
        return 3;
    }
    if (constitution === 18) {
        return 4;
    }
    if (constitution < 21) {
        return 5;
    }
    if (constitution < 24) {
        return 6;
    }
    if (constitution < 26) {
        return 7;
    }
    throw "Impossible constitution";
};

App.GetHitPointMinimum = function (constitution, characterClass) {
    "use strict";
    if (constitution < 20) {
        return 1;
    }
    if (characterClass.ClassType !== "Warrior") {
        return 1;
    }
    if (constitution === 20) {
        return 2;
    }
    if (constitution < 23) {
        return 3;
    }
    if (constitution < 26) {
        return 4;
    }
};

App.GetSystemShock = function (constitution) {
    "use strict";
    if (constitution < 14) {
        return (constitution + 4) * 5;
    }
    if (constitution === 14) {
        return 88;
    }
    if (constitution === 15) {
        return 90;
    }
    if (constitution === 16) {
        return 95;
    }
    if (constitution === 17) {
        return 97;
    }
    if (constitution < 25) {
        return 99;
    }
    if (constitution === 25) {
        return 100;
    }
    throw "Impossible constitution";
};

App.GetResurrectionSurvival = function (constitution) {
    "use strict";
    if (constitution < 14) {
        return (constitution + 5) * 5;
    }
    if (constitution < 18) {
        return ((constitution - 13) * 2) + 90;
    }
    return 100;
};

App.GetPoisonSaveBonus = function (constitution) {
    "use strict";
    if (constitution === 1) {
        return -2;
    }
    if (constitution === 2) {
        return -1;
    }
    if (constitution < 19) {
        return 0;
    }
    if (constitution === 19 || constitution === 20) {
        return 1;
    }
    if (constitution === 21 || constitution === 22) {
        return 2;
    }
    if (constitution === 23 || constitution === 24) {
        return 3;
    }
    return 4;
};

App.GetRegeneration = function (constitution) {
    "use strict";
    if (constitution < 20) {
        return {
            HitPoints : 0,
            Turns : 1
        };
    }
    return {
        HitPoints : 1,
        Turns : 26 - constitution
    };
};