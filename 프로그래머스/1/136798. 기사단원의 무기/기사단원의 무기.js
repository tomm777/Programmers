function countDivisorsSieve(n) {
  const divisorsCount = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      divisorsCount[j]++;
    }
  }

  return divisorsCount;
}

function solution(number, limit, power) {
  const divisorsCount = countDivisorsSieve(number);
  let powerCount = 0;

  for (let i = 1; i <= number; i++) {
    if (divisorsCount[i] > limit) {
      powerCount += power;
    } else {
      powerCount += divisorsCount[i];
    }
  }

  return powerCount;
}

