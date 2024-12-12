let mn = ["a", "b"];
let gv=mn.includes("b")

function ben(a) {
  a = a.toLowerCase().split('');
  let p = [];
  let z=[];
  let kv=0;
  let b = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
      z.push(a[i]);
      continue
    }
  }
  z= z.reverse('')
  for(x=0;x<a.length;x++){
    if(b.includes(a[x])){
        p.push(z[kv])
        kv++
    }
    else{
        p.push(a[x])
    }
  }
  return p.join('')  ;
  
}
console.log(ben("Tomatoes"));


