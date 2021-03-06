App.MeetsRequirements = function (abilities, requirements) {
    "use strict";
    var meetsRequirement = function (ability, requirement) {
        return ability >= requirement.Minimum && ability <= requirement.Maximum;
    },
        strengthOK = meetsRequirement(abilities.Strength, requirements.Strength),
        dexterityOK = meetsRequirement(abilities.Dexterity, requirements.Dexterity),
        constitutionOK = meetsRequirement(abilities.Constitution, requirements.Constitution),
        intelligenceOK = meetsRequirement(abilities.Intelligence, requirements.Intelligence),
        wisdomOK = meetsRequirement(abilities.Wisdom, requirements.Wisdom),
        charismaOK = meetsRequirement(abilities.Charisma, requirements.Charisma);
    return strengthOK && dexterityOK && constitutionOK && intelligenceOK && wisdomOK && charismaOK;
};

App.RollAbilityScores = function () {
    var getAbility = function () {
        return App.Roll(3, 6);
    };
    return {
        Strength : getAbility(),
        Dexterity : getAbility(),
        Constitution : getAbility(),
        Intelligence : getAbility(),
        Wisdom : getAbility(),
        Charisma : getAbility()
    };
};