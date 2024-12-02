//  //GetElementById()

//  /* const title = document.getElementById('main-heading');
//  console.log(title);
//  let list =document.getElementsByClassName('main2');
//  console.log(list);
//  let container= document.querySelectorAll('div');
//  console.log(container); */

//  const title= document.querySelector('#main-heading');

//  title.style.color='blue';

//  //console.log(title);

// let list=document.querySelectorAll('.second');

// for(i=0;i<list.length;i++){
//     list[i].style.fontSize = '1.9em';
// }

// const ul=document.querySelector('ul');
// const li=document.createElement('li');
// ul.append(li);
// li.innerText='x-mean';
// li.setAttribute.add('id','main-heading')
// //li.removeAttribute('id');
// li.classList.add('list')

// console.log(li.classList.contains('list'));
// // li.remove();

let ul=document.querySelector('ul')
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// let html= document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// ul.childNodes[1].style.backgroundColor='blue';
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

