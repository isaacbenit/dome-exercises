let a=['isaac'];
let k=[];
let b=a.toString();
for(let i=0;i<b.length;i++){
    if(b[i]==='s'){
       k.push(b[i].toUpperCase())
       continue;
    }
    k.push(b[i]);
    
}

console.log(k.join(''));

// let a=[2,3,4,5];
// console.log(typeof(a[2]));
// // let b=[];
// // function sqr(){
// //     for(let i=0;i<a.length;i++){
// //         b.push((a[i])*(a[i]));
// //     }
// //     console.log(b);
// //     // console.log(a);
// // }
// // sqr();
// let c = a.map( item => item**2)
// console.log(c)
