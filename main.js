setInterval(function(){ splatStack.push(parseInt(Math.random() * 20) + 2); }, 10000);

function resume(){
  var dialog = bootbox.dialog({
    title: 'Alright! looks like someone wanna hair me',
    message: "<p>So what would you like to do with my resume?</p>",
    size: 'large',
    buttons: {
      view: {
        label: "view",
        className: 'btn-primary',
        callback: function(){
          window.open("https://ssbking.github.io/testhtml/");
            console.log('view resume online in new tab');
            // return false;
        }
    },
        email: {
            label: "email📧",
            className: 'btn-warning',
            callback: function(){
                console.log('email button clicked!');
                // function to send email
                bootbox.prompt({
                  title: "Who to send this email to?",
                  message: "<p>email will be sent with a link to this very site</p>",
                  inputType: 'email',
                  callback: function (result) {
                      // console.log(result);
                      var subject = "?subject=resume of shubham singh bohara";
                      var body = "&body=Hello there! you can review my resume cum profile page by visiting https%3A%2F%2Fssbking.github.io%2Fmobileserver%2F ";
                      var reciver = "mailto:"+result+subject+body;
                      console.log(reciver);
                      window.location.href = reciver;
                  }
              });
            }
        },
        ok: {
            label: "downlode PDF",
            className: 'btn-info',
            callback: function(){
                console.log('donlode the resume clicked');
                window.location = './assets/ssbking_github_io_testhtml.pdf';
            }
        }
    }
});
}

console.log('ignor LDRLLL10.png error| its from fluid canvas js');
// floating action button
$(document).ready(function(){
    $('.fab').click (function(){
      $('.radial').toggleClass('open');
    });
  });