import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { greet } from './utils/util.js';

console.log(import.meta.env.VITE_APP_NAME); 
console.log(greet('Vite'));

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

setupCounter(document.querySelector('#counter'))

// head 스크립트로 바꾸기
async function includeHead() {
  const headElement = document.getElementById('dynamic-head');
  if (headElement) {
    const response = await fetch('/src/head.html'); // 반복되는 head
    if (response.ok) {
      const content = await response.text();
      headElement.outerHTML = content; // <head> 태그를 덮어씌움
    } else {
      console.error('Failed to load head.html:', response.statusText);
    }
  }
}
// includeHead();