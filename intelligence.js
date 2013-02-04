App.GetNumberOfLanguages = function (intelligence) {
    "use strict";
    if (intelligence === 1) {
        return 0;
    }
    if (intelligence < 9) {
        return 1;
    }
    if (intelligence < 12) {
        return 2;
    }
    if (intelligence === 12 || intelligence === 13) {
        return 3;
    }
    if (intelligence === 14 || intelligence === 15) {
        return 4;
    }
    if (intelligence < 24) {
        return intelligence - 11;
    }
    if (intelligence === 24) {
        return 15;
    }
    if (intelligence === 25) {
        return 20;
    }
    throw "Impossible intelligence";
};

App.GetMaxSpellLevel = function (intelligence) {
    "use strict";
    if (intelligence < 9) {
        return 0;
    }
    if (intelligence === 9) {
        return 4;
    }
    if (intelligence === 10 || intelligence === 11) {
        return 5;
    }
    if (intelligence === 12 || intelligence === 13) {
        return 6;
    }
    if (intelligence === 14 || intelligence === 15) {
        return 7;
    }
    if (intelligence === 16 || intelligence === 17) {
        return 8;
    }
    return 9;
};

App.GetChanceToLearnSpell = function (intelligence) {
    "use strict";
    if (intelligence < 9) {
        return 0;
    }
    if (intelligence < 18) {
        return (intelligence - 2) * 5;
    }
    if (intelligence === 18) {
        return 85;
    }
    if (intelligence < 25) {
        return 95 + intelligence - 19;
    }
    if (intelligence === 25) {
        return 100;
    }
    throw "Impossible intelligence";
};

App.GetMaxNumberOfSpellsPerLevel = function (intelligence) {
    "use strict";
    if (intelligence < 9) {
        return 0;
    }
    if (intelligence === 9) {
        return 6;
    }
    if (intelligence < 13) {
        return 7;
    }
    if (intelligence === 13 || intelligence === 14) {
        return 9;
    }
    if (intelligence === 15 || intelligence === 16) {
        return 11;
    }
    if (intelligence === 17) {
        return 14;
    }
    if (intelligence === 18) {
        return 18;
    }
    if (intelligence > 18) {
        return "All";
    }
};

App.GetIllusionImmunity = function (intelligence) {
    "use strict";
    if (intelligence < 19) {
        return 0;
    }
    return intelligence - 18;
};