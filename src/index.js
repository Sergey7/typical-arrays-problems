
exports.min = function min (array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }
    let minimal = array[0];
    
    for (let i = 1 ; i < array.length; i++) {
        if (minimal > array[i]) { 
            minimal = array[i]
        }
    }
    return minimal
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }
    let maximum = array[0];
    for (let i = 1 ; i < array.length; i++) {
        if (maximum < array[i]) { maximum = array[i] }
    }
    return maximum
}

exports.avg = function avg (array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }
    let average = array[0];
    for (let i = 1 ; i < array.length; i++) {
        average += array[i];
    }
    return average / array.length
}

