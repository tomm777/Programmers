function solution(s){
    // var answer = true;
    let leftCount = 0;
    let rightCount = 0;
    // let first = s[0]
    if(s.length % 2 !== 0){
        return false
    }
    console.log(s.includes('()'))
    for(let i = 0; i < s.length; i++){
        let str = s[i];
        // 오른쪽 괄호가 있을때 바로 false 처리
        if(s[0] === ')'){
           return false
        }
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