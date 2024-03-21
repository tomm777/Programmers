function solution(s) {
    // 제거된 '0'의 개수
    let count = 0; 
    // 변환 과정의 횟수
    let procedureCount = 0; 

    while (s !== "1") {
        let lenBefore = s.length;
        // '0'을 모두 제거
        s = s.replace(/0/g, ""); 
        let lenAfter = s.length;
        // 제거된 '0'의 개수를 카운트
        count += (lenBefore - lenAfter); 
        // 남은 '1'의 개수를 이진수로 변환
        s = lenAfter.toString(2); 
        procedureCount++; 
    }

    return [procedureCount, count];
}