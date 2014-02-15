var ImageScroller = function(){
    var pieces = [];

    var cycle = function() {
	var head = pieces.splice(0, 1)[0];
	$(head.name).hide();
	$(head.image).hide();
	pieces.push(head);

	$(pieces[0].name).show();
	$(pieces[0].image).show();
    };

    var init = function() {
	var images = $("img.scroller");
	var names = $("span.scroller");

	var i;

	for ( i = 0; i < images.length; i += 1 ) {
	    pieces.push({
		name: names[i],
		image: images[i]
	    });
	    if ( i != 0 ) {
		$(names[i]).hide();
		$(images[i]).hide();
	    }
	}

	setInterval(cycle, 3000);
    };

    return {
	init: init
    };
}();

$( document ).ready(function () {
    // Bind the voting images to a function that tracks the votes
    // $( ".btn" ).on("click", BallotMachine.vote);
    // Fetch current votes (if any) from the server and update the page
    ImageScroller.init();
});
