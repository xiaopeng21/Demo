
function fn(num) {
    return num*20;
}
module.exports.fn = fn;
// 不同模块之间的module.exports是相互之间不受影响的；但是一个模块下只有module.exports；