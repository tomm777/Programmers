function solution(progresses, speeds) {
    const answer = [];
    let count = 1;
    let firstValue = Math.ceil((100 - progresses[0]) / speeds[0])
    for(let i = 1; i <= progresses.length; i++){
    let setValue = Math.ceil((100 - progresses[i]) / speeds[i])
        if(firstValue >= setValue){
            count++
        }else {
            answer.push(count);
            count = 1;
            firstValue = setValue;
        }
    }
    return answer;
}