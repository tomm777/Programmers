function solution(s) {
    var answer = '';
    const max = Math.max(...s.split(' '));
    const min = Math.min(...s.split(' '))
    
    return  Math.min(...s.split(' ')) +' '+ Math.max(...s.split(' '))
}