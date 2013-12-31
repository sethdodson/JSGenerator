App.GetViewModel = function () {
    "use strict";
    var viewModel = {
            Alignment : ko.observable(""),
            Race : ko.observable(""),
            Class : ko.observable(""),
            Level : ko.observable(0),
            Strength : ko.observable(""),
            Dexterity : ko.observable(0),
            Constitution : ko.observable(0),
            Intelligence : ko.observable(0),
            Wisdom : ko.observable(0),
            Charisma : ko.observable(0),
            Sex : ko.observable(""),
            Age : ko.observable(0),
            Height : ko.observable(""),
            Weight : ko.observable(0),
            HitProbability : ko.observable(0),
            DamageAdjustment : ko.observable(0),
            WeightAllow : ko.observable(0),
            MaxPress : ko.observable(0),
            OpenDoors : ko.observable(0),
            OpenHardenedDoors : ko.observable(0),
            BendBars : ko.observable(0),
            DexReactionAdjustment : ko.observable(0),
            MissileAttackAdjustment : ko.observable(0),
            DefensiveAdjustment : ko.observable(0),
            HitPointAdjustment : ko.observable(0),
            SystemShock : ko.observable(0),
            ResurrectionSurvival : ko.observable(0),
            PoisonSaveBonus : ko.observable(0),
            Regeneration : ko.observable(""),
            NumberOfLanguages : ko.observable(0),
            MaxSpellLevel : ko.observable(0),
            ChanceToLearnSpell : ko.observable(0),
            MaxNumberOfSpellsPerLevel : ko.observable(""),
            IllusionImmunity : ko.observable(0),
            MagicalDefenseAdjustment : ko.observable(0),
            BonusPriestSpells : ko.observable(0),
            ChanceOfSpellFailure : ko.observable(0),
            MaximumNumberOfHenchmen : ko.observable(0),
            LoyaltyBase : ko.observable(0),
            CharismaReactionAdjustment : ko.observable(0),
            HitPoints : ko.observable(0),
            SpellImmunity : ko.observable(0),
            HairColor : ko.observable(""),
            EyeColor : ko.observable(""),
            CharacterName : ko.observable(""),
            CharacterNameInputVisibility : ko.observable(""),
            CharacterNameDisplayVisibility : ko.observable("")
        };
        viewModel.Generate = function () {
            var character = App.GetNewCharacter(1),
                displayStrength = function () {
                    if (character.Abilities.ExceptionalStrength === 0) {
                        return character.Abilities.Strength;
                    }
                    return character.Abilities.Strength + "/" + character.Abilities.ExceptionalStrength;
                },
                displayRegeneration = function () {
                    if (character.Regeneration.HitPoints === 0) {
                        return "Nil";
                    }
                    if (character.Regeneration.Turns === 1) {
                        return "1/1 turn";
                    }
                    return character.Regeneration.HitPoints + "/" + character.Regeneration.Turns + " turns";
                };
            viewModel.Alignment(character.Alignment.Legality + "/" + character.Alignment.Morality);
            viewModel.Race(character.Race);
            viewModel.Class(character.Class.Name);
            viewModel.Level(1);
            viewModel.Strength(displayStrength());
            viewModel.Dexterity(character.Abilities.Dexterity);
            viewModel.Constitution(character.Abilities.Constitution);
            viewModel.Intelligence(character.Abilities.Intelligence);
            viewModel.Wisdom(character.Abilities.Wisdom);
            viewModel.Charisma(character.Abilities.Charisma);
            viewModel.Sex(character.Sex);
            viewModel.Age(character.Age);
            viewModel.Height(character.Height.Feet + "'" + character.Height.Inches + '"');
            viewModel.Weight(character.Weight);
            viewModel.HitProbability(character.HitProbability);
            viewModel.DamageAdjustment(character.DamageAdjustment);
            viewModel.WeightAllow(character.WeightAllow);
            viewModel.MaxPress(character.MaxPress);
            viewModel.OpenDoors(character.OpenDoors);
            viewModel.OpenHardenedDoors(character.OpenHardenedDoors);
            viewModel.BendBars(character.BendBars);
            viewModel.DexReactionAdjustment(character.DexReactionAdjustment);
            viewModel.MissileAttackAdjustment(character.MissileAttackAdjustment);
            viewModel.DefensiveAdjustment(character.DefensiveAdjustment);
            viewModel.HitPointAdjustment(character.HitPointAdjustment);
            viewModel.SystemShock(character.SystemShock);
            viewModel.ResurrectionSurvival(character.ResurrectionSurvival);
            viewModel.PoisonSaveBonus(character.PoisonSaveBonus);
            viewModel.Regeneration(displayRegeneration());
            viewModel.NumberOfLanguages(character.NumberOfLanguages);
            viewModel.MaxSpellLevel(character.MaxSpellLevel);
            viewModel.ChanceToLearnSpell(character.ChanceToLearnSpell);
            viewModel.MaxNumberOfSpellsPerLevel(character.MaxNumberOfSpellsPerLevel);
            viewModel.IllusionImmunity(character.IllusionImmunity);
            viewModel.MagicalDefenseAdjustment(character.MagicalDefenseAdjustment);
            viewModel.BonusPriestSpells(character.BonusPriestSpells);
            viewModel.ChanceOfSpellFailure(character.ChanceOfSpellFailure);
            viewModel.MaximumNumberOfHenchmen(character.MaximumNumberOfHenchmen);
            viewModel.LoyaltyBase(character.LoyaltyBase);
            viewModel.CharismaReactionAdjustment(character.CharismaReactionAdjustment);
            viewModel.HitPoints(character.HitPoints);
            viewModel.SpellImmunity(character.SpellImmunity);
            viewModel.HairColor(character.HairColor);
            viewModel.EyeColor(character.EyeColor);
            viewModel.CharacterName("test");
            viewModel.CharacterNameInputVisibility("fieldValue");
            viewModel.CharacterNameDisplayVisibility("hiddenField");
        };
    return viewModel;
};

ko.applyBindings(App.GetViewModel());