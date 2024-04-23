function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

// Пример использования
const add5 = createAdder(5);

console.log(add5(3));
console.log(add5(10));