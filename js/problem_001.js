function sumMultiplesOfThreeAndFive(){
  var input = document.getElementById("problem_input");
  var answer = document.getElementById("answer");
  var sum = 0;
  for (var i=1; i<input.value; i++){
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  }
  answer.innerHTML = sum;
}