$( document ).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
      //  $("feedbackMessage").addClass("hidden");

        $.ajax({
            url: "http://formspree.io/panopticon@whos-watching.me", 
            method: "POST",
            data: {
            	name: $('#name').val(),
            	subject: $('#subject').val(),
                email: $('#email').val(),
                message: $('#message').val()
            },
            dataType: "json"
        }).error(function(x, status, error){
        	formError();
        }). success(function(data, status) {
			formSuccess();
            $('form').find('#name, #subject, #email, #message').val('');
        });
    });
    
    function formSuccess(){
	    $("#contactForm")[0].reset();
	    $("#feedbackMessage").innerHtml = "Your message was sent :). We will respond back soon.";
	    $("#feedbackMessage").removeClass("hidden");
	}

	function formError(){
	    $("#feedbackMessage").innerHtml = "There was an error sending your message. Please try again later.";
	    $("#feedbackMessage").removeClass("hidden");
	}
});