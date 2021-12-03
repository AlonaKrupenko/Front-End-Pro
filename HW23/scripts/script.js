const sum = (function() {
    let accum = 0
    return function(num) { return accum += num };
})()
