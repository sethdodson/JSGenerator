App.GetExceptionalStrength = function (characterClass, strength, race) {
    "use strict";
    if (race === "Halfling") {
        return 0;
    }
    if (characterClass.ClassType !== "Warrior") {
        return 0;
    }
    if (strength !== 18) {
        return 0;
    }
    return App.Roll(1, 100);
};

App.GetHitProbability = function (strength, exceptionalStrength) {
    "use strict";
    if (strength === 1) {
        return -5;
    }
    if (strength === 2 || strength === 3) {
        return -3;
    }
    if (strength === 4 || strength === 5) {
        return -2;
    }
    if (strength === 6 || strength === 7) {
        return -1;
    }
    if (strength < 17) {
        return 0;
    }
    if (strength === 17) {
        return 1;
    }
    if (strength === 18 && exceptionalStrength < 51) {
        return 1;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 2;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 3;
    }
    if (strength === 19 || strength === 20) {
        return 3;
    }
    if (strength === 21 || strength === 22) {
        return 4;
    }
    if (strength === 23) {
        return 5;
    }
    if (strength === 24) {
        return 6;
    }
    if (strength === 25) {
        return 7;
    }
    throw "Impossible strength";
};

App.GetDamageAdjustment = function (strength, exceptionalStrength) {
    "use strict";
    if (strength === 1) {
        return -4;
    }
    if (strength === 2) {
        return -2;
    }
    if (strength < 6) {
        return -1;
    }
    if (strength < 16) {
        return 0;
    }
    if (strength < 18) {
        return 1;
    }
    if (strength === 18 && exceptionalStrength === 0) {
        return 2;
    }
    if (strength === 18 && exceptionalStrength < 76) {
        return 3;
    }
    if (strength === 18 && exceptionalStrength < 91) {
        return 4;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 5;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 6;
    }
    if (strength < 25) {
        return strength - 12;
    }
    if (strength === 25) {
        return 14;
    }
    throw "Impossible strength";
};

App.GetWeightAllow = function (strength, exceptionalStrength) {
    "use strict";
    if (strength < 3) {
        return 1;
    }
    if (strength === 3) {
        return 5;
    }
    if (strength < 6) {
        return 10;
    }
    if (strength < 8) {
        return 20;
    }
    if (strength < 10) {
        return 35;
    }
    if (strength < 12) {
        return 40;
    }
    if (strength < 14) {
        return 45;
    }
    if (strength < 16) {
        return 55;
    }
    if (strength === 16) {
        return 70;
    }
    if (strength === 17) {
        return 85;
    }
    if (strength === 18 && exceptionalStrength === 0) {
        return 110;
    }
    if (strength === 18 && exceptionalStrength < 51) {
        return 135;
    }
    if (strength === 18 && exceptionalStrength < 76) {
        return 160;
    }
    if (strength === 18 && exceptionalStrength < 91) {
        return 185;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 235;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 335;
    }
    if (strength === 19) {
        return 485;
    }
    if (strength === 20) {
        return 535;
    }
    if (strength === 21) {
        return 635;
    }
    if (strength === 22) {
        return 785;
    }
    if (strength === 23) {
        return 935;
    }
    if (strength === 24) {
        return 1235;
    }
    if (strength === 25) {
        return 1535;
    }
    throw "Impossible strength";
};

App.GetMaxPress = function (strength, exceptionalStrength) {
    "use strict";
    if (strength === 1) {
        return 3;
    }
    if (strength === 2) {
        return 5;
    }
    if (strength === 3) {
        return 10;
    }
    if (strength < 6) {
        return 25;
    }
    if (strength < 8) {
        return 55;
    }
    if (strength < 10) {
        return 90;
    }
    if (strength < 12) {
        return 115;
    }
    if (strength < 14) {
        return 140;
    }
    if (strength < 16) {
        return 170;
    }
    if (strength === 16) {
        return 195;
    }
    if (strength === 17) {
        return 220;
    }
    if (strength === 18 && exceptionalStrength === 0) {
        return 255;
    }
    if (strength === 18 && exceptionalStrength < 51) {
        return 280;
    }
    if (strength === 18 && exceptionalStrength < 76) {
        return 305;
    }
    if (strength === 18 && exceptionalStrength < 91) {
        return 330;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 380;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 480;
    }
    if (strength === 19) {
        return 640;
    }
    if (strength === 20) {
        return 700;
    }
    if (strength === 21) {
        return 810;
    }
    if (strength === 22) {
        return 970;
    }
    if (strength === 23) {
        return 1130;
    }
    if (strength === 24) {
        return 1440;
    }
    if (strength === 25) {
        return 1750;
    }
    throw "Impossible strength";
};

App.GetOpenDoors = function (strength, exceptionalStrength) {
    "use strict";
    if (strength < 3) {
        return 1;
    }
    if (strength === 3) {
        return 2;
    }
    if (strength < 6) {
        return 3;
    }
    if (strength < 8) {
        return 4;
    }
    if (strength < 10) {
        return 5;
    }
    if (strength < 12) {
        return 6;
    }
    if (strength < 14) {
        return 7;
    }
    if (strength < 16) {
        return 8;
    }
    if (strength === 16) {
        return 9;
    }
    if (strength === 17) {
        return 10;
    }
    if (strength === 18 && exceptionalStrength === 0) {
        return 11;
    }
    if (strength === 18 && exceptionalStrength < 51) {
        return 12;
    }
    if (strength === 18 && exceptionalStrength < 76) {
        return 14;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 15;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 16;
    }
    if (strength === 19) {
        return 16;
    }
    if (strength < 22) {
        return 17;
    }
    if (strength < 24) {
        return 18;
    }
    if (strength < 26) {
        return 19;
    }
    throw "Impossible strength";
};

App.GetOpenHardenedDoors = function (strength, exceptionalStrength) {
    "use strict";
    if (strength < 18) {
        return 0;
    }
    if (strength === 18 && exceptionalStrength < 91) {
        return 0;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 3;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 6;
    }
    if (strength === 19) {
        return 8;
    }
    if (strength === 20) {
        return 10;
    }
    if (strength === 21) {
        return 12;
    }
    if (strength === 22) {
        return 14;
    }
    if (strength === 23) {
        return 16;
    }
    if (strength === 24) {
        return 17;
    }
    if (strength === 25) {
        return 18;
    }
    throw "Impossible strength";
};

App.GetBendBars = function (strength, exceptionalStrength) {
    "use strict";
    if (strength < 8) {
        return 0;
    }
    if (strength < 10) {
        return 1;
    }
    if (strength < 12) {
        return 2;
    }
    if (strength < 14) {
        return 4;
    }
    if (strength < 16) {
        return 7;
    }
    if (strength === 16) {
        return 10;
    }
    if (strength === 17) {
        return 13;
    }
    if (strength === 18 && exceptionalStrength === 0) {
        return 16;
    }
    if (strength === 18 && exceptionalStrength < 51) {
        return 20;
    }
    if (strength === 18 && exceptionalStrength < 76) {
        return 25;
    }
    if (strength === 18 && exceptionalStrength < 91) {
        return 30;
    }
    if (strength === 18 && exceptionalStrength < 100) {
        return 35;
    }
    if (strength === 18 && exceptionalStrength === 100) {
        return 40;
    }
    if (strength === 19) {
        return 50;
    }
    if (strength === 20) {
        return 60;
    }
    if (strength === 21) {
        return 70;
    }
    if (strength === 22) {
        return 80;
    }
    if (strength === 23) {
        return 90;
    }
    if (strength === 24) {
        return 95;
    }
    if (strength === 25) {
        return 99;
    }
    throw "Impossible strength";
};