 //GetElementById()

 /* const title = document.getElementById('main-heading');
 console.log(title);
 let list =document.getElementsByClassName('main2');
 console.log(list);
 let container= document.querySelectorAll('div');
 console.log(container); */

 const title= document.querySelector('#main-heading');

 title.style.color='red';

 //console.log(title);

let list=document.querySelectorAll('.second');

for(i=0;i<list.length;i++){
    list[i].style.fontSize = '0.89em';
}
// const z=document.querySelector('.main2');
// const b=document.createElement(p);
// b.append(p);
// p.innerText='my name is isaac';

const ul=document.querySelector('ul');
const li=document.createElement('li');
ul.append(li);
li.innerText='x-mean';
li.setAttribute('id','main-heading');
li.removeAttribute('id')
