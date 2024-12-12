// // let a=[19, 5,0,1, 42, 2, 77]
// // let b=a.sort((a,b)=> b-a).slice(-2)
// // let c= b.reduce((a,b)=> a+b)
// // console.log(c)

// // let a='I am the good boy'
// // let b=a.split(' ');
// // // console.log()
// // let k=[]
// // for( let i=0;i<b.length;i++){
// //     let m=b[i].split('').reverse().join('')
// //     k.push(m)
// // }
// // console.log(k.join(' '));

// // let a='I am the good boy'
// // let b=a.split(' ');
// // let k=[]
// // for(let c of b){
// //     let m=c.split('').reverse();
// //     k.push(m.join(''))
// // }
// // console.log(k.join(' '))

// // // console.log(b.join(''))
// // function lettersOnOddIndexes(a){
// //     let k=a.split('').join(' ').split(',').join(' ').split(' ').join('')
// //     console.log(k)
// //     let p=[]
// //     for(let i=0;i<k.length;i++){
// //         if(i%2!==0){
// //          p.push(k[i])
// //         }
// //     }
// //     return p.join('')
// // }
// // console.log(lettersOnOddIndexes("TypeScript"))
// function parendom(a){

//     return a.toUpperCase().split(' ').join('') === a.toUpperCase().split(' ').reverse().join('');
//     // let n=b.split('').reverse('').join(' ');
//     // if(b===n){
//     //     console.log('this is a parendom')
//     // }
//     // else{
//     //     console.log('this is not parendom')
//     // }

// }
// console.log(parendom('A man a plan a canal Panama'))

// let a=[2,2,4,4,6,8]
// let k= [...new Set(a)]
// let b=k.map(x=>x**2)
// let m=b.reduce((a,b)=> a+b)
// console.log(m)
function ben(a){
    let b=a.toString().split('').reverse()
    let k=0;
    let men=[]
    for(i=0;i<b.length;i++){
        if(k===3){
            men.push(',')
            k=0
        }
        men.push(b[i]);
        
        k++
    }
    return men.reverse().join('')
}
console.log(ben(100000))
let ken=[32,14,14,126,126,41,51]
let k=ken.indexOf(Math.max(...ken))
console.log(k)


