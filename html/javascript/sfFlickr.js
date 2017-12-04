$("#picbtn").on("click", function(e){
    "use strict";

    var url ="http://api.flickr.com/services/feeds/photos_public.gne?tags=sanfrancisco&format=json&jsoncallback=?";

    $.getJSON(url, function(flickrResponse){
        flickrResponse.items.forEach(function (photo) {
            var $img = $("<img>").hide();

            $img.attr("src", photo.media.m);
            $("div .photos").append($img);
            $img.fadeIn(1000);
        })
    });

  e.preventDefault();

});