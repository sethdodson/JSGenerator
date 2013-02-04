App.GetNewCharacter = function (level) {
    var abilities = App.RollAbilityScores(),
        availableRaces = App.GetAvailableRaces(abilities),
        race = availableRaces.Random(),
        age = App.GetStartingAge(race),
        adjustedAbilities = App.ModifyForAgingEffects(abilities, race, age),
        characterClasses = App.GetAvailableClasses(race, adjustedAbilities),
        chosenClass = App.PickClass(characterClasses),
        alignment = chosenClass.AvailableAlignments.Random(),
        sex = App.ChooseSex(),
        height = App.GetHeight(race, sex),
        weight = App.GetWeight(race, sex),
        hitPointBonus = App.GetHitPointAdjustment(adjustedAbilities.Constitution, chosenClass),
        charExceptionalStrength = App.GetExceptionalStrength(chosenClass, adjustedAbilities.Strength, race);
    return {
        Alignment : alignment,
        Race : race,
        Class : chosenClass,
        Level : level,
        Abilities : adjustedAbilities,
        ExceptionalStrength : charExceptionalStrength,
        Sex : sex,
        Age : age,
        Height : height,
        Weight : weight,
        HitProbability : App.GetHitProbability(adjustedAbilities.Strength, charExceptionalStrength),
        DamageAdjustment : App.GetDamageAdjustment(adjustedAbilities.Strength, charExceptionalStrength),
        WeightAllow : App.GetWeightAllow(adjustedAbilities.Strength, charExceptionalStrength),
        MaxPress : App.GetMaxPress(adjustedAbilities.Strength, charExceptionalStrength),
        OpenDoors : App.GetOpenDoors(adjustedAbilities.Strength, charExceptionalStrength),
        OpenHardenedDoors : App.GetOpenHardenedDoors(adjustedAbilities.Strength, charExceptionalStrength),
        BendBars : App.GetBendBars(adjustedAbilities.Strength, charExceptionalStrength),
        DexReactionAdjustment : App.GetDexReactionAdjustment(adjustedAbilities.Dexterity),
        MissileAttackAdjustment : App.GetMissileAttackAdjustment(adjustedAbilities.Dexterity),
        DefensiveAdjustment : App.GetDefensiveAdjustment(adjustedAbilities.Dexterity),
        HitPointAdjustment : hitPointBonus,
        SystemShock : App.GetSystemShock(adjustedAbilities.Constitution),
        ResurrectionSurvival : App.GetResurrectionSurvival(adjustedAbilities.Constitution),
        PoisonSaveBonus : App.GetPoisonSaveBonus(adjustedAbilities.Constitution),
        Regeneration : App.GetRegeneration(adjustedAbilities.Constitution),
        NumberOfLanguages : App.GetNumberOfLanguages(adjustedAbilities.Intelligence),
        MaxSpellLevel : App.GetMaxSpellLevel(adjustedAbilities.Intelligence),
        ChanceToLearnSpell : App.GetChanceToLearnSpell(adjustedAbilities.Intelligence),
        MaxNumberOfSpellsPerLevel : App.GetMaxNumberOfSpellsPerLevel(adjustedAbilities.Intelligence),
        IllusionImmunity : App.GetIllusionImmunity(adjustedAbilities.Intelligence)
    };
};