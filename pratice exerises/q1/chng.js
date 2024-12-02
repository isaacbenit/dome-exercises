let a=document.querySelector('.btn');
let b=document.querySelector('.p1');
let d=document.querySelector('.show')
let c=false;
b.style.display='none';
function conv(){
    // if(c === true){
    //     d.innerHTML= b.textContent;
    //     c=false;
    // }
    // else{ d.innerHTML='';
    //     c=true;

    // }

    if (c === true){
        b.style.display='none';
        c=false;
    }
    else{
        b.style.display='inline';
        c=true;
    }


}