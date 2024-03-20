function solution(s){
    let count = 0;
    // if(s.length % 2 !== 0){
    //     return false
    // }
    for(let i = 0; i < s.length; i++){
        // 첫번째에 (가 있을때 바로 false 처리
        if(s[0] === ')'){
           return false
        }
        if(count < 0 ){
            return false
        }
        count += s[i] === '(' ? 1 : -1
    }
    return count === 0 ? true : false;
}