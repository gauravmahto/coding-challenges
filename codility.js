
function numberOfCarryOperations(num1, num2) {

  let carryOperation = 0;

  const num1_a = [];
  const num2_a = [];

  while (num1 > 0) {
    num1_a.push(num1 % 10);
    num1 = Math.floor(num1 / 10);
  }

  while (num2 > 0) {
    num2_a.push(num2 % 10);
    num2 = Math.floor(num2 / 10);
  }

  if (num1_a.length > num2_a.length) {
    carryOperation = calculateCarryOperation(num1_a, num2_a);
  } else {
    carryOperation = calculateCarryOperation(num2_a, num1_a);
  }

  console.log(carryOperation);

  return carryOperation;

}

function calculateCarryOperation(num1, num2) {

  let carryOperation = 0;
  let carryForward = 0;

  num1.forEach((digit, index) => {

    const result = (digit + carryForward + (num2[index] || 0));
    if (result > 9) {
      carryForward = Math.floor(result / 10);
      ++carryOperation;
    } else {
      carryForward = 0;
    }

  });

  return carryOperation;

}

numberOfCarryOperations(123, 456) // 0
numberOfCarryOperations(555, 555) // 3
numberOfCarryOperations(900, 11) // 0
numberOfCarryOperations(145, 55) // 2
numberOfCarryOperations(0, 0) // 0
numberOfCarryOperations(1, 99999) // 5
numberOfCarryOperations(999045, 1055) // 5
numberOfCarryOperations(101, 809) // 1
numberOfCarryOperations(189, 209) // 1
