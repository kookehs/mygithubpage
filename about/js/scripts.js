$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Message not sent please try again later");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
 
    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "name=" + name + "&subject" + subject + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
            else {
                formError();
                submitMSG(false, "Message not sent please try again later");
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Successful");
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
        msgClasses = "h3 text-center tada animated text-success";
    } else {
        msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}