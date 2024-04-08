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
    function lcmArray(arr, index) {
        // 배열의 마지막 요소에 도달했을 때, 해당 요소를 반환합니다.
        if (index === arr.length - 1) {
            return arr[index];
        }
        // 현재 요소와 나머지 배열 요소의 최소공배수를 재귀적으로 구합니다.
        return lcm(arr[index], lcmArray(arr, index + 1));
    }
    
    // 배열의 첫 번째 요소부터 시작하여 모든 요소의 최소공배수를 구합니다.
    return lcmArray(arr, 0);
}

// 예시
console.log(solution([2, 6, 8, 14])); // 168
