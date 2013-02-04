var LINQ = LINQ || {};

LINQ.GetCollection = function (standardArray) {
    "use strict";
    var arrayLength = standardArray.length,
        collection = {
            Select : function (selector) {
                var i = 0,
                    newCollection = [];
                for (i; i < arrayLength; i = i + 1) {
                    newCollection[i] = selector(standardArray[i]);
                }
                return LINQ.GetCollection(newCollection);
            },
            SelectMany : function (selector) {
                var i = 0,
                    newCollection = [];
                for (i; i < arrayLength; i = i + 1) {
                    newCollection.concat(selector[i]);
                }
                return LINQ.GetCollection(newCollection);
            },
            ForEach : function (action) {
                var i = 0;
                for (i; i < arrayLength; i = i + 1) {
                    action(standardArray[i]);
                }
            },
            Where : function (filter) {
                var i = 0,
                    newCollection = [];
                for (i; i < arrayLength; i = i + 1) {
                    if (filter(standardArray[i]) === true) {
                        newCollection.push(standardArray[i]);
                    }
                }
                return LINQ.GetCollection(newCollection);
            },
            Any : function (predicate) {
                var i = 0;
                for (i; i < arrayLength; i = i + 1) {
                    if (predicate(standardArray[i]) === true) {
                        return true;
                    }
                }
                return false;
            },
            Random : function () {
                var selection = Math.floor(Math.random() * arrayLength);
                return standardArray[selection];
            },
            First : function (filter) {
                var i = 0;
                for (i; i < arrayLength; i = i + 1) {
                    if (filter(standardArray[i]) === true) {
                        return standardArray[i];
                    }
                }
            },
            Sum : function () {
                var i = 0,
                    total = 0;
                for (i; i < arrayLength; i = i + 1) {
                    total += standardArray[i];
                }
                return total;
            },
            SortWith : function (sorter) {
                return LINQ.GetCollection(standardArray.sort(sorter));
            },
            Max : function () {
                return Math.max.apply(Math, standardArray);
            },
            Head : function () {
                return standardArray[0];
            },
            Tail : function () {
                return standardArray[arrayLength - 1];
            },
            Length : arrayLength,
            Add : function (item) {
                standardArray.push(item);
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