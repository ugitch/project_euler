// improved solution, less iterations
function sumDivisibleBy(n, target) {
  var sum = 0;
  for (var i=0; i <=target; i+=n) {
    if (i % n === 0)
      sum += i;
  }
  return sum;
}

function sumMultiplesOfThreeAndFive() {
  var input = document.getElementById("problem_input");
  var answer = document.getElementById("answer");

  var target = input.value - 1;

  answer.innerHTML = sumDivisibleBy(3, target) + sumDivisibleBy(5, target) - sumDivisibleBy(15, target);
}
