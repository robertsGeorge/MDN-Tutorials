// this exercise is from this url: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code 
// it is missing its corresponding html (the element with class="admitted" and the element with class="refused").

"use strict";

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (let i = 0; i < people.length; i++) {
  if (people[i] === "Phil" || people[i] === "Lola") {
    refused.textContent += people[i] + ", ";
  } else {
    admitted.textContent += people[i] + ", ";
  }
}

admitted.textContent = admitted.textContent.slice(0, -2) + "."; // chops the last comma and space off and replaces with full stop.
refused.textContent = refused.textContent.slice(0, -2) + "."; // as above.


// let i = 0;

// refused.textContent += ;
// admitted.textContent += ;