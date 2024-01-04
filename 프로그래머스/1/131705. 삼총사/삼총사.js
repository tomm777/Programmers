function solution(number) {
    var answer = 0;
    let count = 0;
    for(let i = 0; i < number.length; i++){
        for(let j = i + 1; j < number.length; j++){
            for(let k = j + 1; k < number.length; k++){ 
                console.log(number[k])
                if(number[i] + number[j] + number[k] === 0){
                    count++
                }
            }
            
        }
    }
//     for(let k = 2; k < number.length; k++){
//         for(let j = 1; j < number.length; j++){
//             for(let i = 0; k < number.length; i++){ 
//                 console.log('ㅁ')
//             }
            
//         }
//     }
    return count;
}