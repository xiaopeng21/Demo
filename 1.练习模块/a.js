function sum() {
    var  total =null;
    for(var i=0;i<arguments.length;i++){
        var  cur = arguments[i];
        if(!isNaN(cur)){
            total+=cur;
        }
    }
    return total;
}
function f() {
    console.log(1);
}
function f1() {
    console.log(10);
}
// 把当前模块中的方法暴露出去；
// module.exports.sum = sum;
module.exports.f1 = f1;
module.exports = {
    sum:sum,
    f:f
};
// 新的空间覆盖了原来的空间地址；f1这个方法不存在；
