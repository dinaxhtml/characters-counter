const textarea= document.querySelector('textarea');
const counter= document.querySelector('.counter');

function charCounter() {
    let textLength= textarea.value.length;
    
    counter.innerText= `${textLength}`;
}