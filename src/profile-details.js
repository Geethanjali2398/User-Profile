

$(document).on('click', '#tab_about', function(){
     $("#div_container,#div_design").hide();
     $(".nav").removeClass('active');
     $("#div_about").show();
});

$(document).on('click', '#tab_home', function(){
     $("#div_about,#div_design").hide();
     $("#div_container").show();
     $(this).addClass('active');
});

$(document).on('click', '#tab_design', function(){
     $("#div_about,#div_container").hide();
     $(".nav").removeClass('active');
     $(this).addClass('active');
     $("#div_design").show();
});
