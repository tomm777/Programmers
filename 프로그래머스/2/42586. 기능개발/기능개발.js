function solution(progresses, speeds) {
    const answer = [];
    let count = 1;
    let firstValue = Math.ceil((100 - progresses[0]) / speeds[0])
    for(let i = 1; i <= progresses.length; i++){
        if(firstValue >= Math.ceil((100 - progresses[i]) / speeds[i])){
            count++
        }else {
            answer.push(count);
            count = 1;
            firstValue = Math.ceil((100 - progresses[i]) / speeds[i]);
        }
    }
    return answer;
}