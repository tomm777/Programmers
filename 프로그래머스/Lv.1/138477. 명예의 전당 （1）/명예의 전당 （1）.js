function solution(k, score) {
    let answer = [];
    let arr = [];
    for(let i = 0; i < score.length; i++){
        if(arr.length < k){
            arr.push(score[i]);
            
        }
        else{
            const minNumber = Math.min(...arr);
            if(minNumber < score[i]){
                let indexNum = arr.indexOf(minNumber);
                arr.splice(indexNum , 1);
                arr.push(score[i]);
            }
        }
            answer.push(Math.min(...arr))
        
        
    }
    return answer;
}