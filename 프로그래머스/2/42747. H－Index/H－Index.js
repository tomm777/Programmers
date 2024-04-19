function solution(citations) {
    citations.sort((a, b) => b - a); // 내림차순 정렬
    let hIndex = 0;
    while (hIndex < citations.length && citations[hIndex] > hIndex) {
        hIndex++;
    }
    return hIndex; // H-Index 반환
}
