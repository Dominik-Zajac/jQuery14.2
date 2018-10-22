$(function(){
  $('span:even').css('color', '#240bc6');
  $('span:odd').css('color', 'orange');
  $('p').css('margin-left', '25px');
  
  var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp=' + index + '>Click me</button>';
  //console.log(paragraphs);
  //console.log(button);
  
    $(element).append(button);
  $('.btn').css({'background-color': 'black', 'width': '100px', 'height': '50px', 'color': 'purple', 'border': '2px solid purple', 'border-radius': '5%', 'cursor': 'pointer', 'font-size': '18px'});
});
  
  $('button').click(function(){
	alert($(this).attr('data-tmp'));
});
  });