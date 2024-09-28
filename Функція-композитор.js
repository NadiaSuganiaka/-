function compose() {
    const functions = Array.from(arguments);

    return function(input) {
        return functions.reduceRight((acc, func) => func(acc), input);
    } 
}

const multiplication = function(x) { 
    return x * 5 };
const addition = function(x) {
    return x + 10};
const division = function(x) {
    return x / 2};

const allFunction = compose(multiplication, addition, division);

console.log(allFunction(8));