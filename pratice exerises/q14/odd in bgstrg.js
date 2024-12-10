let a=[1, 3, 'doe', 3, 10, 11,17,6,6, 'john']
let k=0;
for (let i=0; i<a.length;i++){
    if(typeof(a[i]) === 'number' && a[i]%2!==0){
        k=k+1;
    }
    
}
console.log(k);

// let c='The greatest victory is that which requires no battle';
// let d=c.split(' ').reverse().join(' ');
// console.log(d);

let e=[19, 5, 42, 2, 77]
e.sort((a,b)=>b-a)
console.log(e[e.length-1]+e[e.length-2]);
