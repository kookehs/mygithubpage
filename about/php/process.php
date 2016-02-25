<?php
$name = $_POST["name"];
$subject = $_POST["subject"];
$email = $_POST["email"];
$message = $_POST["message"];
$answer = intval($_POST["answer"]);
 
$EmailTo = "panopticon@whos-watching.me";

$errorMSG = "";
 
// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// Subject
if (empty($_POST["subject"])) {
    $errorMSG = "Subject is required ";
} else {
    $name = $_POST["subject"];
}

// EMAIL
if (empty($_POST["email"]) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errorMSG .= "Email is missing or incorrect ";
} else {
    $email = $_POST["email"];
}
 
// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}

// Answer
if ($human !== 5) {
    $errorMSG .= "Value is incorrected ";
} else {
    $message = $_POST["answer"];
}
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Subject: ";
$Body .= $subject;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $subject, $Body, "From:".$email);
 
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
 
?>