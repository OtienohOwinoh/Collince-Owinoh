function sendEmail() {
  Email.send({
      Host: "smtp.gmail.com",
      Port: "587 (TLS) or 465 (SSL)",
      Username: "coowinoh@gmail.com",
      Password: "",
      To: 'coowinoh1@gmail.com',
      From: document.getElementById("email").value,
      Subject: "New Contact Form Inquiry",
      Body: "Name: " + document.getElementById("name").value +
            "\nEmail: " + document.getElementById("email").value +
            "\nPhone Number: " + document.getElementById("phoneNumber").value +
            "\nMessage: " + document.getElementById("message").value
  }).then(
      message => {
          alert("Message sent successfully!");
          // You can add any additional logic here, such as clearing the form fields
          document.getElementById("contact-page").reset();
      }
  );
}
