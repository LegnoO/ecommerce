function sumCb(a, b) {
    return a + b
}
function subCb(a, b) {
    return a - b
}
function multiCb(a, b) {
    return a * b
}
function divCb(a, b) {
    return a / b
}


function caculate(a, b, cb) {
    return cb(a, b);
}



///// giải nghĩa khi caculate(100,200,sumCb)

function caculate(100, 200, sumCb) {
    return sumCb(100, 200);
}