function solution(babbling) {
    let count = 0;
    let example = ["aya", "ye", "woo", "ma"];
    let testArr = [];
    
    for(let i = 0; i < babbling.length; i++){
        let str = babbling[i];
        for(let j = 0; j < example.length; j++){
            if(str.includes(example[j].repeat(2))){
                break;
            }
            str = str.split(example[j]).join(" ");
            
        }   
        if(str.split(' ').join('').length === 0){
            count++
        }
            
    }
    return count;
}