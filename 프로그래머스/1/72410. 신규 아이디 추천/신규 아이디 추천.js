function solution(new_id) {
    const answer = '';
    let lowerStr = '';
    // 1단계 대문자 => 소문자
    lowerStr = new_id.toLowerCase();
    lowerStr = lowerStr.replaceAll(/[^a-z0-9\-._]/gi,"").replace(/^\.+|\.+$/g, '').replace(/\.{2,}/g, '.');
    if(lowerStr.length === 0){
        lowerStr = 'a'
    }
    if(lowerStr.length > 15){
       lowerStr = lowerStr.slice(0,15).replace(/^\.+|\.+$/g, '');
    }
    if(lowerStr.length < 3){
        do{
            lowerStr += lowerStr[lowerStr.length - 1].repeat(1);
        }while(lowerStr.length < 3)
    }
    
    return lowerStr;
}