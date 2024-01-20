function solution(k, m, score) {
    let answer = 0;
    let sortArray = [...score.sort((a, b) => b - a)];
    if (score.length < m) {
        return 0;
    }

    if (Math.floor(score.length / m) <= 1) {
        const newArray = sortArray.slice(0, m);
        answer = Math.min(...newArray) * newArray.length;
    } else {
        for (let j = 0; j < sortArray.length; j += m) {
            sortArray.splice(Math.floor(score.length / m) * m )
            const currentArray = sortArray.slice(j, j + m);
            answer += Math.min(...currentArray);
        }
        answer *= m;
    }

    return answer === 1 ? 0 : answer;
}
