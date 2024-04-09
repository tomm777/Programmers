function gcd(a, b) {
    // b가 0이면, a가 최대공약수입니다.
    if (b === 0) return a;
    // 아니면, a % b와 b의 최대공약수를 재귀적으로 구합니다.
    return gcd(b, a % b);
}

function lcm(a, b) {
    // 두 수 a와 b의 최소공배수를 구합니다.
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    return answer;
}
