// let a="how-can mirrors be real if our eyes aren't real"
// let b=[];
// console.log(typeof(a[3]));
// console.log(a.length)
// for(let i = 0; i<a.length;i++)
// {
//     if (a[i-1]===' ' || a[i-1]==='-'){
    
//      b.push(a[i].toUpperCase()); 
    
//         continue
//     }
    
//     b.push(a[i]);
// }
// console.log(b.join('').split('-').join('').split(' ').join(''));

let word = 'gervais ararwaye'
let wordArr = word.split(' ')
let newWord = ''
wordArr.forEach(item=> newWord += item.charAt(0).toUpperCase()+item.slice(1))
console.log(newWord)

