/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["The cat", "My goat", "The fisherman", "My shark"];
  let action = ["swallowed", "deleted", "bite"];
  let what = ["My phone", "My code", "My TV"];
  let when = ["while I was walking", "While I was watching TV", "Before work"];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateExcuse() {
    let randomWho = getRandomElement(who);
    let randomAction = getRandomElement(action);
    let randomWhat = getRandomElement(what);
    let randomWhen = getRandomElement(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  let excuseh1 = document.querySelector("h1");
  excuseh1.textContent = generateExcuse();
  console.log(generateExcuse());
};
