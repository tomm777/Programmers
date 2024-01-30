function solution(dartResult) {
    let answerArr = [];
    let currentScore = 0;
    
    for(let i = 0; i < dartResult.length; i++){
        if(/[0-9]/.test(dartResult[i])){
            // 현재 문자가 숫자인 경우, currentScore에 값을 누적
            currentScore = currentScore * 10 + parseInt(dartResult[i]);
        } else if(/[SDT]/.test(dartResult[i])){
            // 스코어 계산
            if (dartResult[i] === 'S') {
                answerArr.push(currentScore ** 1);
            } else if (dartResult[i] === 'D') {
                answerArr.push(currentScore ** 2);
            } else if (dartResult[i] === 'T') {
                answerArr.push(currentScore ** 3);
            }
            currentScore = 0; // 각 다트가 끝날 때마다 currentScore 초기화
        } else if(/[*#]/.test(dartResult[i])){
            if(dartResult[i] === '*'){
                // '*'이 나온 경우
                if(answerArr.length > 1){
                    // 이전 다트의 점수를 2배로 만들기
                    answerArr[answerArr.length - 2] *= 2;
                }
                // 현재 다트의 점수를 2배로 만들기
                answerArr[answerArr.length - 1] *= 2;
            }
            if(dartResult[i] === '#'){
                // '#'이 나온 경우 현재 다트의 점수에 -1 곱하기
                answerArr[answerArr.length - 1] *= -1;
            }
        }
    }
   
    return answerArr.reduce((sum, score) => sum + score, 0);;
}
