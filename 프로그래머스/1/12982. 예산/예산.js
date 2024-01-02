function solution(d, budget) {
    let allowTeam = 0;
    let allowTotal = 0;
    d= d.sort((a ,b) => a - b)
    console.log(d)
    for(let i = 0; i < d.length; i++){
        allowTotal += d[i];
        allowTeam += 1;
        if(budget < allowTotal + d[i + 1]){
            break;
        }
    }
    return allowTotal > budget ? allowTeam -= 1 : allowTeam
}