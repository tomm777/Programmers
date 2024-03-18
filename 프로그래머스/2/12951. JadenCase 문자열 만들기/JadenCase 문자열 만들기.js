function solution(s) {
    // s = s.replace(/\s+/g, ' ')
    let answer = s.split(' ').map(v => v.toLowerCase());
        let test = []
    
  answer.map((v,i) => {
        if(v.length > 0){
            test.push(answer[i][0].toUpperCase() + answer[i].slice(1)) 
        }
        else {
            test.push(v)
        }
    })
    console.log(test.join(' '))
    return test.join(' ')
}