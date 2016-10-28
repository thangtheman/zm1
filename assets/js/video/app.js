function playersize(){
    $("#moviePlayerHP").css("height",$(window).height());
    // $("#zeeplayer").css("height",$("#zeeplayer").width()*0.54596100278552);
   // $("#zeeplayer").css("height",$("#moviePlayerHP").height()*.9);
   //  $("#zeeplayer").css("width",$("#moviePlayerHP").width()*.9);
    $(".titleWrapper").css("width",$(".sectionTilte h1").width()+$(".sectionTilte h1").offset().left+20);
    $(".zeePlayerModal").css("height",$(".carouselImg"));
    $(".zeePlayerModal").css("width",$(".carouselImg"));
}
playersize();
//Resize To Fit Frame
$(window).on('load, resize',function(){
    playersize();
    $(".titleWrapper").css("width",$(".sectionTilte h1").width()+$(".sectionTilte h1").offset().left+20);
});
setTimeout(function(){playersize();},500);
