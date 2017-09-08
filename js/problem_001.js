/*  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000. 
  
Best solution, based on previous one
for n = 3, 3+6+9+12+......+999=3*(1+2+3+4+...+333)
for n = 5, 5+10+15+...+995=5*(1+2+....+199)
199 is 995/5, but also 999/5 rounded down to nearest integer
Using mathematical truth 1+2+3+...+p=½*p*(p+1) and Math.floor
*/
function sumDivisibleBy(n, target) {
  var p = Math.floor(target/n);

  return Math.floor(n * p * (p + 1) / 2);
}

function sumMultiplesOfThreeAndFive() {
  var input = document.getElementById("problem_input_01");
  var answer = document.getElementById("answer_01");

  var target = input.value - 1;

  answer.innerHTML = sumDivisibleBy(3, target) + sumDivisibleBy(5, target) - sumDivisibleBy(15, target);
}