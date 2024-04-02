function solution(n){
    let count = 0;
    // let num = n;
    // let arr = [];
    // let tempArr = [];
    while(n > 0){
        count += n % 2;
        n = Math.floor(n / 2)
    } 
    // while(num > 1){
    //     if(num % 2 === 0){
    //         arr.push(num / 2);
    //         num = num / 2;
    //     }
    //     else {
    //         num--            
    //     }
    // } 
    // arr.push(n)
    // arr.sort((a,b) => a- b)
    // for(let i = 0; i < arr.length; i++){
    //         if(tempArr[tempArr.length - 1] * 2 !== arr[i]){
    //             count++
    //         }
    //     tempArr.push(arr[i]);
    // }
    return count;
}