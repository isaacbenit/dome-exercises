// let a=document.querySelector('ul')
// // .innerHTML=`<ul>
// // // <li>isaac</li>
// // // <li>benit</li>
// // // <li>irakoze</li>
// // // <li>mamayake</li>
// // // </ul>`
// document.body.style.backgroundColor='yellow'
// let b='isaac'
// for (let i=0;i<b.length;i++){
//     a.innerHTML+=`<li>${b[i]}</li>`
// }
let div = document.querySelector('.container');

// compose DOM nodes
let fragment = document.createDocumentFragment();
for (let i = 0; i < 10; i++) {
   let p = document.createElement('p');
   p.textContent = `Paragraph ${i}`;
   fragment.appendChild(p);
}

// append the fragment to the DOM tree
div.appendChild(fragment);