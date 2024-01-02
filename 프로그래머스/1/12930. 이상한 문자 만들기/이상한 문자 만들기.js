function solution(s) {
    var answer = s.split(' ');
    let endAnswer = [];
    let str = " ";
    for(let i = 0; i < answer.length; i++){
        for(let j = 0; j < answer[i].length; j++){
            if(j % 2 === 0){
                endAnswer.push(answer[i][j].toUpperCase())
            }
            else {
                endAnswer.push(answer[i][j].toLowerCase());
            }
        }
        if(answer.length -1 !== i){
        endAnswer.push(str)
            
}
    }
    return endAnswer.join('')
}