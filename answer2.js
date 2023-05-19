function greet () {
    return 'Hello';
}

function Name(user, func) {
    const message = func();
    console.log(`${message} ${user}`);
}
Name('Rishabh', greet);
Name('Virat', greet);