function solution(t, p) {
    var answer = 0;
    let count = 0;
    
    for(let i = 0; i < t.length; i++){
        if(t.slice(i, p.length + i).length === p.length && t.slice(i, p.length + i) <= p)
            count++
    }
    return count;
}