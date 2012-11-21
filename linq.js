var LINQ = LINQ || {};

LINQ.GetCollection = function (standardArray) {
	"use strict";
	var collection = {
		StandardArray : standardArray,
		Select : function (selector) {
			var i = 0,
				newCollection = [];
			for (i; i < standardArray.length; i = i + 1) {
				newCollection[i] = selector(standardArray[i]);
			}
			return LINQ.GetCollection(newCollection);
		},
		ForEach : function (action) {
			var i = 0;
			for (i; i < standardArray.length; i = i + 1) {
				action(standardArray[i]);
			}
		},
		Where : function (filter) {
			var i = 0,
				newCollection = [];
			for (i; i < standardArray.length; i = i + 1) {
				if (filter(standardArray[i]) === true) {
					newCollection.push(standardArray[i]);
				}
			}
			return LINQ.GetCollection(newCollection);
		},
		Any : function (predicate) {
			var i = 0;
			for (i; i < standardArray.length; i = i + 1) {
				if (predicate(standardArray[i]) === true) {
					return true;
				}
			}
			return false;
		},
        Random : function () {
            var selection = Math.floor(Math.random() * standardArray.length);
            return standardArray[selection];
        },
        First : function (filter) {
            var i = 0;
            for (i; i < collection.length; i = i + 1) {
                if (filter(collection[i]) === true) {
                    return collection[i];
                }
            }
        },
        Sum : function () {
            var i = 0,
                total = 0;
            for (i; i < collection.length; i = i + 1) {
                total += collection[i];
            }
            return total;
        }
	};
	collection.All = function (predicate) {
		var opposite = function (item) {
			return predicate(item) !== true;
		};
		return collection.Any(opposite) === false;
	};
	return collection;
};