const numbers = [1, 5, 4, 18, 8, 9, 5, 1, 16, 4, 3, 2, 9, 3];

const uniqueNumbers = numbers.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  
  const newArr = uniqueNumbers;
  console.log (newArr);

  function Sort (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  console.log (newArr.sort (Sort));