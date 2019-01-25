// this exercise is from this url: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

/* N.B. Code below is missing its corresponding html (e.g. the output <div>, 
  which would be selected using const output = document.querySelector('.output').
*/

"use strict";

let output = document.querySelector('.output');
output.innerHTML = '';

for (let i = 10; i >= 0; i--) {
  if (i == 10) {
    const para = document.createElement('p');  
    para.textContent = "Countdown 10";
    output.appendChild(para);
  } else if (i == 0) {
      const para = document.createElement('p');  
      para.textContent = "Blast off!";
      output.appendChild(para);
  } else {
      const para = document.createElement('p');  
      para.textContent = i;
      output.appendChild(para);
  }
}


