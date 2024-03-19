function solution(A, B) {
    let answer = 0;
    // 배열 A를 오름차순으로 정렬
    A.sort((a, b) => a - b);
    // 배열 B를 내림차순으로 정렬
    B.sort((a, b) => b - a);

    // 배열의 길이만큼 반복하면서, 정렬된 배열의 각 요소를 순서대로 곱하여 더함
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}
