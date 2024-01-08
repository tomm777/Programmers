function solution(s) {
    let answer = [];
    let test = [];
        for(let i = 0; i < s.length; i++){
                if(answer.indexOf(s[i]) === -1){
                    test.push(s[i])
                    answer.push(test[i])
                    
                }else{
                    console.log(i - test.lastIndexOf(s[i]))
                    answer.push(i - test.lastIndexOf(s[i]))
                    test.push(s[i])                    
                }
            
        }
    return answer.map((item) => typeof item !== 'number' ? -1 : item);
}