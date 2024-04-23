function isPrime(num) {

    if (num > 1000) {
        console.log("Данные неверны. Число должно быть не больше 1000.");
        return;
    }

    if (num === 0 || num === 1) {
        console.log("Число не является простым.");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Число не является простым.");
            return;
        }
    }

    console.log("Число является простым.");
}

// Примеры вызова функции
isPrime(7);
isPrime(12);
isPrime(0);
isPrime(997);
isPrime(1234);