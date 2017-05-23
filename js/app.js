$('.btn-rd').click(function() {
  $('.red-shade-bar').slideToggle('slow');
  $('.red-shade-bar').attr('id','active');
});

$('.btn-or').click(function() {
  $('.orange-shade-bar').slideToggle('slow');
  $('.orange-shade-bar').attr('id','active');
});

$('.btn-ye').click(function() {
  $('.yellow-shade-bar').slideToggle('slow');
  $('.yellow-shade-bar').attr('id','active');
});

$('.btn-gr').click(function() {
  $('.green-shade-bar').slideToggle('slow');
  $('.green-shade-bar').attr('id','active');
});

$('.btn-bl').click(function() {
  $('.blue-shade-bar').slideToggle('slow');
  $('.blue-shade-bar').attr('id','active');
});

$('.btn-pr').click(function() {
  $('.purple-shade-bar').slideToggle('slow');
  $('.purple-shade-bar').attr('id','active');
});

$(".shade-bar").click(function(){
    var $this = $(this);
    if($this.data('clicked', false))  {
        console.log($(".hover-text").text());
        $('.playlist').slideToggle('slow');
    }
});
