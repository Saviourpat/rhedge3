(function () {
  "use strict";

  // Initialize EmailJS with your User ID
  emailjs.init("UP7gpoh4sbuNzRHoKuV6P");  // Replace with your actual EmailJS User ID

  let forms = document.querySelectorAll('.php-email-form'); // Use the correct form class

  forms.forEach(function (e) {
    e.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent default form submission

      let thisForm = this;

      // Hide error and sent messages
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Collect the form data
      let formData = new FormData(thisForm);

      // Send email via EmailJS
      emailjs.sendForm("service_qjfp33o", "template_1h1dpzu", formData) // Replace with your actual Service ID and Template ID
        .then(function (response) {
          // Success
          console.log("Email sent successfully:", response);  // For debugging
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset(); // Reset the form after successful submission
        }, function (error) {
          // Error
          console.error("Error sending email:", error);  // For debugging
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.error-message').innerHTML = 'Error: ' + error.text;
          thisForm.querySelector('.error-message').classList.add('d-block');
        });
    });
  });

})();
