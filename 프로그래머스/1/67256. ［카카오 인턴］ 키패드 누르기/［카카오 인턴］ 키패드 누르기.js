function solution(numbers, hand) {
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    let leftHand = '*';
    let rightHand = '#';
    let answer = '';

    const getDistance = (handPos, targetPos) => {
        return Math.abs(handPos[0] - targetPos[0]) + Math.abs(handPos[1] - targetPos[1]);
    };

    for (let num of numbers) {
        if (num === 1 || num === 4 || num === 7) {
            leftHand = num;
            answer += 'L';
        } else if (num === 3 || num === 6 || num === 9) {
            rightHand = num;
            answer += 'R';
        } else {
            const targetPos = keypad[num];
            const leftDistance = getDistance(keypad[leftHand], targetPos);
            const rightDistance = getDistance(keypad[rightHand], targetPos);

            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
                leftHand = num;
                answer += 'L';
            } else if (leftDistance > rightDistance || (leftDistance === rightDistance && hand === 'right')) {
                rightHand = num;
                answer += 'R';
            }
        }
    }

    return answer;
}
