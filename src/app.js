/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const myInputField = document.getElementById("customRange3");
myInputField.addEventListener("input", () => {
  let pronoun = ["the", "our", "your", "my"];
  let adj = ["stubborn", "funny", "jacked", "big"];
  let noun = ["jagger", "kaiju", "gundam", "avatar"];
  let domains = [];
  let list = document.getElementById("Domains");
  let helpCoef = myInputField.value;
  list.innerHTML = "";

  if (myInputField.value != 1) {
    for (let p in pronoun.slice(0, helpCoef)) {
      for (let a in adj.slice(0, helpCoef)) {
        for (let n in noun.slice(0, helpCoef)) {
          domains.push(pronoun[p] + adj[a] + noun[n] + ".com");
        }
      }
    }

    domains.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  }
});
