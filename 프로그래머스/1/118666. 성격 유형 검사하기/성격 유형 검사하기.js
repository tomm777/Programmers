function solution(survey, choices) {
    const types = {R : 0, T : 0, C : 0, F : 0, J : 0, M : 0, A : 0, N : 0}
    for(let i = 0; i < survey.length; i++){
        let score2 = choices[i] - 4;
        if(score2 < 0){
            types[survey[i][0]] += Math.abs(score2);
        }
        else if(score2 > 0){
            types[survey[i][1]] += Math.abs(score2);
        }
    }
    console.log(types)
    return (types['R'] < types['T'] ? 'T' : 'R') +
        (types['C'] < types['F'] ? 'F' : 'C') +
    (types['J'] < types['M'] ? 'M' : 'J') +
    (types['A'] < types['N'] ? 'N' : 'A')
}