/**code to click on question blocks to change into blank blocks */

/**get the element that has the question blocks */
const body= document.body;
const s1 = body.querySelector(".box_space .s1 img");
const s2 = body.querySelector(".box_space .s2 img");
const s3 = body.querySelector(".box_space .s3 img");
const l1_1 = body.querySelector(".box_space .level1_1 img");
const l1_2 = body.querySelector(".box_space .level1_2 img");

/**change the element that has the question blocks to blank */
s1.addEventListener("click", ()=>setTimeout(()=>s1.setAttribute('src', 'img/Question_Box_Off.gif'), 1), false);
s2.addEventListener("click", ()=>setTimeout(()=>s2.setAttribute('src', 'img/Question_Box_Off.gif'), 1), false);
s3.addEventListener("click", ()=>setTimeout(()=>s3.setAttribute('src', 'img/Question_Box_Off.gif'), 1), false);

l1_1.addEventListener("click", ()=>setTimeout(()=>l1_1.setAttribute('src', 'img/Question_Box_Off.gif'), 1), false);
l1_2.addEventListener("click", ()=>setTimeout(()=>l1_2.setAttribute('src', 'img/Question_Box_Off.gif'), 1), false);


/**code to click on question blocks to change into blank blocks */

