function solution(numbers, hand) {
    let answer = [];
    // numbers를 인덱싱하기위한 배열
    const arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']];
    // *과 # 의 인덱스 부여
    let rightHand = '32';
    let leftHand = '30';
    let targetHand = '';
    // numbers의 length만큼 순회
    for(let i = 0; i < numbers.length; i++){
        // [1,2,3] [4,5,6] 배열을 순회하면서 
        for(let j = 0; j < arr.length; j++){
            if(arr[j].indexOf(numbers[i]) === 0){
                leftHand = [j] +""+ arr[j].indexOf(numbers[i]);
                answer.push('L');
                break;
            }
            else if(arr[j].indexOf(numbers[i]) === 2){
                rightHand = [j] +""+ arr[j].indexOf(numbers[i]);
                answer.push('R');
                break;
            }
            else {
                console.log(arr[j].indexOf(numbers[i]))
                if(arr[j].indexOf(numbers[i]) > 0){
                    targetHand = [j] +""+ arr[j].indexOf(numbers[i]);
                const leftHandDif = Math.abs(Number(targetHand[0])-Number(leftHand[0])) + Math.abs(Number(targetHand[1])-Number(leftHand[1]));
                const rightHandDif = Math.abs(Number(targetHand[0])-Number(rightHand[0])) + Math.abs(Number(targetHand[1])-Number(rightHand[1]));
                    if(leftHandDif < rightHandDif){
                        leftHand = [j] +""+ arr[j].indexOf(numbers[i]);
                        answer.push('L');
                    }
                    else if(leftHandDif > rightHandDif){
                        rightHand = [j] +""+ arr[j].indexOf(numbers[i]);
                        answer.push('R');
                        break;
                    }
                    else {
                        if(hand === 'right'){
                            rightHand = [j] +""+ arr[j].indexOf(numbers[i]);
                            answer.push('R');
                            break
                        }
                        else {
                            leftHand = [j] +""+ arr[j].indexOf(numbers[i]);
                            answer.push('L');
                            break;
                        }
                        
                    }
                }
            }
        }
    }

    return answer.join('');
}