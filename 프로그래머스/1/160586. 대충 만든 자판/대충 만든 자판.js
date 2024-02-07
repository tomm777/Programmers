function solution(keymap, targets) {
    let answer = [];
    const getIndex = (val) => {
        const getIndexs = keymap.map(kMap => kMap.split('').indexOf(val)).filter(index => index !== -1);
        if (getIndexs.length === 0) return -1
        else {
            return Math.min(...getIndexs);
        }
    }
    
    const maxLength = Math.max(...targets.map(val => val.length));
    for(let i = 0; i < targets.length; i++) {
        let count = 0;
        for(let j = 0; j < maxLength; j++) {
            if(targets[i][j]) {
                const index = getIndex(targets[i][j]);
                console.log(index)
                if (index === -1) {
                    count = -1;
                    break;
                }
                count += index + 1;
            }
        }
        answer.push(count);
    }
    
    return answer;
}
