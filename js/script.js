
var span = $('span');
 span.each( function(index, elem){
  if (index % 2 == 0){
    $(elem).css('color','red');
  }
});

var paragraf = $('p');
    
  paragraf.each(function(index, elem){
    var pButton = $('<button cllas="btn" data-tmp="'+ index +'">Click Me</button>');
    $(elem).append(pButton);
  });
$("button").click(function(){
  alert($(this).attr("data-tmp"));
});