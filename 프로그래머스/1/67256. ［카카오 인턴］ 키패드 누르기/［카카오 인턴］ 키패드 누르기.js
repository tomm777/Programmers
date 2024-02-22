function solution(numbers, hand) {
    let answer = '';
    // numbers를 인덱싱하기위한 배열
    const arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']];
    // *과 # 의 인덱스 부여
    let rightHandIndex = '32';
    let leftHandIndex = '30';
    let targetHand = '';
    // 거리를 계산해주는 함수
    const getDistance = (handIdx, targetIdx) => {
        return Math.abs(handIdx[0] - targetIdx[0]) + Math.abs(handIdx[1] - targetIdx[1]);
    };
    // numbers의 length만큼 순회
    
    for(let i = 0; i < numbers.length; i++){
            let targetIndex; 
        // [1,2,3] [4,5,6] 배열을 순회하면서 인덱싱
        for(let j = 0; j < arr.length; j++){
            let index = arr[j].indexOf(numbers[i]);
            // 해당 인덱스를 찾았을 때 해당 위치를 할당 후 탈출 
            if(index !== -1){
                targetIndex = [j, index];
                break;
            }
        }
        // 1, 4, 7 일 때 L
        if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7){
            leftHandIndex = targetIndex;
            answer += 'L';
        }
        // 3, 6, 9 일 때 R
        else if(numbers[i] === 3  || numbers[i] === 6 || numbers[i] === 9){
            rightHandIndex = targetIndex;
            answer += 'R';
        }
        // 중간 숫자일 경우
        else {
             const leftDistance = getDistance(leftHandIndex, targetIndex);
             const rightDistance = getDistance(rightHandIndex, targetIndex);
            if(leftDistance < rightDistance || leftDistance === rightDistance && hand === 'left'){
                leftHandIndex = targetIndex;
                answer += 'L'
            }
            else if(leftDistance > rightDistance || leftDistance === rightDistance && hand === 'right'){
                rightHandIndex = targetIndex;
                answer += 'R'
            }

    }
}

    return answer;
}