function solution(want, number, discount) {
    var answer = 0;
    const obj = {}
    // 객체에 넣어줌
    want.forEach((item,i) => {
        obj[item] = number[i]
    })
    for(let i = 0; i < discount.length; i++){
        // 비교할 임시 오브젝트 생성
        const testObject = {};
        // 인덱스 pick up
        // 일치하는것이 없다면 즉시 반복문 재실행
        if(want.indexOf(discount[i]) === -1) continue;
        // discount 배열의 열흘치를 slice해서 저장
        const test2 = discount.slice(i,i+10);
        // 10이 아니라면 즉시 반복문 재실행
        test2.forEach((item) => testObject[item] = (testObject[item] || 0) + 1)
        let count = 0;
        for(let j = 0; j < Object.keys(obj).length; j++){
            let keys = Object.keys(obj);
            if(obj[keys[j]] !== testObject[keys[j]]) break;
            count++
        }
        // 할인 받을 수 있는 날 카운팅
        if(count === Object.keys(obj).length){
            answer++
        } 
    }
    return answer;
}