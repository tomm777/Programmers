function solution(k, score) {
    let answer = [];
    let arr = [];
    let minNum = 0;
    for(let i = 0; i < score.length; i++){
        // k 보다 작을 때
        if(arr.length < k){
            arr.push(score[i]);
            answer.push(Math.min(...arr))
        }
        else if(arr.length >= k){
            if(Math.min(...arr) < score[i]){
                const newArray = [...arr]
                const minNumber = Math.min(...newArray);
                let indexNum = arr.indexOf(minNumber);
                newArray.splice(indexNum , 1);
                arr = [...newArray]
                arr.push(score[i]);
                answer.push(Math.min(...arr))
            }
            else {
                answer.push(Math.min(...arr))
            }
        }
        
        
    }
    return answer;
}