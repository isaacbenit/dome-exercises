let c=document.querySelector('.one');
// function tm(){
//     c.innerHTML= Date();
// }

// c.innerHTML= Date;

// c.addEventListener('onClick', document.querySelector('p').innerHTML=Date());
// c.addEventListener('click',function alt(){ alert('hello boy');});
let d=document.querySelector('.num');
let m=document.querySelector('p')
function cla(){ 
    let inputvalue = d.value;
    let k= Number(inputvalue[0])+Number(inputvalue[2]);
    // let k= (d.childNodes[0].nodeValue[0])+ (d.childNodes[2].nodeValue[2]);
        m.innerHTML=k;   
}
