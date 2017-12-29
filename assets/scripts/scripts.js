$(document).ready(function(){

//Typewriter function
  function typeWriterHello(text, n) {
    if (n < (text.length)) {
      $('.type-writer-hello').html(text.substring(0, n + 1));
      n++;
      setTimeout(function() {
        typeWriterHello(text, n)
      }, 100);
    }
  };

  function typeWriterIam(text, n) {
    if (n < (text.length)) {
      $('.type-writer-iam').html(text.substring(0, n + 1));
      n++;
      setTimeout(function() {
        typeWriterIam(text, n)
      }, 100);
    }
  };

  function typeWriterDeveloper(text, n) {
    if (n < (text.length)) {
      $('.type-writer-developer').html(text.substring(0, n + 1));
      n++;
      setTimeout(function() {
        typeWriterDeveloper(text, n)
      }, 100);
    }
  };

  var textHello = $('.type-writer-hello').data('text');
  var textIam = $('.type-writer-iam').data('text');
  var textDeveloper = $('.type-writer-developer').data('text');

   typeWriterHello(textHello, 0);
   // typeWriterIam(textIam, 0);
   // typeWriterDeveloper(textDeveloper, 0);
   setTimeout(function(){
     typeWriterIam(textIam, 0);
   },2000);

   setTimeout(function(){
     typeWriterDeveloper(textDeveloper, 0);
   },4000);

});
