/**
 *
 * 设计hash函数
 * 1. 将字符串转换成比较大的数字：hashCode
 * 2. 将过大的数字hashCode压缩到数组范围内
 *
 */
function hashFunc(str, size) {
  // 定义hashcode变量
  var hashCode = 0;
  for (var i = 0; i < str.length; i++) {
    hashCode = hashCode * 37 + str.charCodeAt(i);
  }

  return hashCode % size;
}

// console.log(hashFunc("abc", 10));
// console.log(hashFunc("cba", 10));
// console.log(hashFunc("acb", 10));
// console.log(hashFunc("nba", 10));
// console.log(hashFunc("bca", 10));

function HashTable() {
  // 属性
  this.storage = [];
  this.count = 0;
  this.limit = 7;
}

HashTable.prototype.put = function (key, value) {
  // 1.根据key获取索引值
  var index = this.hashFunc(key, this.limit);
  // 2.根据index取出bucket
  var bucket = this.storage[index];
  // 3.判断桶是否存在
  if (typeof bucket === "undefined") {
    bucket = [];
    this.storage[index] = bucket;
  }
  // 4.判断是否是修改数据
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[1] = value;
      return;
    }
  }
  // 5.添加操作
  bucket.push([key, value]);
  this.count += 1;
  // 6.判断是否需要扩容操作
  if (this.count / this.limit > 0.75) {
    var newPrime = this.getPrime(this.limit * 2);
    this.resize(newPrime);
  }
};

HashTable.prototype.get = function (key) {
  // 1.根据key获取索引值
  var index = this.hashFunc(key, this.limit);
  // 2.根据index取出bucket
  var bucket = this.storage[index];
  // 3.判断bucket是否存在
  if (typeof bucket === "undefined") {
    return;
  }
  // 4.遍历获取数据
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }
  // 5.没有找到
  return;
};

HashTable.prototype.remove = function (key) {
  // 1.根据key获取索引值
  var index = this.hashFunc(key, this.limit);
  // 2.根据index取出bucket
  var bucket = this.storage[index];
  // 3.判断bucket是否存在
  if (typeof bucket === "undefined") {
    return;
  }
  // 4.遍历bucket 删除对应数据
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      this.count -= 1;

      // loadFactor 小于0.25需要缩小容量
      if (this.limit > 7 && this.count / this.limit < 0.25) {
        var newPrime = this.getPrime(Math.floor(this.limit / 2));
        this.resize(newPrime);
      }
      return tuple[1];
    }
  }
  // 5.没有找到
  return;
};

HashTable.prototype.isEmpty = function () {
  return this.count === 0;
};

HashTable.prototype.size = function () {
  return this.count;
};

// 扩容
HashTable.prototype.resize = function (newLimit) {
  // 1.保存留的数组
  var oldStorage = this.storage;
  // 2.重置新数组
  this.storage = [];
  this.count = 0;
  this.limit = newLimit;
  // 3.遍历oldStorage所有的bucket
  for (var i = 0; i < oldStorage.length; i++) {
    // 3.1取出bucket
    var bucket = oldStorage[i];
    // 3.2判断是否存在
    if (typeof bucket === "undefined") {
      continue;
    }
    // 3.3 bucket中有数据，取出数据，重新插入
    for (var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      this.put(tuple[0], tuple[1]);
    }
  }
};

// 是否质数
HashTable.prototype.isPrime = function (num) {
  var temp = parseInt(Math.sqrt(num));

  for (var i = 2; i <= temp; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// 获取质数的方法
HashTable.prototype.getPrime = function (num) {
  while (!this.isPrime(num)) {
    num++;
  }
  return num;
};

HashTable.prototype.hashFunc = function (str, size) {
  // 定义hashcode变量
  var hashCode = 0;
  for (var i = 0; i < str.length; i++) {
    hashCode = hashCode * 37 + str.charCodeAt(i);
  }
  return hashCode % size;
};

var ht = new HashTable();

// 添加
ht.put("abc", "123");
ht.put("cba", "321");
ht.put("nba", "521");
ht.put("mba", "520");
ht.put("mba1", "520");
ht.put("mba2", "520");
ht.put("mba3", "520");
ht.put("mba4", "520");
ht.put("mba5", "520");

// 获取
console.log(ht.get("abc"));

// 修改
ht.put("abc", "111");
console.log(ht.get("abc"));

// 删除
ht.remove("abc");
console.log(ht.get("abc"));

console.log(ht.limit)

ht.remove("mba1");
ht.remove("mba2");
ht.remove("mba3");
ht.remove("mba4");
ht.remove("mba5");
console.log(ht.limit)


