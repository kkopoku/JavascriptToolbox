// Link: https://leetcode.com/problems/insert-delete-getrandom-o1/

var RandomizedSet = function() {
    this.mySet = new Set([]);
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    var isPresent = this.mySet.has(val);
    if(!isPresent){
        this.mySet.add(val);
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean} 
 */
RandomizedSet.prototype.remove = function(val) {
    return this.mySet.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let arr = Array.from(this.mySet)
    let randIndex = Math.floor(Math.random()*arr.length);
    return arr[randIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */