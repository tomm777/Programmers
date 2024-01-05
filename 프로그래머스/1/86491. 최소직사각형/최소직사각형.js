function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    // for(let i = 0; i < sizes.length; i++){
    //      width.push(sizes[i].sort((a,b) => b - a)[0]) 
    //     height.push(sizes[i].sort((a,b) => b - a)[1]) 
    // }
    sizes.forEach((item, i) => {
        width.push(sizes[i].sort((a,b) => b - a)[0]) 
        height.push(sizes[i].sort((a,b) => b - a)[1]) 
    })
    return Math.max(...width) * Math.max(...height);
}