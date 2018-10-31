
function preloaderShow()
{

	$("#preloader").show();
		var ajax_box = $("div#preloader");
		ajax_box.css("top",($(window).height() - ajax_box.height())/2+'px');
	    ajax_box.css("left",($(window).width() - ajax_box.width())/2+'px');
	    ajax_box.fadeIn(200);	
		
		var cvr = jQuery("div#preloader");
		cvr.css("display","block");
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
}
function preloaderHide()
{
	$("#preloader").hide();
}
						  