function solution(numbers) {
    let answer = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; j++){
            if(numbers[i] === numbers[j] && i === j){
                continue;
            }
            answer.push(numbers[i] + numbers[j])
            
        }
    }
    const set = new Set(answer.sort());
    return [...set].sort((a,b) => a - b);
}