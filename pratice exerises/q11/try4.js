let a=['isaac'];
let k=[];
let b=a.toString();
for(let i=0;i<b.length;i++){
    if(b[i]==='s'){
       b[i]=b[i].toUpperCase();
    }
    b[i]=b[i+1];
    // k.push(b[i]);
    console.log(b[i]);
    
}



