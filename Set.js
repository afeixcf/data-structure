function Set() {
  this.items = {};
}

Set.prototype.add = function (value) {
  if (this.has(value)) {
    return false;
  }

  this.items[value] = value;
  return true;
};

Set.prototype.remove = function (value) {
  if (!this.has(value)) {
    return false;
  }

  delete this.items[value];
  return true;
};

Set.prototype.clear = function () {
  this.items = {};
};

Set.prototype.size = function () {
  return Object.keys(this.items).length;
};

Set.prototype.values = function () {
  return Object.keys(this.items);
};

Set.prototype.has = function (value) {
  return this.items.hasOwnProperty(value);
};

Set.prototype.union = function (otherSet) {
  var unionSet = new Set();

  var values = this.values();
  var i = 0;
  for (i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }
  values = otherSet.values();
  for (i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }

  return unionSet;
};

Set.prototype.intersection = function (otherSet) {
  var intersectionSet = new Set();
  var values = this.values();
  var i = 0;
  for (i = 0; i < values.length; i++) {
    var item = values[i];
    if (otherSet.has(item)) {
      intersectionSet.add(item);
    }
  }
  return intersectionSet;
};

Set.prototype.difference = function (otherSet) {
  var differenceSet = new Set();
  var values = this.values();
  var i = 0;
  for (i = 0; i < values.length; i++) {
    var item = values[i];
    if (!otherSet.has(item)) {
      differenceSet.add(item);
    }
  }
  return differenceSet;
};

Set.prototype.subset = function (otherSet) {
    var values = this.values();
    var i = 0;
    for (i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
            return false
        }
    }

    return true
}

var set = new Set();

// console.log(set.add("abc"));
// console.log(set.add("abc"));
// console.log(set.add("cba"));
// console.log(set.add("nba"));
// console.log(set.add("mba"));
// console.log(set.values());
// console.log(set.remove("mba"));
// console.log(set.remove("mba"));
// console.log(set.values());
// console.log(set.has("abc"));
// console.log(set.has("abcd"));
// console.log(set.size());
// console.log(set.clear());
// console.log(set.size());
var setA = new Set();
// setA.add("abc");
setA.add("cba");
setA.add("nba");

var setB = new Set();
setB.add("aaa");
setB.add("cba");
setB.add("nba");

// console.log(setA.union(setB).values());
// console.log(setA.intersection(setB).values());
// console.log(setA.difference(setB).values());
console.log(setA.subset(setB));
