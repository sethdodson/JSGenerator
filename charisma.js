App.GetMaximumNumberOfHenchmen = function (charisma) {
    "use strict";
    if (charisma === 1) {
        return 0;
    }
    if (charisma < 5) {
        return 1;
    }
    if (charisma === 5 || charisma === 6) {
        return 2;
    }
    if (charisma === 7 || charisma === 8) {
        return 3;
    }
    if (charisma < 12) {
        return 4;
    }
    if (charisma === 12 || charisma === 13) {
        return 5;
    }
    if (charisma === 14) {
        return 6;
    }
    if (charisma === 15) {
        return 7;
    }
    if (charisma === 16) {
        return 8;
    }
    return (charisma - 15) * 5;
};

App.GetLoyaltyBase = function (charisma) {
    "use strict";
    if (charisma < 10) {
        return charisma - 9;
    }
    if (charisma < 14) {
        return 0;
    }
    if (charisma === 14) {
        return 1;
    }
    if (charisma === 15) {
        return 3;
    }
    if (charisma < 25) {
        return (charisma - 14) * 2;
    }
    if (charisma === 25) {
        return 20;
    }
    throw "Impossible charisma";
};

App.GetCharismaReactionAdjustment = function (charisma) {
    "use strict";
    if (charisma < 9) {
        return charisma - 8;
    }
    if (charisma < 13) {
        return 0;
    }
    if (charisma === 13) {
        return 1;
    }
    if (charisma === 14) {
        return 2;
    }
    if (charisma === 15) {
        return 3;
    }
    return charisma - 11;
};