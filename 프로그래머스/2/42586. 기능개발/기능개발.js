function solution(progresses, speeds) {
    const answer = [];
    let count = 1;
    // 5 10 1 1 20 1
    // 5 : 1
    // 10 : 3
    // 20 : 2
    let test = Math.ceil((100 - progresses[0]) / speeds[0])
    // answer.push(test)
    for(let i = 1; i <= progresses.length; i++){
        
        if(test >= Math.ceil((100 - progresses[i]) / speeds[i])){
            count++
        }else {
            answer.push(count);
            count = 1;
            test = Math.ceil((100 - progresses[i]) / speeds[i]);
        }
        
    }
    return answer;
}