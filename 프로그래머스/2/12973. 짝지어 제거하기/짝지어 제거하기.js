function solution(s) {
    let result = []; 
    for (let i = 0; i < s.length; i++) {
        // 현재 문자가 결과 배열의 마지막 문자와 같다면
        if (result[result.length - 1] === s[i]) {
            // 결과 배열에서 마지막 문자 제거
            result.pop(); 
        } else {
            result.push(s[i]);
        }
    }
    return result.length === 0 ? 1 : 0;
}
