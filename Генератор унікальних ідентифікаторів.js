function createIdGenerator(prefix) {
    let number = 0;

    return function(){
        number ++;
        return prefix + number;
    }   
}
const prefixUser = createIdGenerator('user');

console.log(prefixUser());
console.log(prefixUser());
console.log(prefixUser());