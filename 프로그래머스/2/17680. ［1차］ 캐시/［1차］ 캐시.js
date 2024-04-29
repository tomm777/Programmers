function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5
    const answer = [];
    let count = 0;
    const cache = new Map(); // Map 객체 사용
    cities.forEach((city => {
        const upperCity = city.toUpperCase();
         if (cache.has(upperCity)) {
            count += 1; // 캐시 히트
            cache.delete(upperCity); // 최근 사용된 도시를 맨 뒤로 옮기기 위해 삭제 후 재삽입
        }
        else {
            count += 5;
            if (cache.size >= cacheSize) {
                // 가장 오래된(첫 번째) 키 값 가져오기
                const firstKey = cache.keys().next().value; 
                // 가장 오래된 항목 삭제
                cache.delete(firstKey); 
            }
        }
        cache.set(upperCity, true);
    }))
    // cities = cities.map(item => item.toUpperCase())
    // for(let i =0; i < cities.length; i++){
    //     if(answer.filter((city) => cities[i] === city).length  > 0){
    //         count++
    //     }
    //     else {
    //         count += 5
    //     }
    //     // 새로운 도시 추가 후 첫번째 배열 삭제
    //     answer.push(cities[i])
    //     if(answer.length > cacheSize){
    //         answer.shift()
    //     }
    // }
    return count;
}