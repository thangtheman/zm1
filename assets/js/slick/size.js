/**
 * Created by ThangTheMan on 8/1/16.
 */
function carouselSize(){
    $("#carouselHP").css("height",$(".carouselImg"));
    $(".modal").css("width",$(window).width()*.8);
    $(".newsletterInfo2").css("width",$("#newsletterFB2")-15);
    if ($(window).width() < 769){
        $(".modal").css("width",'100%');
    }
}

setTimeout(function(){carouselSize();},500);
$(window).on('load, resize',function(){
    carouselSize();
});
