import $ from 'jquery';	

export default class ajaxmini {

	jsonPost() {
		$.ajax({
		  // method: "POST",
		  method: "GET",
		  url: "data/contact-list.json",
		  data: { author: "John", title: "The Idiot" }
		})
	  .done(function( msg ) {
	    console.info( "Data Saved", msg );
	  })
	  .fail(function() {
	    console.log( "error" );
	  })
	  .always(function() {
	    console.log( "complete" );
	  });
	}

}


