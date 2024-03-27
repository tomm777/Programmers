function solution(s) {
    const stack = []; // 스택으로 사용할 빈 배열 초기화
    for (const char of s) { // 문자열 s의 각 문자에 대해 반복
        if (stack.length === 0 || stack[stack.length - 1] !== char) {
            // 스택이 비어있거나, 스택의 마지막 요소가 현재 문자와 다르면
            stack.push(char); // 현재 문자를 스택에 추가
        } else {
            // 스택의 마지막 요소가 현재 문자와 같으면(연속된 문자)
            stack.pop(); // 스택의 마지막 요소(연속된 문자 중 하나)를 제거
        }
    }
    // 스택이 비어있다면 모든 연속된 문자가 제거된 것이므로 1을, 그렇지 않다면 0을 반환
    return stack.length === 0 ? 1 : 0;
}
