(function( $ ) {

$.fn.chromify = function(options) {
    var settings = $.extend({
        fontSize: 12,
        title: "default title",
        url: "http://example.com",
        favicon: ''
    }, options );

    $(this).replaceWith(function(){

    var content = this.outerHTML;
    var newContent = 
    "<div class='chromify' style='font-size:"+settings.fontSize+"px; '>"+
      "<div class='chromify-top-bar'>"+
          "<div class='chromify-circle-close'></div>"+
          "<div class='chromify-circle-minify'></div>"+
          "<div class='chromify-circle-zoom'></div>"+
          "<div class='chromify-tab'>"+
            settings.title+
          "</div>"+
      "</div>"+
      "<div class='chromify-main-bar'>"+
        "<div class='chromify-button-back'>"+
          "<div class='top-block'></div>"+
          "<div class='bottom-block'></div>"+
          "<div class='straight-block'></div>"+
        "</div>"+
        "<div class='chromify-button-forward'>"+
          "<div class='top-block'></div>"+
          "<div class='bottom-block'></div>"+
          "<div class='straight-block'></div>"+
        "</div>"+
        "<div class='chromify-button-reload'>"+
          "<div class='chromify-arrow-down'></div>"+
        "</div>"+
        "<div class='chromify-address-bar'>"+
          "<span class='favicon' style='background-image: url("+settings.favicon+");'></span>"+
          "<span class='url-address'>"+
          settings.url+
          "</span>"+
        "</div>"+
        "<div class='sandwich-button'>"+
          "<div class='sandwich-line'></div>"+
          "<div class='sandwich-line'></div>"+
          "<div class='sandwich-line'></div>"+
        "</div>"+
      "</div>"+
      content+
    "</div>";
    return newContent;
    });
};

}( jQuery ));