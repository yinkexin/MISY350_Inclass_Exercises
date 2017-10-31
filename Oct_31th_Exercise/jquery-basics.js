function main() {
  //document.getElementById('google').innerHTML = "Google";
  $('#google').html("Google+")
  //let links = document.getElementsByClassName('my-link');
  let links = $('.my-link'); //by id #; by class .
  links[0].innerHTML = 'Twitter';
  links[0].href = "http://www.twitter.com";
  links[1].innerHTML = 'TBD';
  links[1].href = "#";

  //hide and show main text
  $('.main-text').hide();
  $('.main-text').fadeIn(5000);

  //hide lists
  $('.list-1').hide();
  $('.list-2').hide();

  //show list by click
  $('.button-1').click(function(){
    $('.list-1').fadeIn(5000);
  })
  $('.button-2').click(function(){
    $('.list-2').slideToggle();
  })
}
//$(this).next()

$(document).ready(main);
