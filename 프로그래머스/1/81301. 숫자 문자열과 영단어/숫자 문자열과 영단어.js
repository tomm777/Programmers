function solution(s) {
    let result = '';
    let currentWord = '';
    let answer = '';
    const word = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    
 for (let i = 0; i < s.length; i++) {
        currentWord += s[i];
        if (word.hasOwnProperty(currentWord)) {
            result += word[currentWord];
            currentWord = '';
        } else if (!isNaN(currentWord)) {
            result += currentWord;
            currentWord = '';
        }
    }
    return Number(result)
}

    