function solution(n, left, right) {
    let answer = [];
    for (let index = left; index <= right; index++) {
        // 2차원 배열의 행과 열의 인덱스로 변환
        let i = Math.floor(index / n);
        let j = index % n;
        // 직접 해당 위치의 값을 계산하여 추가
        answer.push(Math.max(i, j) + 1);
    }
    return answer;
}
