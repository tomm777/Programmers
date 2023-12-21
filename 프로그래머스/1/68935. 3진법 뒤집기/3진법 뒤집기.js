function solution(n) {
  const answer = n.toString(3);
  const answerReverse = answer.split("").reverse().join("");

  return parseInt(answerReverse, 3);
}