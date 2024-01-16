
var RandomizedSet = function() {
    this.container = new Set()
};

RandomizedSet.prototype.insert = function(val) {
    if(this.container.has(val)) return false
    else{
        this.container.add(val)
        return true
    }
};

RandomizedSet.prototype.remove = function(val) {
    return this.container.delete(val)
};

RandomizedSet.prototype.getRandom = function() {
    let index = Math.floor(Math.random() * this.container.size)
    let arr = [...this.container]
    return arr[index]
};
