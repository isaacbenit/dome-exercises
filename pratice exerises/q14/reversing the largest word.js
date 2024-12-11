let a='The question he had was meaningless'
let b= a.split(' ');
let k=[];
console.log(b)

function tlgs(){
for(let i=0;i<b.length;i++){
    k.push(b[i].length)

}

}

tlgs()
let long = k.indexOf(Math.max(...k))
console.log(b[long].split('').reverse().join(''))