// // let a='i3b5jjkl2523'
// let k=[];
// function ben(a){
    
// for(let i=0;i<a.length;i++){
//     if(typeof(a[i]*1)==='number'){
//         k.push(a[i])
//     }
//     else{
//         continue
//     }
//     return k
// }
// }
// console.log(ben('p35kj6k4'))

// let a='2'
// let b=a*1;
// console.log(typeof(b))
// if (typeof(a*1)==='number'){

// }
// let c=-(a)-(b)-(k)
// console.log(c)
// let a='i3b5jjkl2523'
// let b= a.padStart(15,3)
// console.log(b);
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for(let day of days){
    console.log(day[0].toUpperCase()+day.slice(1))
    
}