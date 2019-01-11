import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Haiku} from './haiku.js';


$(document).ready(function(){ 
  
  $('form#haiku').submit(function(event) {
    event.preventDefault();

    let lineOne = $("input#line1").val();
    let lineTwo = $("input#line2").val();
    let lineThree = $("input#line3").val();

    let haiku = new Haiku(lineOne,lineTwo, lineThree);
    let resultOne = haiku.checksNumbers(haiku.line1);
    let resultTwo = haiku.checksNumbers(haiku.line2);
    let resultThree = haiku.checksNumbers(haiku.line3);

    let resultone = haiku.countSyllables(haiku.line1);
    let resulttwo = haiku.countSyllables(haiku.line2);
    let resultthree = haiku.countSyllables(haiku.line3);


    $(".result2").text("line one has " + resultone + " syllables");
    $(".result3").text("line one has " + resulttwo + " syllables");
    $(".result4").text("line one has " + resultthree + " syllables");
    if(resultOne == true || resultTwo == true || resultThree == true){
    $(".result1").text("I'm Afraid I Cant Let You do that, numbers are not acceptable in Haiku World");
    } else if (resultone == 5 && resulttwo== 7 &&  resultthree == 5){
    $(".result1").text("You've got a Haiku"); 
    } else{
    $(".result1").text("Try Again Buddy"); 
    }
  }
)});



// let buttonInfo = document.getElementById("btn");
// let userInputElement1 = document.getElementById("line1");
// let userInputElement2 = document.getElementById("line2");
// let userInputElement3 = document.getElementById("line3");

// buttonInfo.addEventListener("click", getInput);

// let haiku;

// function getInput() {
//   let element1 = userInputElement1.value;
//   let element2 = userInputElement2.value;
//   let element3 = userInputElement3.value;

//   haiku = new Haiku(element1, element2, element3);
// }

//   let resultOne = haiku.checksNumbers(haiku.line1);
//   let resultTwo = haiku.checksNumbers(haiku.line2);
//   let resultThree = haiku.checksNumbers(haiku.line3);

//   let resultone = haiku.countSyllables(haiku.line1);
//   let resulttwo = haiku.countSyllables(haiku.line2);
//   let resultthree = haiku.countSyllables(haiku.line2);

//   let result = document.getElementById("result1");
  

//   if(resultOne == true || resultTwo == true || resultThree == true){
//     result.innerHTML("<h2>I'm Afraid I Cant Let You do that, numbers are not acceptable in Haiku World</h2>");
//   } else {
//     result.innerHTML("<h2>Test</h2>")
//   }