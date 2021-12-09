test('Hello World!' , () => {

});

test('Failure test', () => {
   throw new Error('This test case should fail');
});

// Why test?
// -> Saves time
// -> Creates Reliable software
// -> Gives flexibility to developers
// -> Refactoring
// -> colaborating
// -> Profiling

const calculateTip = (total,tipPercent) => total + (total * tipPercent);


test('Should give tip given', () => {
   const total = calculateTip(10,.3);
   expect(total).toBe(13);
   // if(total !== 13){
   //    throw new Error('Total tip should be 13 but we got ' + total);
   // }
});


// output
// F:\nodejs_notes\15_Task_Manager_NodeJS>npm test

// > 15_Task_Manager_NodeJS@1.0.0 test
// > jest

//  FAIL  tests/math.test.js
//   √ Hello World! (2 ms)
//   × Failure test (1 ms)
//   √ Should give tip given (2 ms)

//   ● Failure test

//     This test case failed

//       4 |
//       5 | test('Failure test', () => {
//     > 6 |    throw new Error('This test case failed');
//         |          ^
//       7 | });
//       8 |
//       9 | // Why test?

//       at Object.<anonymous> (tests/math.test.js:6:10)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.964 s, estimated 1 s
// Ran all test suites.

// F:\nodejs_notes\15_Task_Manager_NodeJS> 