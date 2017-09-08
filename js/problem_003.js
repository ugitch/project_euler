/*  The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143?
*/

function largestPrimeFactor(num){
  var divisor = 2;
  while (num > 1){
    if ((num % divisor) === 0){
      num /= divisor;
      divisor--;
    }
    divisor++;
  }
  return divisor;
}

function calculateLargestPrimeFactor() {
  let input = document.getElementById("problem_input_03");
  let answer = document.getElementById("answer_03");
  answer.innerHTML = largestPrimeFactor(input.value);
}