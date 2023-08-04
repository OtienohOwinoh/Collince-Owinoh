function sendEmail() {

    Email.send({
        Host : "smtp.elasticmail.com",
        Username : "coowinoh@gmail.com",
        Password : "mK8oGS9kIH90-_y",
        To : 'coowinoh1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


