function solution(a, b) {
    let obj = {
         1 : 'SUN',
         2 : 'MON',
         3 : 'TUE',
         4 : 'WED',
         5 : 'THU',
         6 : 'FRI', 
         0 : 'SAT'
    }
     let date = new Date(2016, a -1, b + 1);
    return obj[date.getDay()]
}