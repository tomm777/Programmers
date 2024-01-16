function solution(k, score) {
    let answer = [];
    let arr = [];
    for(let i = 0; i < score.length; i++){
        arr.push(score[i]);
        arr = arr.sort((a,b) => b - a).splice(0, k);
        answer.push(Math.min(...arr))
    }
    return answer;
}