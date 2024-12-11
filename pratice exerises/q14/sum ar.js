// let k=[1,3,5,6,6,20,45,5];
// let p=k[0];
// function a(){
//     for(let i=1;i<k.length;i++){
//         if(k[i]!==k[i-1]){
//         p+=k[i];}
//     }
//     // return p;
//     console.log(p);
// }
// a();
let k = [1,3,5,6,6,20,45,5];
let st= new Set(k)
let st1=[...st]
console.log(st1.reduce((a,b)=> a+b))