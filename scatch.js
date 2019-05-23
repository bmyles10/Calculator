  /*
      1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
        1. add
        2. subtract
        3. multiply
        4. divide
    */
   const add = (add1,add2) => add1 + add2;
   const subtract = (sub1,sub2) => sub1 - sub2;
   const multiply = (prod1,prod2) => prod1 * prod2;
   const divide = (quo1, quo2) => quo1 / quo2;

/*
 2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
    */

  const operate = (operator,num1,num2) => {
      return add(num1,num2)
  };

  console.log(operate(add,3,9))
  