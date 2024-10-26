<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mohamed364728@gmail.com"; // البريد الذي تريد إرسال البيانات إليه
    $subject = "New Form Submission";
    $username = $_POST['username'];
    $email = $_POST['email'];
    
    $message = "Username: $username\nEmail: $email";
    $headers = "From: webmaster@example.com"; // تأكد من استخدام بريد صالح
    
    // استخدام دالة mail لإرسال البريد
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>
