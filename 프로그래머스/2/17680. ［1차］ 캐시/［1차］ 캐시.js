function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5; // 캐시 크기가 0인 경우, 모든 도시 처리가 cache miss이므로

    let count = 0;
    const cache = []; // 캐시를 배열로 관리
    cities.forEach(city => {
        city = city.toUpperCase(); // 대소문자 구분 없이 처리
        const index = cache.indexOf(city); // 현재 도시가 캐시에 있는지 확인

        if (index !== -1) {
            // cache hit
            count += 1;
            cache.splice(index, 1); // 캐시에서 해당 도시 제거
        } else {
            // cache miss
            if (cache.length >= cacheSize) {
                cache.shift(); // 캐시가 가득 차 있으면, 가장 오래된 항목 제거
            }
            count += 5;
        }
        cache.push(city); // 현재 도시를 캐시에 추가
    });

    return count;
}
