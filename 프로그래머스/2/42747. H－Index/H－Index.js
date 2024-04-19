function solution(citations) {
    let hIndex = 0;
    citations.sort((a, b) => b - a); // 내림차순 정렬    
    while(hIndex < citations.length && citations[hIndex] > hIndex){
        hIndex++
    }
    return hIndex
}