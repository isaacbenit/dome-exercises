// function chg(a,array){
//    let b=array.length-a;
//    for (let i=0;i<b;i++){
//     let k=Math.min(...array)
//     // array.remove(k);
//     array = array.filter(x => x!=k)
//    } 
//    return array.sort((a,b)=> a-b);
// }
// console.log(chg(3,[-1,-2,-4,0,-5,-6,-7,-1,-3]))

function ben(a,b){
    let p=b.sort((a,b)=> a-b)
    p=p.slice(p.length-a);
    return p;
}
console.log(ben(3,[-1,-2,-4,0,-5,-6,-7,-1,-3]))

