
$(document).ready(function() {
	var tweet = "";
    $("#getQuote").on("click", function() {
			var rand = Math.ceil(Math.random()*200);
			$.getJSON("https://quotesondesign.com/wp-json/posts/"+ rand , function(a) {		
	$("#quote-text").html(a.content);
	$("#quote-author").html("—"+ a.title );			tweet = a.content.substring(3,a.content.length-5) + "—"+ a.title;
}).fail(function(jqXHR) {
    if (jqXHR.status == 404) {
        alert("Api is not working at the moment");
    } else {
        $("#quote-text").html("<p>An old surrealist trick was to take images that had no business being together and plopping them into the same image. Your mind wants to make associations. Design does that all the time.  <\/p>\n");
				$("#quote-author").html("-Art Chantry");	
			tweet = "An old surrealist trick was to take images that had no business being together and plopping them into the same image. Your mind wants to make associations. Design does that all the time. —Art Chantry";
    }
});
    });
	$("#tweetMessage").on("click", function() {
		window.open('https://twitter.com/intent/tweet?hashtags= QuoteOfTheDay&text='   + encodeURIComponent(tweet));
	});
	
  });