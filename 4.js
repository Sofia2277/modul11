function printNumbersInRange(start, end) {
    let current = start;
    const intervalId = setInterval(() => {
        console.log(current);
        if (current === end) {
            clearInterval(intervalId);
        }
        current++;
    }, 1000);
}

// Пример вызова функции с числами 5 и 15
printNumbersInRange(5, 15);