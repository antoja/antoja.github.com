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

var Store = function() {
    var init = function() {
	$(".store.toggle").each(function(index) {
	    if ( parseInt($(this).attr("index")) === 1 ) {
		$(this).show();
	    }
	    else {
		$(this).hide();
	    }
	});

	$(".store.collection").each(function(index) {
	    if ( parseInt($(this).attr("index")) === 1 ) {
		$(this).addClass("active");
	    }

	    var item_index = $(this).attr("index");
	    var link = this;

	    $(this).on('click', function() {
		$(".store.toggle").each(function(index) {
		    if ( $(this).attr("index") === item_index ) {
			$(link).addClass("active");
			$(this).show();
		    }
		    else {
			$(link).removeClass("active");
			$(this).hide();
		    }
		});
	    });
	});
    };

    return {
	init: init
    };
}();

$( document ).ready(function () {
    ImageScroller.init();
    Store.init();
});
