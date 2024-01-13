function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
        const num = Number(arr1[i].toString(2)) + Number(arr2[i].toString(2));
        const str = num.toString().padStart(n,0).replace(/[^0]/g, '#').replace(/0/g, ' ')
        answer.push(str)
    }
    
    return answer;
}