function add(a, b) {
    return a + b;
  }
  console.log(add(3, 5)); 

  function isEven(number) {
    return number % 2 === 0;
  }
  console.log(isEven(4)); 
  console.log(isEven(7)); 

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  console.log(celsiusToFahrenheit(30)); 

  function findMax(arr) {
    return Math.max(...arr);
  }
  console.log(findMax([10, 20, 30, 40])); 

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello")); 
   