setInterval(function(){ splatStack.push(parseInt(Math.random() * 20) + 2); }, 10000);

function resume(){
    alert('this');
}


// floating action button
$(document).ready(function(){
    $('.fab').click (function(){
      $('.radial').toggleClass('open');
    });
  });