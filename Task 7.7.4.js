const person = {
    name: 'Ivan'
}

function setFullName (fullName) {
    person.fullName = 'Ivanov';
}

setFullName ();
console.log (person);

const secondPerson = {
    fullName: 'John Smith'
}

function setPersonFullName (fullName) {
    console.log (setFullName.bind (secondPerson, fullName));
}

setPersonFullName ('John Smith');