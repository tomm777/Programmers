function solution(name, yearning, photo) {
    let answer = [];
    let obj = {};
    let num = 0;
    
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i];
    }
    for(let i = 0; i < photo.length; i ++){
        for(let j = 0; j < photo[i].length; j++){
            if(!obj[photo[i][j]]){
                num += 0;
                continue;
            }
            num += obj[photo[i][j]]
        }
        answer.push(num);
        num = 0;
        
    }
    
    console.log(answer)
    
    return answer;
}