var LINQ = {};

LINQ.GetCollection = function (standardArray) {
    "use strict";
    var collection = {
            Select : function (selector) {
                var i = 0,
                    newCollection = [];
                for (i; i < standardArray.length; i = i + 1) {
                    newCollection[i] = selector(standardArray[i]);
                }
                return LINQ.GetCollection(newCollection);
            },
            SelectMany : function (selector) {
                var i = 0,
                    newCollection = [];
                for (i; i < standardArray.length; i = i + 1) {
                    newCollection = newCollection.concat(selector(standardArray[i]));
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
                for (i; i < standardArray.length; i = i + 1) {
                    if (filter(standardArray[i]) === true) {
                        return standardArray[i];
                    }
                }
            },
            Sum : function () {
                var i = 0,
                    total = 0;
                for (i; i < standardArray.length; i = i + 1) {
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
                return standardArray[standardArray.length - 1];
            },
            Length : standardArray.length,
            Add : function (item) {
                standardArray.push(item);
            },
            AddRange : function (items) {
                var i = 0,
                    itemsLength = items.length;
                for (i; i < itemsLength; i = i + 1) {
                    standardArray.push(items[i]);
                }
            },
            Contains : function (item) {
                var i = 0;
                for (i; i < standardArray.length; i = i + 1) {
                    if (item === standardArray[i]) {
                        return true;
                    }
                }
                return false;
            },
            StandardArray : standardArray
        };
    collection.All = function (predicate) {
        var opposite = function (item) {
            return predicate(item) !== true;
        };
        return collection.Any(opposite) === false;
    };
    return collection;
};