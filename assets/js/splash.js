var Splash = function() {
    var show = function() {
	$("#splash-modal").modal();

	$("#splash-modal").on("click", function(event) {
	    $("#splash-modal").modal("hide");
	});

	$("#splash-modal").on("shown.bs.modal", function(event) {
	});

	$("#splash-modal").on("hidden.bs.modal", function(event) {
	    $("#splash-modal").remove();
	});
    };

    return {
	show: show
    };
}();

$( document ).ready(function () {
    Splash.show();
});
