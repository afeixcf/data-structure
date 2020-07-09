function Set() {
    this.items = {}

}

Set.prototype.add = function(value) {
    if (this.has(value)) {
        return false
    }

    this.items[value] = value
    return true
}

Set.prototype.remove = function(value) {
    if (!this.has(value)) {
        return false
    }

    delete this.items[value]
    return true
}

Set.prototype.clear = function () {
    this.items = {}
}

Set.prototype.size = function() {
    return Object.keys(this.items).length
}

Set.prototype.values = function() {
    return Object.keys(this.items)
}


Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
}

var set = new Set()

console.log(set.add('abc'))
console.log(set.add('abc'))
console.log(set.add('cba'))
console.log(set.add('nba'))
console.log(set.add('mba'))
console.log(set.values())
console.log(set.remove('mba'))
console.log(set.remove('mba'))
console.log(set.values())
console.log(set.has('abc'))
console.log(set.has('abcd'))
console.log(set.size())
console.log(set.clear())
console.log(set.size())
