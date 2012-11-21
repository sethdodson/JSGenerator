App.GetNewCharacter = function (level) {
    var abilities = App.RollAbilities(),
        availableRaces = App.GetAvailableRaces(abilities),
        race = availableRaces.Random(),
        age = App.GetStartingAge(race),
        adjustedAbilities = App.ModifyForAgingEffects(abilities, race, age),
        characterClasses = App.GetAvailableClasses(race, adjustedAbilities);
};