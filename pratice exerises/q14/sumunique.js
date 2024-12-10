// let a=[1, 2, 2, 3, 4, 4, 5];
// let s= new Set(a)
// let a1= [...s]

// const k=a1.reduce((a,b)=> a+b)
// console.log(k);

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

}
addc()
console.log(k.reverse().join(''))


