function solution(nums) {
    let result = 0;
const primeCheck = (num) => {
        let i = 1;
        let count = 0;
        do{
            if(num % i === 0){
                count++
            }
            i++
            
        }while(i <= num)
            
        return count
    }
for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
            if(primeCheck(nums[i] + nums[j] + nums[k]) === 2) result++
        }
    }
}
    return result
}