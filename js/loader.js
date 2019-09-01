(function($) {
    "use strict";
    $(function(){
        $(window).on('load', function(){
            function removePreloader() {
                var preLoader = $('.preLoader');
                preLoader.fadeOut();
            }
            setTimeout(removePreloader, 250);
        });
    });
})(jQuery);