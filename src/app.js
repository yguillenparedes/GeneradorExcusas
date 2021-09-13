/* eslint-disable */
//import "bootstrap";
//import "../src/styles.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

window.onload = function() {
  //write your code here
  var valorQuien = who[Math.floor(Math.random() * (who.length - 0) + 0)];
  var valorQue = what[Math.floor(Math.random() * (what.length - 0) + 0)];
  var valorCuando = when[Math.floor(Math.random() * (when.length - 0) + 0)]

  excusa = `${valorQuien} ${valorQue} ${valorCuando}`;
  document.getElementById("excuse").innerHTML = excusa;
  console.log(excusa);
};
