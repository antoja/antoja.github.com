var ImageScroller = function() {
    var init = function() {
	$("span.scroller").hide();
	$("span.scroller[slide-index=0]").show();

	$("#collection-carousel").on("slide.bs.carousel", function(event) {
	    var active = $(event.target).find(".carousel-inner > .item.active");
	    var from = active.index();
	    var to = $(event.relatedTarget).index();

	    $("span.scroller[slide-index=" + from + "]").hide();
	    $("span.scroller[slide-index=" + to + "]").show();
	});

	$(".carousel").carousel({
	    interval: 3000,
	    wrap: true
	});
    };

    return {
	init: init
    };
}();

$( document ).ready(function () {
    ImageScroller.init();
});
