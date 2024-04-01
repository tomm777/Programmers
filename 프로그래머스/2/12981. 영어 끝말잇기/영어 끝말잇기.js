function solution(n, words) {
    let arr = [];
    let count = 0;
    let sequence = 0;
    for(let i = 0; i < words.length; i++){
        let length = words[i].length;
        // 사람의 차례
        sequence = (i % n) + 1;
        // 차례가 순회하는 회수
        if(i % n === 0){
            count++
        }
        // 중복인 단어를 말할 때
        if(arr.includes(words[i])){
            break;
        }
        // 저장된 배열이 1개 이상일 때
        if(arr.length > 0){
            if(arr[arr.length - 1][arr[arr.length - 1].length - 1] !== words[i][0]){
                break;
}
        }
        arr.push(words[i]);
        
    }
    return arr.length === words.length ? [0,0] : [sequence,count]
}