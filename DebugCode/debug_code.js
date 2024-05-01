//<script>
function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let resultMult = multiply(num1, num2);
                let resultSum = sum(num1,num2);
                let resultDiv = division(num1,num2);

                // Display the result
                displayResultMult(resultMult);
                displayResultSum(resultSum);
                displayResultDiv(resultDiv);
            } else {
                displayResult('Please enter valid numbers');
            }
        }

        function multiply(a, b) {
            // Introduce a debugger statement to pause execution
            debugger;

            // Multiply the numbers
            return a * b;
        }

        function sum (a, b) {
            debugger;
            return a + b;
        }

        function division (a, b) {
            debugger;
            return a - b;
        }

        function displayResultMult(resultMult) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result1');
            resultElement.textContent = `The resultMult is: ${resultMult}`;
        }

        function displayResultSum(resultSum) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result2');
            resultElement.textContent = `The resultSum is: ${resultSum}`;
        }

        function displayResultDiv(resultDiv) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result3');
            resultElement.textContent = `The resultDiv is: ${resultDiv}`;
        }
    //</script>