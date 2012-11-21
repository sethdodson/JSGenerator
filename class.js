﻿App.GetAvailableClasses = (function () {
    "use strict";
    //check all abilities against class minimums
    //to be 
    var meetsMinimums = function (abilities, minimums) {
        return minimums.All(function (minimum) {
            return abilities[minimum.Name] >= minimum.Value;
        });
    },
        getMinimum = function (name, value) {
            return {
                Name : name,
                Value : value
            };
        },
        strMinimum = function (value) {
            return getMinimum("Strength", value);
        },
        dexMinimum = function (value) {
            return getMinimum("Dexterity", value);
        },
        conMinimum = function (value) {
            return getMinimum("Constitution", value);
        },
        intMinimum = function (value) {
            return getMinimum("Intelligence", value);
        },
        wisMinimum = function (value) {
            return getMinimum("Wisdom", value);
        },
        charMinimum = function (value) {
            return getMinimum("Charisma", value);
        },
        alignments = LINQ.GetCollection([{
            Legality : "Lawful",
            Morality : "Good"
        }, {
            Legality : "Lawful",
            Morality : "Neutral"
        }, {
            Legality : "Lawful",
            Morality : "Evil"
        }, {
            Legality : "Neutral",
            Morality : "Good"
        }, {
            Legality : "Neutral",
            Morality : "Neutral"
        }, {
            Legality : "Neutral",
            Morality : "Evil"
        }, {
            Legality : "Chaotic",
            Morality : "Good"
        }, {
            Legality : "Chaotic",
            Morality : "Neutral"
        }, {
            Legality : "Chaotic",
            Morality : "Evil"
        }]),
        fighterMinimums = LINQ.GetCollection([strMinimum(9)]),
        paladinMinimums = LINQ.GetCollection([strMinimum(12), conMinimum(9), wisMinimum(13), charMinimum(17)]),
        rangerMinimums = LINQ.GetCollection([strMinimum(13), dexMinimum(13), conMinimum(14), wisMinimum(14)]),
        mageMinimums = LINQ.GetCollection([intMinimum(9)]),
        abjurerMinimums = LINQ.GetCollection([intMinimum(9), wisMinimum(15)]),
        conjurerMinimums = LINQ.GetCollection([intMinimum(9), conMinimum(15)]),
        divinerMinimums = LINQ.GetCollection([intMinimum(9), wisMinimum(16)]),
        enchanterMinimums = LINQ.GetCollection([intMinimum(9), charMinimum(16)]),
        illusionistMinimums = LINQ.GetCollection([intMinimum(9), dexMinimum(16)]),
        invokerMinimums = LINQ.GetCollection([intMinimum(9), conMinimum(16)]),
        necromancerMinimums = LINQ.GetCollection([intMinimum(9), wisMinimum(16)]),
        transmuterMinimums =  LINQ.GetCollection([intMinimum(9), dexMinimum(15)]),
        clericMinimums = LINQ.GetCollection([wisMinimum(9)]),
        druidMinimums = LINQ.GetCollection([wisMinimum(12), charMinimum(15)]),
        thiefMinimums = LINQ.GetCollection([dexMinimum(9)]),       
        bardMinimums = LINQ.GetCollection([dexMinimum(12), intMinimum(13), charMinimum(15)]),
        prerequisiteValue = function (minimums) {
            return minimums.Select(function (min) {
                return min.Value + 1;
            }).Sum();
        },
        fighter = {
            Name : "Fighter",
            PrimeRequisites : ["Strength"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, fighterMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Dwarf", "Elf", "Gnome", "HalfElf", "Halfling"]),
            Priority : "Mundane",
            PrerequisiteValue : prerequisiteValue(fighterMinimums)
        },
        paladin = {
            Name : "Paladin",
            PrimeRequisites : ["Strength", "Charisma"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, paladinMinimums);
            },
            AvailableAlignments : LINQ.GetCollection([{
                Legality : "Lawful",
                Morality : "Good"
            }]),
            AvailableRaces : LINQ.GetCollection(["Human"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(paladinMinimums)
        },
        ranger = {
            Name : "Ranger",
            PrimeRequisites : ["Strength", "Dexterity", "Wisdom"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, rangerMinimums);
            },
            AvailableAlignments : LINQ.GetCollection([{
                Legality : "Lawful",
                Morality : "Good"
            }, {
                Legality : "Neutral",
                Morality : "Good"
            }, {
                Legality : "Chaotic",
                Morality : "Good"
            }]),
            AvailableRaces : LINQ.GetCollection(["Human", "Elf", "HalfElf"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(rangerMinimums)
        },
        mage = {
            Name : "Mage",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, mageMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Elf", "HalfElf"]),
            Priority : "Mundane",
            PrerequisiteValue : prerequisiteValue(mageMinimums)
        },
        abjurer = {
            Name : "Abjurer",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, abjurerMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(abjurerMinimums)
        },
        conjurer = {
            Name : "Conjurer",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, conjurerMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "HalfElf"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(conjurerMinimums)
        },
        diviner = {
            Name : "Diviner",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, divinerMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Elf", "HalfElf"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(divinerMinimums)
        },
        enchanter = {
            Name : "Enchanter",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, enchanterMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Elf", "HalfElf"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(enchanterMinimums)
        },
        illusionist = {
            Name : "Illusionist",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, illusionistMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Gnome"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(illusionistMinimums)
        },
        invoker = {
            Name : "Invoker",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, invokerMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Gnome"]),
            Priority : "Prestige",
            PrerequisiteValue : prerequisiteValue(invokerMinimums)
        },
        necromancer = {
            Name : "Necromancer",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, necromancerMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human"]),
            Priority : "Prestige"
        },
        transmuter = {
            Name : "Transmuter",
            PrimeRequisites : ["Intelligence"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, transmuterMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "HalfElf"]),
            Priority : "Prestige"
        },
        cleric = {
            Name : "Cleric",
            PrimeRequisites : ["Wisdom"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, clericMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Dwarf", "Elf", "Gnome", "HalfElf", "Halfling"]),
            Priority : "Mundane"
        },
        druid = {
            Name : "Druid",
            PrimeRequisites : ["Wisdom", "Charisma"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, druidMinimums);
            },
            AvailableAlignments : LINQ.GetCollection([{
                Legality : "Neutral",
                Morality : "Neutral"
            }]),
            AvailableRaces : LINQ.GetCollection(["Human", "HalfElf"]),
            Priority : "Prestige"
        },
        thief = {
            Name : "Thief",
            PrimeRequisites : ["Dexterity"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, thiefMinimums);
            },
            AvailableAlignments : alignments,
            AvailableRaces : LINQ.GetCollection(["Human", "Dwarf", "Elf", "Gnome", "HalfElf", "Halfling"]),
            Priority : "Mundane"
        },
        bard = {
            Name : "Bard",
            PrimeRequisites : ["Dexterity", "Charisma"],
            MeetsMinimums : function (abilities) {
                return meetsMinimums(abilities, bardMinimums);
            },
            AvailableAlignments : alignments.Where(function (alignment) {
                if (alignment.Legality === "Neutral") {
                    return true;
                }
                if (alignment.Morality === "Neutral") {
                    return true;
                }
                return false;
            }),
            AvailableRaces : LINQ.GetCollection(["Human", "HalfElf"]),
            Priority : "Prestige"
        },
        allClasses = LINQ.GetCollection([
            fighter,
            paladin,
            ranger,
            mage,
            abjurer,
            conjurer,
            diviner,
            enchanter,
            illusionist,
            invoker,
            necromancer,
            transmuter,
            cleric,
            druid,
            thief,
            bard
        ]);
    return function (race, abilities) {
        return allClasses.Where(function (characterClass) {
            if (characterClass.MeetsMinimums(abilities) === false) {
                return false;
            }
            return characterClass.AvailableRaces.Contains(race);
        });
    };
})();