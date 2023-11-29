function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // const test = arr.forEach((num) => {
    //     console.log(num)
    // })
    // console.log(test)
    let test = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i + 1]){
            continue;
        }
        test = arr[i]
            answer.push(test)
        
    }
    
    
    
    return answer;
}