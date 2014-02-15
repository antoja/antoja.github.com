var ImageScroller = function() {
    var interval_id;

    var cycle = function() {
	$(".jcarousel").jcarousel("scroll", "+=1");
    };

    var init = function() {
	$("span.item-scroller").hide();
	$("span.item-scroller[index=1]").show();

	$(".jcarousel").jcarousel({
	    animation: 'slow',
	    wrap: 'both',
	    vertical: false
	});

	$(".jcarousel-pagination").jcarouselPagination({
	    item: function(page) {
		return '<a class="jcarousel-button" href="#' + page +'" index="' + page + '">' + page + '</a>';
	    }
	});

	$(".jcarousel").on("jcarousel:targetin", "li", function(event, carousel) {
	    var index = $(this).attr("index");
	    $("span.item-scroller[index=" + index + "]").show();
	    $(".jcarousel-button[index=" + index + "]").addClass("active");
	});

	$(".jcarousel").on("jcarousel:targetout", "li", function(event, carousel) {
	    clearInterval(interval_id);

	    var index = $(this).attr("index");
	    $("span.item-scroller[index=" + index + "]").hide();
	    $(".jcarousel-button[index=" + index + "]").removeClass("active");

	    interval_id = setInterval(cycle, 3000);
	});

	interval_id = setInterval(cycle, 3000);
    };

    return {
	init: init
    };
}();

$( document ).ready(function () {
    ImageScroller.init();
});
