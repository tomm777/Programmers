function solution(today, terms, privacies) {
    const term = {}
    terms.forEach(item => term[item.split(' ')[0]] = item.split(' ')[1])
    const answer = [];
    for(let i = 0; i < privacies.length; i++){
        let date = privacies[i].split('.')
        let targetDays = term[date[2][3]] * 28
        let year = Number(date[0]);
        let month = Number(date[1]);
        let day =  Number(date[2][0]+date[2][1]);
        day += targetDays - 1
        if (day > 28) {
            month += Math.floor(day / 28);
            day = day % 28;
        if (day === 0) {
            day = 28;
            month -= 1;
        }
        if (month > 12){
            year += Math.floor(month / 12);
            month = month % 12;
        }
        if (month === 0){
            month = 12;
            year -= 1;
        }
            if(new Date(`${year}.${month}.${day}`) < new Date(today)){
                answer.push(i + 1)
            }
        
    }
       
    }

    return answer;
}