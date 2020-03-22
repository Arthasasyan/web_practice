function createCounter() {
    let number = 1;
    return function () {
        return number++;
    }
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5