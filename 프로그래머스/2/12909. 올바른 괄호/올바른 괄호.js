function solution(s){
    let leftCount = 0;
    let rightCount = 0;
    if(s.length % 2 !== 0){
        return false
    }
    for(let i = 0; i < s.length; i++){
        let str = s[i];
        // 첫번째에 (가 있을때 바로 false 처리
        if(s[0] === ')'){
           return false
        }
        // )가 (보다 앞설시점에 이미 false
        if(leftCount < rightCount){
            return false
        }
        if(str === '('){
            leftCount++
        }
        else {
            rightCount++
        }
    }
    return rightCount === leftCount ? true : false;
}