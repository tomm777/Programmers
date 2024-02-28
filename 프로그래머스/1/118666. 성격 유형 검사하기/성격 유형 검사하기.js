function solution(survey, choices) {
    var answer = '';
    const checkScore = {
        1 : 3,
        2 : 2,
        3 : 1,
        4 : 0,
        5 : -1,
        6 : -2,
        7 : -3
    }
    const types = {
        R : 0,
        T : 0,
        C : 0,
        F : 0,
        J : 0,
        M : 0,
        A : 0,
        N : 0
    }
    // 3 3 -1
    for(let i = 0; i < survey.length; i++){
        // console.log(checkScore[choices[i]]);
        // console.log(survey[i])
        let score = checkScore[choices[i]];
        if(score > 0){
            types[survey[i][0]] += score;
        }
        else if(score < 0){
            types[survey[i][1]] += Math.abs(score);
        }
    }
    return (types['R'] < types['T'] ? 'T' : 'R') +
        (types['C'] < types['F'] ? 'F' : 'C') +
    (types['J'] < types['M'] ? 'M' : 'J') +
    (types['A'] < types['N'] ? 'N' : 'A')
}