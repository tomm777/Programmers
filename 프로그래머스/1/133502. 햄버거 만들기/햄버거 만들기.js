function solution(ingredient) {
    var answer = 0;
    const arr = [];
    for(let i = 0; i < ingredient.length; i++){
        arr.push(ingredient[i]);
        if(arr.slice(-4).join('') === '1231'){
            arr.splice(-4)
            answer++
        }
    }
    
    return answer;
}