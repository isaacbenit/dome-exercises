//Element.addEventListener('click',function);
let button2=document.querySelector('.btn-2');
function alertbtn(){
    alert( 'i also love javascript')
}
button2.addEventListener('click',alertbtn);
// mouse over

const b = document.querySelector('.btn-3 ');
function change(){
    b.style.backgroundColor='blue';
}

b.addEventListener('mouseover',change);

let revealBtn =document.querySelector(".reveal-btn");
let hiddenContent = document.querySelector(".hidden-content");

function show() {
    if(hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
    }
    else{
        hiddenContent.classList.add("reveal-btn");
    }

}
revealBtn.addEventListener('click', show);

let a=document.querySelector('#fnumb');
let c=document.querySelector('snumb');

function add{
    let d=a+c;
    
}