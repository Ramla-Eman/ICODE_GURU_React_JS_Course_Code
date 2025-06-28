// let btn = document.getElementById('btn');
// btn.ondblclick = function (){
//     prompt('write your name')
// }

// btn.addEventListener('click', () => {
//     alert('clicked')
// })

// let parentChild = document.getElementById('parentChild');
// let child = document.getElementById("child");

// parentChild.addEventListener('click', () => {
//     console.log('parent clicked')
// })

// child.addEventListener('click', (e)=> {
//     console.log('child clicked')
//     // e.stopPropagation();
// })

// setTimeout(() => {
//     alert('hello')
// }, 2000)

// setInterval(() => {
//     alert('hello')
// }, 2000)

let parentContainer = document.getElementById("parentContainer");
parentContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("parent clicked");
});

let childContainer = document.getElementById("childContainer");
childContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("childContainer clicked");
});

let child = document.getElementById("child");
child.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("child clicked");
});
