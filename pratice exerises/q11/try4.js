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


