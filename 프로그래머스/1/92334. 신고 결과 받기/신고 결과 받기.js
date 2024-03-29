function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    const report_list = {}
    
    id_list.map((user)=>{
        //key로 userid를 value로 빈 배열을 가지는 객체
        report_list[user] = [] 
    })
     report.map((user)=>{
        const [user_id, report_id] = user.split(' ')
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id)
        }        
    })
     for(const key in report_list){
        //이용정지 유저
        if(report_list[key].length >= k){ 
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}