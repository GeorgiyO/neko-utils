/**
 * add following functions:
 * String: format(map): "some str ${arg}" + map({arg: value}) -> "some str value"
 * Array: last: arr -> arr[arr.length - 1]
 */
function addAllExtraFunctions() {
    addStringFormat();
    addArrayLast();
}

/**
 * String: format(map): "some str ${arg}" + map({arg: value}) -> "some str value"
 */
function addStringFormat() {
    if (!String.prototype.format) {
        String.prototype.format = function(args) {
            return this.replace(/\${(.*?)}/g, (...keys) => args[keys[1]]);
        }
    }
}

/**
 * Array: last: arr -> arr[arr.length - 1]
 */
function addArrayLast() {
    if (!Array.prototype.last) {
        Array.prototype.last = function() {
            return this[this.length - 1];
        }
    }
}

exports.addStringFormat = addStringFormat;
exports.addArrayLast = addArrayLast;
exports.addAllExtraFunctions = addAllExtraFunctions;