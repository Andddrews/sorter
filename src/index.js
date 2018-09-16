class Sorter {
  constructor() {
    this.storage = [];
    this.customF = null;

  }

  add(element) {
    this.storage.push(element);
  }

  at(index) {
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }

  toArray() {
    return this.storage;
  }

  sort(indices) {
    indices.sort(function(a,b){
      return a-b;
    });
    var a = [];
    for (var i=0; i<indices.length; i++) {
      var index = indices[i];
      a.push(this.storage[index]);
    }
    
    if (this.customF) {
      a.sort(this.customF)
    } else {
      a.sort(function(a,b){
       return a-b;
      });
    }
      


    for (var i=0; i<indices.length; i++){
      var index = indices[i];
      this.storage[index]=a[i];
    }
  }

  setComparator(d) {
    this.customF = d;
  }
}

module.exports = Sorter;