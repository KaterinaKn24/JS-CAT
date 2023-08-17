let cllcat = document.querySelector('button[name="call-cat"]');
let bxEl = document.querySelector('.box');
let ctEl = document.querySelector('.cat');
console.log(cllcat);

cllcat.addEventListener('click', (ev) =>{
    ctEl.classList.toggle('catup');
 
});

ctEl.addEventListener('mousemove', (ev) => {
    console.log(ctEl);
}); 