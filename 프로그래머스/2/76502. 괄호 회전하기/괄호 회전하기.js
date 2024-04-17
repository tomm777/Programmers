function solution(s) {
    let count = 0;
    if(s.length % 2 !== 0) return 0
    const obj = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    }
    for(let i = 0; i < s.length; i++){
        let str = s.slice(i) + s.slice(0, i);
        const arr = [];
        let flag = 1;
        for(let j = 0; j < str.length; j++){
            // if (str[j] === "(" || str[j] === "{" || str[j] === "[") arr.push(str[j]);
            if(str[j] === "(" || str[j] === "{" || str[j] === "[") arr.push(str[j]);
            else {
                const temp = arr.pop();
                if(str[j] === ')'&& temp === '(') continue;
                else if(str[j] === '}'&& temp === '{') continue;
                else if(str[j] === ']'&& temp === '[') continue;
                flag = 0;
                break;
            }
        }
        if(flag){
            count++;
        }
    }
    return count;
}