function solution(s) {
    let answer = 0;
    let str = s[0];
    let sameCount = 0;
    let diffCount = 0;
    const arr = [];
    for(let i = 0; i < s.length; i++){
        if(str === s[i]){
            sameCount++
        }
        else {
            diffCount++
        }
        if(sameCount === diffCount){
            sameCount = 0
            diffCount = 0;
            answer++
            str = s[i + 1];
            
        }
        else {
            if(s[i + 1] === undefined){
                answer++
            }
        }
        
    }
    return answer;
}