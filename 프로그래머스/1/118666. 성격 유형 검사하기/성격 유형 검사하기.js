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
    const {R, T, C, F, J, M, A, N} = types
    return (R < T ? 'T' : 'R') + (C < F ? 'F' : 'C') +
    (J < M ? 'M' : 'J') + (A < N ? 'N' : 'A')
}