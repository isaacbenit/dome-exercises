//Element.addEventListener('click',function);
let button2=document.querySelector('.btn-2');
function alertbtn(){
    alert( 'i also love javascript')
}
button2.addEventListener('click',alertbtn);
// mouse over

const b = document.querySelector('.btn-3 ');
let k = 0;
function change(){
    // b.style.backgroundColor='blue';
    if(k === 0){
        b.style.backgroundColor='blue';
        k = 1
    } else {
        b.style.backgroundColor='gray';
        k = 0
    }
}
b.addEventListener('click',change);


// let revealBtn =document.querySelector(".reveal-btn");
// let hiddenContent = document.querySelector(".hidden-content");

// function show() {
//     if(hiddenContent.classList.contains("reveal-btn")){
//         hiddenContent.classList.remove("reveal-btn");
//     }
//     else{
//         hiddenContent.classList.add("reveal-btn");
//     }

// }
// revealBtn.addEventListener('click', show);

let z=document.querySelector('.reveal-btn');
let p=document.querySelector('.hidden-content');
let sp=document.querySelector('.second-paragraph');
let m=true;


function show(){
    if(m === true){
        
        sp.innerHTML = p.textContent

        m=false;
    }
    else{
        sp.textContent = ''
        m=true;
    }
}
z.addEventListener('click',show)

let zack=document.querySelector('#wap')
let ben=3;
function conv(){
    if(ben===3){
        zack.innerHTML=zack.textContent + " thank you";
        ben=ben-1;
    }
    else if(ben===2){
        
        zack.style.backgroundColor="yellow"
        ben-=1;
    }
    else if(ben===1){
        zack.innerHTML="Good Bye";
        ben-=1;
    }
    else{
        zack.style.display='none';
        
    }
}
zack.addEventListener('click',conv);

