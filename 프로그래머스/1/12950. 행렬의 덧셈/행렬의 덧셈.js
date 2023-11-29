function solution(arr1, arr2) {
    var answer = [];
    for(var i = 0; i < arr1.length; i++){
        var row = []
        for(var j = 0; j < arr1[i].length; j++){
            row.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(row)
    }
    return answer
    // 다른 사람의 풀이
    // return arr1.map((item, idx1) => item.map((val, idx2) => val+arr2[idx1][idx2]));
    
}