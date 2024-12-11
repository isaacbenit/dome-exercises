// function ben(a){
//     let k=[]
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2!=0)
//             k.push(a[i])
//     }
//     return k

// }
// console.log(ben([2,1,4,5,31,3,5,22,24,62]))
// let a=[]
// function ken(a){
//     return a.filter(x=> x%2!=0)
// }
// console.log(ken([2,1,4,5,31,3,5,22,24,62]))

function men(p){
    return p.filter(x => typeof(x)==='string')
}
console.log(men([2,1,4,5,31,3,5,22,24,62, 'name', 'me']))