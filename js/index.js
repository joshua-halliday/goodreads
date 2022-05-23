

/*AUTHOR IMAGE APPEAR*/
$(document).ready(function(){
    $(".aboutAuthor").mouseenter(function(){
        $(".authorImg").css("top", "0px");
    });
  });
/*READING CHALLENGE COLUMNS*/
$(document).ready(function(){
    $(".readingChallenge").mouseenter(function(){
        $(".lcpImg").css("opacity", "1");
        $(".columnH2").css("opacity", "1");
        $("#lc1").css("height", "299px");
        $("#lc2").css("height", "339px");
        $("#lc3").css("height", "472px");
        $("#lc4").css("height", "231px");
        $("#lc5").css("height", "424px");
    });
  });

