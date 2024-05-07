const users = [
    {name: 'Sergey', age: 27},
    {name: 'Ivan', age: 19},
    {name: 'Vasily', age: 15},
    {name: 'Petr', age: 31},
    {name: 'Stas', age: 16},
    {name: 'Evgeny', age: 13},
];

const FilteredUsers = users.filter ((user) => {
    return user.age > 18;
});

console.log (FilteredUsers);

const usersNames = [];
for (let key in users) {
    usersNames.push (users[key].name);
}

console.log (usersNames);
