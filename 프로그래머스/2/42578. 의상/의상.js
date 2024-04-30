function solution(clothes) {
    let answer = 1;
    const clothesMap = {};
    clothes.forEach(arr => {
        const [type, name] = arr;
         if(clothesMap.hasOwnProperty(name)) {	
            clothesMap[name]++;    	
        }
        else {
            clothesMap[name] = 1;  
        }
    })
    for(const key in clothesMap) {
        // 해당 종류의 의상을 입지 않는 경우도 고려하여, 의상 개수에 1을 더한 값을 answer에 곱하기
      //key는 각 속성의 이름을 나타내는 변수. clothesMap 객체에 저장된 의상 종류별 개수를 처리하는 역할
        answer *= (clothesMap[key] + 1);		//clothesMap[key]는 key에 해당하는 속성 값, 즉 의상 종류별 개수를 나타냄.
    }
    return answer - 1;
}