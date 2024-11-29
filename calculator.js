let a=document.querySelector('#fnumb');
let c=document.querySelector('#snumb');
let p=document.querySelector('#result');


function add() {
    let d= Number(a.value) + Number(c.value);
    p.innerHTML = d;
}
function sub() {
    let e= Number(a.value) - Number(c.value);
    p.innerHTML = e;
}
function dev() {
    let f= Number(a.value) / Number(c.value);
    p.innerHTML = f;
}
function mult() {
    let g= Number(a.value) * Number(c.value);
    p.innerHTML = g;
}