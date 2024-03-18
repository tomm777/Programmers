function solution(s) {
    let answer = s.split(' ').map(v => v.toLowerCase());
    return answer.map((v,i) => {
        if(v.length > 0) return answer[i][0].toUpperCase() + answer[i].slice(1)
        return v
    }).join(' ')
}