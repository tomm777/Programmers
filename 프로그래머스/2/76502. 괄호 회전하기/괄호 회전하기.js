function solution(s) {
    if(s.length % 2 !== 0) return 0
    let count = 0;
    const obj = {'[' : ']','{' : '}','(' : ')'}
    for(let i = 0; i < s.length; i++){
        let str = s.slice(i) + s.slice(0, i);
        const arr = [];
        let flag = 1;
        for(let j = 0; j < str.length; j++){
            if(obj[str[j]]) arr.push(str[j])
            else {
                if(str[j] === obj[arr.pop()]) continue;
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