let a="how-can mirrors be real if our eyes aren't real"
let b=[];
console.log(typeof(a[3]));
// console.log(a);
// let b=a.split(' ');
// console.log(b);
console.log(a.length)
for(let i = 0; i<a.length;i++)
{
    if (a[i-1]===' ' || a[i-1]==='-'){
        // a[i].skip(i);
        b.push(a[i].toUpperCase()); 
        continue
    }
    
    
    b.push(a[i]);
}
// b.split('-')
console.log(b.join('').split('-').join('').split(' ').join(''));
