function solution(n, m, section) {
    let answer = 0;
    let count = 0;
    for(let i = 0; i < section.length; i++){
        if(count < section[i]){
            answer++
            count = section[i] + m - 1;
        }
        
    }
    return answer
}