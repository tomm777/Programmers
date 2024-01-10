function solution(array, commands) {
    var answer = [];
     for (let i = 0; i < commands.length; i++) {
        const start = commands[i][0] - 1;
        const end = commands[i][1];
        const kth = commands[i][2] - 1;

        if (start >= 0 && end <= array.length && kth >= 0) {
            const slicedArray = array.slice(start, end);
            const sortedArray = slicedArray.sort((a, b) => a - b);
            answer.push(sortedArray[kth]);
        } else {
            answer.push("Invalid Command");
        }
    }
    return answer;
}