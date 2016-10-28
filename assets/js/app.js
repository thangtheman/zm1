
function playersize(){
    $(".titleWrapper").css("width",$(".sectionTilte h1").width()+$(".sectionTilte h1").offset().left+20);
    $(".zeePlayerModal").css("height",$(".carouselImg"));
    $(".zeePlayerModal").css("width",$(".carouselImg"));
    $(".socialHeader").css("top",$("#moviePlayerHP .logo").height()*0.5);
    $('.socialHeader').css("right", $('.container').css('margin-right'));
    $('#homePageYoutubeVideo').css("height", $('#homePageYoutubeVideo').width()/1.78);


}
playersize();
//Resize To Fit Frame
$(window).on('load, resize',function(){
    playersize();
    $(".titleWrapper").css("width",$(".sectionTilte h1").width()+$(".sectionTilte h1").offset().left+20);
});
setTimeout(function(){playersize();},500);

function carouselSize(){
    $("#carouselHP").css("height",$(".carouselImg"));
    $(".modal").css("width",$(window).width()*.8);
    $(".newsletterInfo2").css("width",$("#newsletterFB2")-15);
    if ($(window).width() < 769){
        $(".modal").css("width",'100%');
        $('#datepicker').css("width", $('#timeZoneMobile').width()+50);
        $('#homePageYoutubeVideo').css("height", $('#homePageYoutubeVideo').width()/1.78);
    }

}

setTimeout(function(){carouselSize();},500);
$(window).on('load, resize',function(){
    carouselSize();
});

$(document).ready(function () {
    if (screen.width > 767) {
        setTimeout(function(){
            $(".slick-dots").css("left",($(".slick-slide .col-sm-5").width()/2) - ($(".slick-dots").width()/2)+20+ "px");
        },50);      }
    else {
        setTimeout(function(){
            $(".slick-dots").css("left",($(".slick-slide .col-sm-5").width()/2) - ($(".slick-dots").width()/2)+10+ "px");
        },50);
    }




    //Time Zone
    $('#timeZone').on('change', function() {
        if ( this.value == '0')
        {
            $("#pacificT").show();
            $("#mountainT").hide();
            $("#centralT").hide();
            $("#easterT").hide();

        }
        if ( this.value == '2')
        {
            $("#centralT").show();
            $("#pacificT").hide();
            $("#mountainT").hide();
            $("#easterT").hide();
        } if ( this.value == '3')
        {
            $("#easterT").show();
            $("#pacificT").hide();
            $("#centralT").hide();
            $("#mountainT").hide();
        }
        if ( this.value == '1')
        {
            $("#mountainT").show();
            $("#pacificT").hide();
            $("#centralT").hide();
            $("#easterT").hide();
        }
    });
    $('#timeZoneMobile').on('change', function() {
        if ( this.value == '0')
        {
            $(".pacificTMobile").show();
            $(".mountainTMobile").hide();
            $(".centralTMobile").hide();
            $(".easterTMobile").hide();

        }
        if ( this.value == '2')
        {
            $(".centralTMobile").show();
            $(".pacificTMobile").hide();
            $(".mountainTMobile").hide();
            $(".easterTMobile").hide();
        } if ( this.value == '3')
        {
            $(".easterTMobile").show();
            $(".pacificTMobile").hide();
            $(".centralTMobile").hide();
            $(".mountainTMobile").hide();
        }
        if ( this.value == '1')
        {
            $(".mountainTMobile").show();
            $(".pacificTMobile").hide();
            $(".centralTMobile").hide();
            $(".easterTMobile").hide();
        }
    });
    //Time Zone EnD

    var id="", title = "", date = "", time = "", description = "", genre = "", runtime = "", trailer = "", poster = "", featured="", order = "";


//Grid 4 Featured
    var zeeMundoMoviesPoster = "";
    var zeeMundoMoviesPosterContainer = "";
    for (i=0; i < movie.length; i++) {
        title = movie[i].title;
        date = movie[i].date;
        time = movie[i].time;
        description = movie[i].description;
        genre = movie[i].genre;
        runtime = movie[i].runtime;
        trailer = movie[i].trailer;
        poster = movie[i].poster;
        featured = movie[i].featured;
        order = movie[i].order;
        id = poster.substring(30, poster.length -4);


        var mt=time;
        var pt=time-1;
        var ct=pt+2;
        var et=ct+1;
        if (featured == 1) {

            zeeMundoMoviesPoster = '<div class="col-md-6 col-sm-12"><a class="HoverGrid" data-toggle="modal" data-target=".'+id+'movie" data-theVideo="'+trailer+'" href="#"><div class="row gridInfo moviePosters" ><div class="col-sm-4 col-md-6 col-xs-12" style="padding: 0; margin: 0;"><img style="width: 100%" src="'+poster+'" alt=""></div> <div class="col-sm-8 col-md-6 col-xs-12 infoPad" style="padding: 0;padding-left: 15px;padding-right: 15px;"><h3 class="movieModalTitle">'+title+'</h3> <div class="movieModalInfo"> <p class="alignleft">'+genre+'</p> <p style="margin-bottom: 5px">Duración: '+runtime+'</p> </div> <div class="moviedetails"> <p style="margin-bottom: 5px;line-height: 17px;">'+description+'</p><p>Estreno: '+date+'</p> <table class="timeTable"><tr><td>'+pt+'PM PT</td><td>'+mt+'PM MT</td><td>'+ct+'PM CT</td><td>'+et+'PM ET</td></tr></table>  </div> </div> </div></a> </div>';
            //Keep on adding info
            zeeMundoMoviesPosterContainer += zeeMundoMoviesPoster;
            var zeeMundoMoviesPosterDiv = document.getElementById('zeeMundoMoviesPosterContainer');
            zeeMundoMoviesPosterDiv.innerHTML = zeeMundoMoviesPosterContainer;

        }

    }
//        Grid 4 Featured End











    // Movies Modal
    var zeeMundoMoviesPosterModal = "";
    var zeeMundoMoviesPosterModalContainer = "";

    for (i=0; i < movie.length; i++) {
        title = movie[i].title;
        date = movie[i].date;
        time = movie[i].time;
        description = movie[i].description;
        genre = movie[i].genre;
        runtime = movie[i].runtime;
        trailer = movie[i].trailer;
        poster = movie[i].poster;
        featured = movie[i].featured;
        order = movie[i].order;

        if (poster == "TBD") {
            id = title
        }
        else {
            id = poster.substring(30, poster.length - 4);
        }
        if (trailer == "TBD") {
            var Vtrailer = '<div class="row rowModal"><h3 class="movieModalTitle text-center">'+title+'</h3><img class=" img-responsive" style="margin: auto;" src="' + poster + '" alt=""></div>';
        }
        else {
            var Vtrailer = '<div class="row rowModal"><h3 class="movieModalTitle" style="padding-left: 15px">'+title+'</h3><iframe style="width: 100%;min-height: 350px" src="" frameborder="0"></iframe></div>';
        }


        if (featured == 1) {
            zeeMundoMoviesPosterModal = '<div class="modal fade '+id+'movie ' + ' col-sm-6" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"> <a type="button" class="closePos" data-dismiss="modal" aria-label="Close">X</a>'+Vtrailer+'</div></div></div>';
            //Keep on adding info
            zeeMundoMoviesPosterModalContainer += zeeMundoMoviesPosterModal;
            var zeeMundoMoviesPosterModalContainerDiv = document.getElementById('zeeMundoMoviesPosterModalContainer');
            zeeMundoMoviesPosterModalContainerDiv.innerHTML = zeeMundoMoviesPosterModalContainer;

            //    autoplay Youtube Video Modal

            //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
            //    autoplay Youtube Video Modal End
            autoPlayYouTubeModal();

            //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
            function autoPlayYouTubeModal() {
                var trigger = $("body").find('[data-toggle="modal"]');
                trigger.click(function () {
                    var theModal = $(this).data("target"),
                        videoSRC = $(this).attr("data-theVideo"),
                        videoSRCauto = videoSRC + "&autoplay=1";
                    $(theModal + ' iframe').attr('src', videoSRCauto);
                    $(theModal + ' button.close').click(function () {
                        $(theModal + ' iframe').attr('src', videoSRC);
                    });
                    $('.modal').click(function () {
                        $(theModal + ' iframe').attr('src', videoSRC);
                    });
                });
            }
        }
    }
//Movies Modal End

    var date,dateid, dateidS, month, dayNo,dayName,dayGenre, time1,time1slot,time1slotid, time2, time2slot,time2slotid, time3, time3slot,time3slotid, time4, time4slot,time4slotid, time5, time5slot,time5slotid, time6, time6slot,time6slotid, time7, time7slot,time7slotid, time8, time8slot,time8slotid, time9, time9slot,time9slotid, time10, time10slot,time10slotid, time11, time11slot,time11slotid, time12, time12slot,time12slotid ;





    if ($(window).width() < 767) {

//Movies table


        var zeeMundoMoviesPostertableMobile = "";
        var zeeMundoMoviesPosterTableContainerMobile = "";

        for (i=0; i < zeeSchedule.length; i++) {


            date = zeeSchedule[i].date;
            dateidS = zeeSchedule[i].dateidS;
            dateid = zeeSchedule[i].dateid;
            month = date.substring(0, 4);
            dayNo = date.substring(3, 6);
            var yearNo = dateidS.substring(6, 10);
            dayName = zeeSchedule[i].dayName;
            dayGenre = zeeSchedule[i].dayGenre;
            time1 = zeeSchedule[i].time1[0];
            time1slot = zeeSchedule[i].time1[1];
            time1slotid = zeeSchedule[i].time1[2];
            time2 = zeeSchedule[i].time2[0];
            time2slot = zeeSchedule[i].time2[1];
            time2slotid = zeeSchedule[i].time2[2];
            time3 = zeeSchedule[i].time3[0];
            time3slot = zeeSchedule[i].time3[1];
            time3slotid = zeeSchedule[i].time3[2];
            time4 = zeeSchedule[i].time4[0];
            time4slot = zeeSchedule[i].time4[1];
            time4slotid = zeeSchedule[i].time4[2];
            time5 = zeeSchedule[i].time5[0];
            time5slot = zeeSchedule[i].time5[1];
            time5slotid = zeeSchedule[i].time5[2];
            time6 = zeeSchedule[i].time6[0];
            time6slot = zeeSchedule[i].time6[1];
            time6slotid = zeeSchedule[i].time6[2];
            time7 = zeeSchedule[i].time7[0];
            time7slot = zeeSchedule[i].time7[1];
            time7slotid = zeeSchedule[i].time7[2];
            time8 = zeeSchedule[i].time8[0];
            time8slot = zeeSchedule[i].time8[1];
            time8slotid = zeeSchedule[i].time8[2];
            time9 = zeeSchedule[i].time9[0];
            time9slot = zeeSchedule[i].time9[1];
            time9slotid = zeeSchedule[i].time9[2];
            time10 = zeeSchedule[i].time10[0];
            time10slot = zeeSchedule[i].time10[1];
            time10slotid = zeeSchedule[i].time10[2];
            time11 = zeeSchedule[i].time11[0];
            time11slot = zeeSchedule[i].time11[1];
            time11slotid = zeeSchedule[i].time11[2];
            time12 = zeeSchedule[i].time12[0];
            time12slot = zeeSchedule[i].time12[1];
            time12slotid = zeeSchedule[i].time12[2];
            var cutOfftime = '09/19/2016';
            if (dateidS < cutOfftime){zeeMundoMoviesPostertableMobile = '<table class="scheduleTableMobile" id="'+dateid+'" style="display:none;width:100%;color:white;"><tbody><tr><td colspan="2">'+ dayName+' '+dayNo+' '+month+' '+yearNo+' </br> <span class="dayGenre">'+ dayGenre+' </span> <br><p class="mountainTMobile" style="font-size: 18px;"> Hora Montaña</p><p class="pacificTMobile" style="display: none;font-size: 18px;"> Hora Pacífico</p><p class="centralTMobile" style="display: none;font-size: 18px;"> Hora Centro</p><p class="easterTMobile" style="display: none;font-size: 18px;"> Hora del Este</p></td></tr><tr><td class="mountainTMobile">0:00</td><td class="pacificTMobile" style="display: none">23:00</td><td class="centralTMobile" style="display: none">1:00</td><td class="easterTMobile" style="display: none">2:00</td><td rowspan="'+time1slot+'" style="background-color: #222;text-align: center"><a data-toggle="modal" href=".'+time1slotid+'table"><span>'+time1+'</span></a></td></tr><tr><td class="mountainTMobile">0:30</td><td class="pacificTMobile" style="display: none">23:30</td><td class="centralTMobile" style="display: none">1:30</td><td class="easterTMobile" style="display: none">2:30</td></tr><tr><td class="mountainTMobile">1:00</td><td class="pacificTMobile" style="display: none">0:00</td><td class="centralTMobile" style="display: none">2:00</td><td class="easterTMobile" style="display: none">3:00</td></tr><tr><td class="mountainTMobile">1:30</td><td class="pacificTMobile" style="display: none">0:30</td><td class="centralTMobile" style="display: none">2:30</td><td class="easterTMobile" style="display: none">3:30</td></tr><tr><td class="mountainTMobile">2:00</td><td class="pacificTMobile" style="display: none">1:00</td><td class="centralTMobile" style="display: none">3:00</td><td class="easterTMobile" style="display: none">4:00</td><td rowspan="'+time2slot+'" style="background-color: black;text-align: center"><a data-toggle="modal" href=".'+time2slotid+'table"><span>'+time2+'</span></a></td></tr><tr><td class="mountainTMobile">2:30</td><td class="pacificTMobile" style="display: none">1:30</td><td class="centralTMobile" style="display: none">3:30</td><td class="easterTMobile" style="display: none">4:30</td></tr><tr><td class="mountainTMobile">3:00</td><td class="pacificTMobile" style="display: none">2:00</td><td class="centralTMobile" style="display: none">4:00</td><td class="easterTMobile" style="display: none">5:00</td></tr><tr><td class="mountainTMobile">3:30</td><td class="pacificTMobile" style="display: none">2:30</td><td class="centralTMobile" style="display: none">4:30</td><td class="easterTMobile" style="display: none">5:30</td></tr><tr><td class="mountainTMobile">4:00</td><td class="pacificTMobile" style="display: none">3:00</td><td class="centralTMobile" style="display: none">5:00</td><td class="easterTMobile" style="display: none">6:00</td></tr><tr><td class="mountainTMobile">4:30</td><td class="pacificTMobile" style="display: none">3:30</td><td class="centralTMobile" style="display: none">5:30</td><td class="easterTMobile" style="display: none">6:30</td><td rowspan="'+time3slot+'" style="background-color: #222;text-align: center"><a data-toggle="modal" href=".'+time3slotid+'table"><span>'+time3+'</span></a></td></tr><tr><td class="mountainTMobile">5:00</td><td class="pacificTMobile" style="display: none">4:00</td><td class="centralTMobile" style="display: none">6:00</td><td class="easterTMobile" style="display: none">7:00</td><td rowspan="'+time4slot+'" style="background-color: black;text-align: center"><a data-toggle="modal" href=".'+time4slotid+'table"><span>'+time4+'</span></a></td></tr><tr><td class="mountainTMobile">5:30</td><td class="pacificTMobile" style="display: none">4:30</td><td class="centralTMobile" style="display: none">6:30</td><td class="easterTMobile" style="display: none">7:30</td></tr><tr><td class="mountainTMobile">6:00</td><td class="pacificTMobile" style="display: none">5:00</td><td class="centralTMobile" style="display: none">7:00</td><td class="easterTMobile" style="display: none">8:00</td></tr><tr><td class="mountainTMobile">6:30</td><td class="pacificTMobile" style="display: none">6:30</td><td class="centralTMobile" style="display: none">7:30</td><td class="easterTMobile" style="display: none">8:30</td></tr><tr><td class="mountainTMobile">7:00</td><td class="pacificTMobile" style="display: none">6:00</td><td class="centralTMobile" style="display: none">8:00</td><td class="easterTMobile" style="display: none">9:00</td></tr><tr><td class="mountainTMobile">7:30</td><td class="pacificTMobile" style="display: none">6:30</td><td class="centralTMobile" style="display: none">8:30</td><td class="easterTMobile" style="display: none">9:30</td><td rowspan="'+time5slot+'" style="background-color: #222;text-align: center"><a data-toggle="modal" href=".'+time5slotid+'table"><span>'+time5+'</span></a></td></tr><tr><td class="mountainTMobile">8:00</td><td class="pacificTMobile" style="display: none">7:00</td><td class="centralTMobile" style="display: none">9:00</td><td class="easterTMobile" style="display: none">10:00</td></tr><tr><td class="mountainTMobile">8:30</td><td class="pacificTMobile" style="display: none">7:30</td><td class="centralTMobile" style="display: none">9:30</td><td class="easterTMobile" style="display: none">10:30</td></tr><tr><td class="mountainTMobile">9:00</td><td class="pacificTMobile" style="display: none">8:00</td><td class="centralTMobile" style="display: none">10:00</td><td class="easterTMobile" style="display: none">11:00</td></tr><tr><td class="mountainTMobile">9:30</td><td class="pacificTMobile" style="display: none">8:30</td><td class="centralTMobile" style="display: none">10:30</td><td class="easterTMobile" style="display: none">11:30</td></tr><tr><td class="mountainTMobile">10:00</td><td class="pacificTMobile" style="display: none">9:00</td><td class="centralTMobile" style="display: none">11:00</td><td class="easterTMobile" style="display: none">12:00</td><td rowspan="'+time6slot+'" style="background-color: black;text-align: center"><a data-toggle="modal" href=".'+time6slotid+'table"><span>'+time6+'</span></a></td></tr><tr><td class="mountainTMobile">10:30</td><td class="pacificTMobile" style="display: none">9:30</td><td class="centralTMobile" style="display: none">11:30</td><td class="easterTMobile" style="display: none">12:30</td></tr><tr><td class="mountainTMobile">11:00</td><td class="pacificTMobile" style="display: none">10:00</td><td class="centralTMobile" style="display: none">12:00</td><td class="easterTMobile" style="display: none">13:00</td></tr><tr><td class="mountainTMobile">11:30</td><td class="pacificTMobile" style="display: none">10:30</td><td class="centralTMobile" style="display: none">12:30</td><td class="easterTMobile" style="display: none">13:30</td></tr><tr><td class="mountainTMobile">12:00</td><td class="pacificTMobile" style="display: none">11:00</td><td class="centralTMobile" style="display: none">13:00</td><td class="easterTMobile" style="display: none">14:00</td><td rowspan="'+time7slot+'" style="background-color: #222;text-align: center"><a data-toggle="modal" href=".'+time7slotid+'table"><span>'+time7+'</span></a></td></tr><tr><td class="mountainTMobile">12:30</td><td class="pacificTMobile" style="display: none">11:30</td><td class="centralTMobile" style="display: none">13:30</td><td class="easterTMobile" style="display: none">14:30</td></tr><tr><td class="mountainTMobile">13:00</td><td class="pacificTMobile" style="display: none">12:00</td><td class="centralTMobile" style="display: none">14:00</td><td class="easterTMobile" style="display: none">15:00</td></tr><tr><td class="mountainTMobile">13:30</td><td class="pacificTMobile" style="display: none">12:30</td><td class="centralTMobile" style="display: none">14:30</td><td class="easterTMobile" style="display: none">15:30</td></tr><tr><td class="mountainTMobile">14:00</td><td class="pacificTMobile" style="display: none">13:00</td><td class="centralTMobile" style="display: none">15:00</td><td class="easterTMobile" style="display: none">16:00</td></tr><tr><td class="mountainTMobile">14:30</td><td class="pacificTMobile" style="display: none">13:30</td><td class="centralTMobile" style="display: none">15:30</td><td class="easterTMobile" style="display: none">16:30</td><td rowspan="'+time8slot+'" style="background-color: black;text-align: center"><a data-toggle="modal" href=".'+time8slotid+'table"><span>'+time8+'</span></a></td></tr><tr><td class="mountainTMobile">15:00</td><td class="pacificTMobile" style="display: none">14:00</td><td class="centralTMobile" style="display: none">16:00</td><td class="easterTMobile" style="display: none">17:00</td><td rowspan="'+time9slot+'" style="background-color: #222;text-align: center"><a data-toggle="modal" href=".'+time9slotid+'table"><span>'+time9+'</span></a></td></tr><tr><td class="mountainTMobile">15:30</td><td class="pacificTMobile" style="display: none">14:30</td><td class="centralTMobile" style="display: none">16:30</td><td class="easterTMobile" style="display: none">17:30</td></tr><tr><td class="mountainTMobile">16:00</td><td class="pacificTMobile" style="display: none">15:00</td><td class="centralTMobile" style="display: none">17:00</td><td class="easterTMobile" style="display: none">18:00</td></tr><tr><td class="mountainTMobile">16:30</td><td class="pacificTMobile" style="display: none">16:30</td><td class="centralTMobile" style="display: none">17:30</td><td class="easterTMobile" style="display: none">18:30</td></tr><tr><td class="mountainTMobile">17:00</td><td class="pacificTMobile" style="display: none">16:00</td><td class="centralTMobile" style="display: none">18:00</td><td class="easterTMobile" style="display: none">19:00</td></tr><tr><td class="mountainTMobile">17:30</td><td class="pacificTMobile" style="display: none">16:30</td><td class="centralTMobile" style="display: none">18:30</td><td class="easterTMobile" style="display: none">19:30</td><td rowspan="'+time10slot+'" style="background-color: black;text-align: center"><a data-toggle="modal" href=".'+time10slotid+'table"><span>'+time10+'</span></a></td></tr><tr><td class="mountainTMobile">18:00</td><td class="pacificTMobile" style="display: none">17:00</td><td class="centralTMobile" style="display: none">19:00</td><td class="easterTMobile" style="display: none">20:00</td></tr><tr><td class="mountainTMobile">18:30</td><td class="pacificTMobile" style="display: none">17:30</td><td class="centralTMobile" style="display: none">19:30</td><td class="easterTMobile" style="display: none">20:30</td></tr><tr><td class="mountainTMobile">19:00</td><td class="pacificTMobile" style="display: none">18:00</td><td class="centralTMobile" style="display: none">20:00</td><td class="easterTMobile" style="display: none">21:00</td></tr><tr><td class="mountainTMobile">19:30</td><td class="pacificTMobile" style="display: none">18:30</td><td class="centralTMobile" style="display: none">20:30</td><td class="easterTMobile" style="display: none">21:30</td></tr><tr><td class="mountainTMobile">20:00</td><td class="pacificTMobile" style="display: none">19:00</td><td class="centralTMobile" style="display: none">21:00</td><td class="easterTMobile" style="display: none">22:00</td><td rowspan="'+time11slot+'" style="background-color: #222;text-align: center"><a data-toggle="modal" href=".'+time11slotid+'table"><span>'+time11+'</span></a></td></tr><tr><td class="mountainTMobile">20:30</td><td class="pacificTMobile" style="display: none">19:30</td><td class="centralTMobile" style="display: none">21:30</td><td class="easterTMobile" style="display: none">22:30</td></tr><tr><td class="mountainTMobile">21:00</td><td class="pacificTMobile" style="display: none">20:00</td><td class="centralTMobile" style="display: none">22:00</td><td class="easterTMobile" style="display: none">23:00</td></tr><tr><td class="mountainTMobile">21:30</td><td class="pacificTMobile" style="display: none">20:30</td><td class="centralTMobile" style="display: none">22:30</td><td class="easterTMobile" style="display: none">23:30</td></tr><tr><td class="mountainTMobile">22:00</td><td class="pacificTMobile" style="display: none">21:00</td><td class="centralTMobile" style="display: none">23:00</td><td class="easterTMobile" style="display: none">0:00</td><td rowspan="'+time12slot+'" style="background-color: black;text-align: center"><a data-toggle="modal" href=".'+time12slotid+'table"><span>'+time12+'</span></a></td></tr><tr><td class="mountainTMobile">22:30</td><td class="pacificTMobile" style="display: none">21:30</td><td class="centralTMobile" style="display: none">23:30</td><td class="easterTMobile" style="display: none">0:30</td></tr><tr><td class="mountainTMobile">23:00</td><td class="pacificTMobile" style="display: none">22:00</td><td class="centralTMobile" style="display: none">0:00</td><td class="easterTMobile" style="display: none">1:00</td></tr><tr><td class="mountainTMobile">23:30</td><td class="pacificTMobile" style="display: none">22:30</td><td class="centralTMobile" style="display: none">0:30</td><td class="easterTMobile" style="display: none">1:30</td></tr></tbody></table>';} else
            {
                zeeMundoMoviesPostertableMobile = '<table class="scheduleTableMobile" id="'+dateid+'" style="display:none;width:100%;color:white;"> <tbody> <tr> <td colspan="2"> '+ dayName+' '+dayNo+' '+month+' '+yearNo+'<br><span class="dayGenre">'+ dayGenre+'</span><br><p class="mountainTMobile" style="font-size: 18px;">Hora Montaña</p><p class="pacifiMobile" style="display: none;font-size: 18px;"> Hora Pacífico</p><p class="centralTMobile" style="display: none;font-size: 18px;">Hora Centro</p><p class="easterTMobile" style="display: none;font-size: 18px;">Hora del Este</p></td></tr><tr> <td class="mountainTMobile">0:00</td><td class="pacifiMobile" style="display: none">23:00</td><td class="centralTMobile" style="display: none">1:00</td><td class="easterTMobile" style="display: none">2:00</td><td rowspan="4" style="background-color: #222;text-align:center"> <a data-toggle="modal" href=".'+time1slotid+'table"><span>'+time1+'</span></a> </td></tr><tr> <td class="mountainTMobile">0:30</td><td class="pacifiMobile" style="display: none">23:30</td><td class="centralTMobile" style="display: none">1:30</td><td class="easterTMobile" style="display: none">2:30</td></tr><tr> <td class="mountainTMobile">1:00</td><td class="pacifiMobile" style="display: none">0:00</td><td class="centralTMobile" style="display: none">2:00</td><td class="easterTMobile" style="display: none">3:00</td></tr><tr> <td class="mountainTMobile">1:30</td><td class="pacifiMobile" style="display: none">0:30</td><td class="centralTMobile" style="display: none">2:30</td><td class="easterTMobile" style="display: none">3:30</td></tr><tr> <td class="mountainTMobile">2:00</td><td class="pacifiMobile" style="display: none">1:00</td><td class="centralTMobile" style="display: none">3:00</td><td class="easterTMobile" style="display: none">4:00</td><td rowspan="5" style="background-color: black;text-align:center"> <a data-toggle="modal" href=".'+time2slotid+'table"><span>'+time2+'</span></a> </td></tr><tr> <td class="mountainTMobile">2:30</td><td class="pacifiMobile" style="display: none">1:30</td><td class="centralTMobile" style="display: none">3:30</td><td class="easterTMobile" style="display: none">4:30</td></tr><tr> <td class="mountainTMobile">3:00</td><td class="pacifiMobile" style="display: none">2:00</td><td class="centralTMobile" style="display: none">4:00</td><td class="easterTMobile" style="display: none">5:00</td></tr><tr> <td class="mountainTMobile">3:30</td><td class="pacifiMobile" style="display: none">2:30</td><td class="centralTMobile" style="display: none">4:30</td><td class="easterTMobile" style="display: none">5:30</td></tr><tr> <td class="mountainTMobile">4:00</td><td class="pacifiMobile" style="display: none">3:00</td><td class="centralTMobile" style="display: none">5:00</td><td class="easterTMobile" style="display: none">6:00</td></tr><tr> <td class="mountainTMobile">4:30</td><td class="pacifiMobile" style="display: none">3:30</td><td class="centralTMobile" style="display: none">5:30</td><td class="easterTMobile" style="display: none">6:30</td><td rowspan="1" style="background-color: #222;text-align:center"> <a data-toggle="modal" href=".'+time3slotid+'table"><span>'+time3+'</span></a> </td></tr><tr> <td class="mountainTMobile">5:00</td><td class="pacifiMobile" style="display: none">4:00</td><td class="centralTMobile" style="display: none">6:00</td><td class="easterTMobile" style="display: none">7:00</td><td rowspan="5" style="background-color: black;text-align:center"> <a data-toggle="modal" href=".'+time4slotid+'table"><span>'+time4+'</span></a> </td></tr><tr> <td class="mountainTMobile">5:30</td><td class="pacifiMobile" style="display: none">4:30</td><td class="centralTMobile" style="display: none">6:30</td><td class="easterTMobile" style="display: none">7:30</td></tr><tr> <td class="mountainTMobile">6:00</td><td class="pacifiMobile" style="display: none">5:00</td><td class="centralTMobile" style="display: none">7:00</td><td class="easterTMobile" style="display: none">8:00</td></tr><tr> <td class="mountainTMobile">6:30</td><td class="pacifiMobile" style="display: none">6:30</td><td class="centralTMobile" style="display: none">7:30</td><td class="easterTMobile" style="display: none">8:30</td></tr><tr> <td class="mountainTMobile">7:00</td><td class="pacifiMobile" style="display: none">6:00</td><td class="centralTMobile" style="display: none">8:00</td><td class="easterTMobile" style="display: none">9:00</td></tr><tr> <td class="mountainTMobile">7:30</td><td class="pacifiMobile" style="display: none">6:30</td><td class="centralTMobile" style="display: none">8:30</td><td class="easterTMobile" style="display: none">9:30</td></tr><tr> <td class="mountainTMobile">8:00</td><td class="pacifiMobile" style="display: none">7:00</td><td class="centralTMobile" style="display: none">9:00</td><td class="easterTMobile" style="display: none">10:00</td><td rowspan="4" style="background-color: #222;text-align:center"> <a data-toggle="modal" href=".'+time5slotid+'table"><span>'+time5+'</span></a> </td></tr><tr> <td class="mountainTMobile">8:30</td><td class="pacifiMobile" style="display: none">7:30</td><td class="centralTMobile" style="display: none">9:30</td><td class="easterTMobile" style="display: none">10:30</td></tr><tr> <td class="mountainTMobile">9:00</td><td class="pacifiMobile" style="display: none">8:00</td><td class="centralTMobile" style="display: none">10:00</td><td class="easterTMobile" style="display: none">11:00</td></tr><tr> <td class="mountainTMobile">9:30</td><td class="pacifiMobile" style="display: none">8:30</td><td class="centralTMobile" style="display: none">10:30</td><td class="easterTMobile" style="display: none">11:30</td></tr><tr> <td class="mountainTMobile">10:00</td><td class="pacifiMobile" style="display: none">9:00</td><td class="centralTMobile" style="display: none">11:00</td><td class="easterTMobile" style="display: none">12:00</td><td rowspan="4" style="background-color: black;text-align:center"> <a data-toggle="modal" href=".'+time6slotid+'table"><span>'+time6+'</span></a> </td></tr><tr> <td class="mountainTMobile">10:30</td><td class="pacifiMobile" style="display: none">9:30</td><td class="centralTMobile" style="display: none">11:30</td><td class="easterTMobile" style="display: none">12:30</td></tr><tr> <td class="mountainTMobile">11:00</td><td class="pacifiMobile" style="display: none">10:00</td><td class="centralTMobile" style="display: none">12:00</td><td class="easterTMobile" style="display: none">13:00</td></tr><tr> <td class="mountainTMobile">11:30</td><td class="pacifiMobile" style="display: none">10:30</td><td class="centralTMobile" style="display: none">12:30</td><td class="easterTMobile" style="display: none">13:30</td></tr><tr> <td class="mountainTMobile">12:00</td><td class="pacifiMobile" style="display: none">11:00</td><td class="centralTMobile" style="display: none">13:00</td><td class="easterTMobile" style="display: none">14:00</td><td rowspan="5" style="background-color: #222;text-align:center"> <a data-toggle="modal" href=".'+time7slotid+'table"><span>'+time7+'</span></a> </td></tr><tr> <td class="mountainTMobile">12:30</td><td class="pacifiMobile" style="display: none">11:30</td><td class="centralTMobile" style="display: none">13:30</td><td class="easterTMobile" style="display: none">14:30</td></tr><tr> <td class="mountainTMobile">13:00</td><td class="pacifiMobile" style="display: none">12:00</td><td class="centralTMobile" style="display: none">14:00</td><td class="easterTMobile" style="display: none">15:00</td></tr><tr> <td class="mountainTMobile">13:30</td><td class="pacifiMobile" style="display: none">12:30</td><td class="centralTMobile" style="display: none">14:30</td><td class="easterTMobile" style="display: none">15:30</td></tr><tr> <td class="mountainTMobile">14:00</td><td class="pacifiMobile" style="display: none">13:00</td><td class="centralTMobile" style="display: none">15:00</td><td class="easterTMobile" style="display: none">16:00</td></tr><tr> <td class="mountainTMobile">14:30</td><td class="pacifiMobile" style="display: none">13:30</td><td class="centralTMobile" style="display: none">15:30</td><td class="easterTMobile" style="display: none">16:30</td><td rowspan="1" style="background-color: black;text-align:center"> <a data-toggle="modal" href=".'+time8slotid+'table"><span>'+time8+'</span></a> </td></tr><tr> <td class="mountainTMobile">15:00</td><td class="pacifiMobile" style="display: none">14:00</td><td class="centralTMobile" style="display: none">16:00</td><td class="easterTMobile" style="display: none">17:00</td><td rowspan="5" style="background-color: #222;text-align:center"> <a data-toggle="modal" href=".'+time9slotid+'table"><span>'+time9+'</span></a> </td></tr><tr> <td class="mountainTMobile">15:30</td><td class="pacifiMobile" style="display: none">14:30</td><td class="centralTMobile" style="display: none">16:30</td><td class="easterTMobile" style="display: none">17:30</td></tr><tr> <td class="mountainTMobile">16:00</td><td class="pacifiMobile" style="display: none">15:00</td><td class="centralTMobile" style="display: none">17:00</td><td class="easterTMobile" style="display: none">18:00</td></tr><tr> <td class="mountainTMobile">16:30</td><td class="pacifiMobile" style="display: none">16:30</td><td class="centralTMobile" style="display: none">17:30</td><td class="easterTMobile" style="display: none">18:30</td></tr><tr> <td class="mountainTMobile">17:00</td><td class="pacifiMobile" style="display: none">16:00</td><td class="centralTMobile" style="display: none">18:00</td><td class="easterTMobile" style="display: none">19:00</td></tr><tr> <td class="mountainTMobile">17:30</td><td class="pacifiMobile" style="display: none">16:30</td><td class="centralTMobile" style="display: none">18:30</td><td class="easterTMobile" style="display: none">19:30</td><td rowspan="5" style="background-color: black;text-align:center"> <a data-toggle="modal" href=".'+time10slotid+'table"><span>'+time10+'</span></a> </td></tr><tr> <td class="mountainTMobile">18:00</td><td class="pacifiMobile" style="display: none">17:00</td><td class="centralTMobile" style="display: none">19:00</td><td class="easterTMobile" style="display: none">20:00</td></tr><tr> <td class="mountainTMobile">18:30</td><td class="pacifiMobile" style="display: none">17:30</td><td class="centralTMobile" style="display: none">19:30</td><td class="easterTMobile" style="display: none">20:30</td></tr><tr> <td class="mountainTMobile">19:00</td><td class="pacifiMobile" style="display: none">18:00</td><td class="centralTMobile" style="display: none">20:00</td><td class="easterTMobile" style="display: none">21:00</td></tr><tr> <td class="mountainTMobile">19:30</td><td class="pacifiMobile" style="display: none">18:30</td><td class="centralTMobile" style="display: none">20:30</td><td class="easterTMobile" style="display: none">21:30</td></tr><tr> <td class="mountainTMobile">20:00</td><td class="pacifiMobile" style="display: none">19:00</td><td class="centralTMobile" style="display: none">21:00</td><td class="easterTMobile" style="display: none">22:00</td><td rowspan="4" style="background-color: #222;text-align:center"> <a data-toggle="modal" href=".'+time11slotid+'table"><span>'+time11+'</span></a> </td></tr><tr> <td class="mountainTMobile">20:30</td><td class="pacifiMobile" style="display: none">19:30</td><td class="centralTMobile" style="display: none">21:30</td><td class="easterTMobile" style="display: none">22:30</td></tr><tr> <td class="mountainTMobile">21:00</td><td class="pacifiMobile" style="display: none">20:00</td><td class="centralTMobile" style="display: none">22:00</td><td class="easterTMobile" style="display: none">23:00</td></tr><tr> <td class="mountainTMobile">21:30</td><td class="pacifiMobile" style="display: none">20:30</td><td class="centralTMobile" style="display: none">22:30</td><td class="easterTMobile" style="display: none">23:30</td></tr><tr> <td class="mountainTMobile">22:00</td><td class="pacifiMobile" style="display: none">21:00</td><td class="centralTMobile" style="display: none">23:00</td><td class="easterTMobile" style="display: none">0:00</td><td rowspan="4" style="background-color: black;text-align:center"> <a data-toggle="modal" href=".'+time12slotid+'table"><span>'+time12+'</span></a> </td></tr><tr> <td class="mountainTMobile">22:30</td><td class="pacifiMobile" style="display: none">21:30</td><td class="centralTMobile" style="display: none">23:30</td><td class="easterTMobile" style="display: none">0:30</td></tr><tr> <td class="mountainTMobile">23:00</td><td class="pacifiMobile" style="display: none">22:00</td><td class="centralTMobile" style="display: none">0:00</td><td class="easterTMobile" style="display: none">1:00</td></tr><tr> <td class="mountainTMobile">23:30</td><td class="pacifiMobile" style="display: none">22:30</td><td class="centralTMobile" style="display: none">0:30</td><td class="easterTMobile" style="display: none">1:30</td></tr></tbody></table>';
            }


//Keep on adding info
            zeeMundoMoviesPosterTableContainerMobile += zeeMundoMoviesPostertableMobile;
            var zeeMundoMoviesPosterTableContainerDivMobile = document.getElementById('zeeMundoMoviesPosterTableContainerMobile');
            zeeMundoMoviesPosterTableContainerDivMobile.innerHTML = zeeMundoMoviesPosterTableContainerMobile;


            $( function() {
                $( "#datepicker" ).datepicker({
                    showAnim: "fold",
                    monthNamesShort: [ "Enero", "Feb", "Marzo", "Abr", "Mayo", "Jun", "Jul", "Agosto", "Sept", "Oct", "Nov", "Dic" ],
                    monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
                    dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
                    onSelect: function(date) {
                        $('table').hide();
                        var daySelected = date;
                        var dayIDSub1 = daySelected.substring(0, 2);
                        var dayIDSub2 = daySelected.substring(3, 5);
                        var dayIDSub3 = daySelected.substring(6, 10);
                        var daySelectedID = dayIDSub1+dayIDSub2+dayIDSub3;
                        $('#'+daySelectedID).show();
                    }

                })});
            var d = new Date();
            var month = d.getMonth()+1;
            var day = d.getDate();
            var currentDate  = ((''+month).length<2 ? '0' : '') + month + '/' +
                ((''+day).length<2 ? '0' : '') + day+'/'+ d.getFullYear();
            var currentdayIDSub1 = currentDate.substring(0, 2);
            var currentdayIDSub2 = currentDate.substring(3, 5);
            var currentdayIDSub3 = currentDate.substring(6, 10);
            console.log(currentDate);
            var currentdaySelectedID = currentdayIDSub1+currentdayIDSub2+currentdayIDSub3;
            $('#'+currentdaySelectedID).show();

        }
        $('#timeZoneMobile').on('change', function() {
            if ( this.value == '0')
            {
                $(".pacificTMobile").show();
                $(".mountainTMobile").hide();
                $(".centralTMobile").hide();
                $(".easterTMobile").hide();

            }
            if ( this.value == '2')
            {
                $(".centralTMobile").show();
                $(".pacificTMobile").hide();
                $(".mountainTMobile").hide();
                $(".easterTMobile").hide();
            } if ( this.value == '3')
            {
                $(".easterTMobile").show();
                $(".pacificTMobile").hide();
                $(".centralTMobile").hide();
                $(".mountainTMobile").hide();
            }
            if ( this.value == '1')
            {
                $(".mountainTMobile").show();
                $(".pacificTMobile").hide();
                $(".centralTMobile").hide();
                $(".easterTMobile").hide();
            }
        });




//Movies table End

    }
    else {

//Movies table
        var date, month, dayNo,dayName,dayGenre, time1,time1slot,time1slotid, time2, time2slot,time2slotid, time3, time3slot,time3slotid, time4, time4slot,time4slotid, time5, time5slot,time5slotid, time6, time6slot,time6slotid, time7, time7slot,time7slotid, time8, time8slot,time8slotid, time9, time9slot,time9slotid, time10, time10slot,time10slotid, time11, time11slot,time11slotid, time12, time12slot,time12slotid ;




        var zeeMundoMoviesPostertable = "";
        var zeeMundoMoviesPosterTableContainer = "";

        for (i=0; i < zeeSchedule.length; i++) {


            date = zeeSchedule[i].date;
            month = date.substring(0, 4);
            dayNo = date.substring(3, 6);
            dateid = zeeSchedule[i].dateid;
            dayName = zeeSchedule[i].dayName;
            dayGenre = zeeSchedule[i].dayGenre;
            time1 = zeeSchedule[i].time1[0];
            time1slot = zeeSchedule[i].time1[1];
            time1slotid = zeeSchedule[i].time1[2];
            time2 = zeeSchedule[i].time2[0];
            time2slot = zeeSchedule[i].time2[1];
            time2slotid = zeeSchedule[i].time2[2];
            time3 = zeeSchedule[i].time3[0];
            time3slot = zeeSchedule[i].time3[1];
            time3slotid = zeeSchedule[i].time3[2];
            time4 = zeeSchedule[i].time4[0];
            time4slot = zeeSchedule[i].time4[1];
            time4slotid = zeeSchedule[i].time4[2];
            time5 = zeeSchedule[i].time5[0];
            time5slot = zeeSchedule[i].time5[1];
            time5slotid = zeeSchedule[i].time5[2];
            time6 = zeeSchedule[i].time6[0];
            time6slot = zeeSchedule[i].time6[1];
            time6slotid = zeeSchedule[i].time6[2];
            time7 = zeeSchedule[i].time7[0];
            time7slot = zeeSchedule[i].time7[1];
            time7slotid = zeeSchedule[i].time7[2];
            time8 = zeeSchedule[i].time8[0];
            time8slot = zeeSchedule[i].time8[1];
            time8slotid = zeeSchedule[i].time8[2];
            time9 = zeeSchedule[i].time9[0];
            time9slot = zeeSchedule[i].time9[1];
            time9slotid = zeeSchedule[i].time9[2];
            time10 = zeeSchedule[i].time10[0];
            time10slot = zeeSchedule[i].time10[1];
            time10slotid = zeeSchedule[i].time10[2];
            time11 = zeeSchedule[i].time11[0];
            time11slot = zeeSchedule[i].time11[1];
            time11slotid = zeeSchedule[i].time11[2];
            time12 = zeeSchedule[i].time12[0];
            time12slot = zeeSchedule[i].time12[1];
            time12slotid = zeeSchedule[i].time12[2];




            zeeMundoMoviesPostertable = '<tr id="'+dateid+'"><td><p style="font-size: 50px;color: #8a8a8a;margin-left: -50px;margin-top: -16px;"><b>'+dayNo+'</b></p><span style="font-size: 17px;position: absolute;top: 6px;right: 20px;color: #8a8a8a;font-weight: 700;text-align: left"><b>'+month+'</b><br>'+dayName+'</span><p style="font-size: 11px;color: #8a8a8a;font-weight: 700;font-family:museo-sans;width: 122px;margin-top: -15px;">'+dayGenre+'</p></td> <td colspan="'+time1slot+'"><a data-toggle="modal"  href=".'+time1slotid+'table"><span>'+time1+'</span></a></td> <td colspan="'+time2slot+'"><a data-toggle="modal"  href=".'+time2slotid+'table"><span>'+time2+'</span></a></td> <td colspan="'+time3slot+'"><a data-toggle="modal"  href=".'+time3slotid+'table"><span>'+time3+'</span></a></td> <td colspan="'+time4slot+'"><a data-toggle="modal"  href=".'+time4slotid+'table"><span>'+time4+'</span></a></td> <td colspan="'+time5slot+'"><a data-toggle="modal"  href=".'+time5slotid+'table"><span>'+time5+'</span></a></td> <td colspan="'+time6slot+'"><a data-toggle="modal"  href=".'+time6slotid+'table"><span>'+time6+'</span></a></td> <td colspan="'+time7slot+'"><a data-toggle="modal"  href=".'+time7slotid+'table"><span>'+time7+'</span></a></td> <td colspan="'+time8slot+'"><a data-toggle="modal"  href=".'+time8slotid+'table"><span>'+time8+'</span></a></td> <td colspan="'+time9slot+'"><a data-toggle="modal"  href=".'+time9slotid+'table"><span>'+time9+'</span></a></td> <td colspan="'+time10slot+'"><a data-toggle="modal"  href=".'+time10slotid+'table"><span>'+time10+'</span></a></td> <td colspan="'+time11slot+'"><a data-toggle="modal"  href=".'+time11slotid+'table"><span>'+time11+'</span></a></td> <td colspan="'+time12slot+'"><a data-toggle="modal"  href=".'+time12slotid+'table"><span>'+time12+'</span></a></td> </tr>';

//Keep on adding info
            zeeMundoMoviesPosterTableContainer += zeeMundoMoviesPostertable;
            var zeeMundoMoviesPosterTableContainerDiv = document.getElementById('zeeMundoMoviesPosterTableContainer');
            zeeMundoMoviesPosterTableContainerDiv.innerHTML = zeeMundoMoviesPosterTableContainer;
        }
//Movies table End

        $( function() {
            var d = new Date();
            var month = d.getMonth()+1;
            var day = d.getDate();
            var currentDate  = ((''+month).length<2 ? '0' : '') + month + '/' +
                ((''+day).length<2 ? '0' : '') + day+'/'+ d.getFullYear();
            var currentdayIDSub1 = currentDate.substring(0, 2);
            var currentdayIDSub2 = currentDate.substring(3, 5);
            var currentdayIDSub3 = currentDate.substring(6, 10);
            var currentdaySelectedID = currentdayIDSub1+currentdayIDSub2+currentdayIDSub3;
            $('#'+currentdaySelectedID)[0].scrollIntoView();
            $('#parent').scrollTop($('#parent').scrollTop() - 38);
            $(window).scrollTop(0);
            $(document).scrollTop(0);
        });

    }



//Table Modal
    var zeeMundoMoviesPosterTableModal = "";
    var zeeMundoMoviesPosterTableModalContainer = "";

    for (i=0; i < movie.length; i++) {
        title = movie[i].title;
        date = movie[i].date;
        time = movie[i].time;
        description = movie[i].description;
        genre = movie[i].genre;
        runtime = movie[i].runtime;
        trailer = movie[i].trailer;
        poster = movie[i].poster;
        featured = movie[i].featured;
        order = movie[i].order;
        if (poster == "TBD") {
            id = title
        }
        else {
            id = poster.substring(30, poster.length - 4);
        }

        zeeMundoMoviesPosterTableModal = '<div class="modal fade '+id + 'table ' + ' text-center col-sm-6" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"> <a type="button" class="closePos" data-dismiss="modal" aria-label="Close">X</a><div class="row rowModal"> <div class="col-sm-5"><img class="moviePoster img-responsive" style="margin: auto;margin-bottom: 25px;" src="' + poster + '" alt=""></div><div class="col-sm-7 modalInfo"><h3 class="movieModalTitle">' + title + '</h3><div class="movieModalInfo" ><p class="alignleft">' + genre + '</p> <p><b>Duración:</b> ' + runtime + ' <br></p></div> <div class="moviedetails"> <p>' + description + '</p> </div> </div> </div> </div> </div></div>';
        //Keep on adding info
        zeeMundoMoviesPosterTableModalContainer += zeeMundoMoviesPosterTableModal;
        var zeeMundoMoviesPosterTableModalDiv = document.getElementById('zeeMundoMoviesPosterTableModalContainer');
        zeeMundoMoviesPosterTableModalDiv.innerHTML = zeeMundoMoviesPosterTableModalContainer;

    }
//Table Modal End

});




