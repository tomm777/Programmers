function solution(s, skip, index) {
    let answer = '';
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i =0; i < skip.length; i++){
        alphabet.splice(alphabet.indexOf(skip[i]), 1)
    }
    for(let j = 0; j < s.length; j++){
        answer += alphabet[(alphabet.indexOf(s[j]) + index) % alphabet.length] 
    }
    return answer;
}