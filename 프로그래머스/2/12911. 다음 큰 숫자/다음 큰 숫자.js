function solution(n) {
    // var answer = 0;
    let length = n.toString(2).split('').filter(item => item === '1').length;
    let answer = n + 1
    while(answer.toString(2).split('').filter(item => item === '1').length !== length){
        answer += 1
    }
    return answer;
}