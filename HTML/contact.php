<?php 
$to = ''; // Put in your email address here
$subject  = "Contact Us Form"; // The default subject. Will appear by default in all messages. Change this if you want.

// User info (DO NOT EDIT!)
$first_name = stripslashes($_REQUEST['name-contact']); // sender's name
$subject_contact = stripslashes($_REQUEST['subject-contact']); // sender's name
$email = stripslashes($_REQUEST['email-contact']); // sender's email
$phone = stripslashes($_REQUEST['phone-contact']); 
$cmy_name = stripslashes($_REQUEST['cmy-name']); 
$message = stripslashes($_REQUEST['message']);



// The message you will receive in your mailbox
// Each parts are commented to help you understand what it does exaclty.
// YOU DON'T NEED TO EDIT IT BELOW BUT IF YOU DO, DO IT WITH CAUTION!
$msg .= "First Name: ".$first_name."\r\n\n";  // add sender's name to the message
$msg .= "E-mail: ".$email."\r\n\n";  // add sender's email to the message
$msg .= "Phone: ".$phone."\r\n\n";  // add sender's phone to the message
$msg .= "Company Name: ".$cmy_name."\r\n\n";  // add sender's phone to the message
$msg .= "Subject: ".$subject_contact."\r\n\n";  // add sender's phone to the message
$msg .= "Message: ".$message."\r\n\n";  // add sender's checkboxes to the message
$msg .= "\r\n\n"; 

$mail = @mail($to, $subject, $msg, "From:".$email);  // This command sends the e-mail to the e-mail address contained in the $to variable

if($mail) {
	header("Location:index.html");	
} else {
	echo 'Message could not be sent!';   //This is the message that will be shown when an error occured: the message was not send
}

?>