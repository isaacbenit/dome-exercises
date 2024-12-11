
let n='10010000'
let b=0;
let k=[]
function addc(){
    for(let i=n.length-1;i>=0;i--){
    if (b===3){
        k.push(',');
       b=0; 
    }
    b++
    k.push(n[i])
}

// }
// addc()
// console.log(k.reverse().join(''))

// function ben(a){
//     let k=[]
//     for (let i=0;i<a.length;i++){
//         k.push(a[i]**2)
//     }
//     return k
// }
// console.log(ben([2,342,42,3]))

