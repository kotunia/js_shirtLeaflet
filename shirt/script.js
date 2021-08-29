/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Shirt from "./Shirt.js";

const everydayShirt = new Shirt(
  "Smiling Shirt",
  "M",
  "black",
  1,
  79,
  65,
  65,
  106,
  
  "../assets/images/shirt2.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="shirt" id="everyday">
    <figure class="shirt__image">
      <img src=${everydayShirt.image} alt="" />
    </figure>
    <h1 class="shirt__name">${everydayShirt.name}</h1>
    <ul class="shirt__features">
      <li class="packprop shirt__size">Size:<span> ${
        everydayShirt.size
      }</span></li>
      <li class="packprop shirt__color">Color:<span> ${
        everydayShirt.color
      }</span></li>
      
      <li class="shirt__age">On stock: from<span> ${everydayShirt.shirtAge()} days</span></li>
      
      <li class="packprop shirt__pockets">Number of pockets:<span> ${
        everydayShirt.pocketNum
      }</span></li>
      <li class="packprop shirt__lenght">Length:<span> ${
        everydayShirt.Length
      } cm</span></li>
      
      
      <li class="packprop shirt__sleeve">Sleeve:<span> ${
        everydayShirt.sleeve
      } cm</span></li>
      
      
      <li class="packprop shirt__chest">Chest:<span> ${
        everydayShirt.chest
      } cm</span></li>
      
    </ul>
  </article>
`;

main.innerHTML = content;
