function solution(k, tangerine) {
    const tDict = {};
    let answer = 0;
    tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    for (const t of tArr) {
        console.log(t)
        answer++;
        if (k > t) k -= t;
        else break;
    }
        return answer

}