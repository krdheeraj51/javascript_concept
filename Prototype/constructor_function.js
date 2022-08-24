

Date.prototype.lastYear=function() {
    return this.getFullYear() -1;
}

console.log(new Date().lastYear());
Array.prototype.map=function () {
    let arr=[];
    for(let i=0;i<this.length;i++){
        arr.push((this[i]+' >>> '))
    }
    return arr;
}
console.log([1,2,4,5].map())