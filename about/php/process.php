<?php
//Contact form php file check if form was submited
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //variables needed to work with input values
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $human = intval($_POST['human']);

    //variables needed to for sending the email
    $from = 'User email'; 
    $to = 'panopticon@whos-watching.me'; 
    $subject = 'Message from user ';
     
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    //make sure user entered a name
    if (!$_POST['name']) {
        $errName = 'Please enter your name';
    }

    //make sure user entered a subject
    if (!$_POST['subject']) {
        $errSubject = 'Please enter a subject';
    }

    //make sure user entered an email and if it is valid
    if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errEmail = 'Please enter a valid email address';
    }

    //make sure user entered a message
    if (!$_POST['message']) {
        $errMessage = 'Please enter your message';
    }

    //make sure the user is not a robot
    if ($human !== 5) {
        $errHuman = 'Your anti-spam is incorrect';
    }
    
    //If there are no errors, send the email
    if (!$errName && !errSubject && !$errEmail && !$errMessage && !$errHuman) {
        if (mail ($to, $subject, $body, $from)) {
            $result='<div class="alert alert-success">Thank You! We will be in touch</div>';
        } else {
            $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
        }
    }
}
?>