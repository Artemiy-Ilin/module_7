const person = { 
    Name: "Ivan Ivanov",
    Age: 28 
};

    function printInfo() {
        console.log(person);
    }
    
    printInfo.call(person);