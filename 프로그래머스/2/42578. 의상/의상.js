function solution(clothes) {
    let answer = 1;
    const clothesMap = {};
    clothes.forEach(arr => clothesMap[arr[1]] = (clothesMap[arr[1]] || 0) +1)
    for(const key in clothesMap) {
        answer *= (clothesMap[key] + 1);
    }
    return answer - 1;
}