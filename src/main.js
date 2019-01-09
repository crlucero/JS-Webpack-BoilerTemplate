import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { day } from './date.js';


$(document).ready(function(){
  $('form#tracker').submit(function(event) {
    event.preventDefault();
    let year = (parseInt($("input#year").val()));
    let month = (parseInt($("input#month").val())-1);
    let days = (parseInt($("input#day").val()));
    let result = day(year,month,days);
    $(".result").text(result);
  }
)});