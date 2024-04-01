function solution(n, words) {
    var answer = [];
    let count = 0;
    let sequence = 0;
    let checkNum = 0;
    for(let i = 0; i < words.length; i++){
        let length = words[i].length;
        // 사람의 차례
        sequence = (i % n) + 1;
        // 차례가 순회하는 회수
        if(i % n === 0){
            count++
        }
        if(words[i].length <= 1){
            break;
        }
        // 중복인 단어를 말할 때
        if(answer.includes(words[i])){
            break;
        }
        // if(answer[answer.length - 1][])
        // 저장된 배열이 1개 이상일 때
        if(answer.length > 0){
            if(answer[answer.length - 1][answer[answer.length - 1].length - 1] !== words[i][0]){
                break;
}
             
        }
        answer.push(words[i]);
        
        // 돌아가는 차례 순회 카운팅
        // 중복단어가 있을 때
        // 비교할 다음 문자가 있을 때
        
    }
    return answer.length === words.length ? [0,0] : [sequence,count]
}