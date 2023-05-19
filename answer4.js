const person = {
    id: 1,
    name: 'Rishabh',
    age: 23
}

const HasKey = 'name' in person;

if(HasKey) {
    console.log('The Key exists in person object');
}
else {
    console.log('The key does not exist in person object');
}

const hasKey = 'Gender' in person;

if(hasKey) {
    console.log('The Key exists in person object');
}
else {
    console.log('The Key does not exist in person object');
}