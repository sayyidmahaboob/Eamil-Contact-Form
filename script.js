console.log("JavaScript is ready to run");

function sendEmail() {
  Email.send({
    SecureToken: "182ccff9-f2ec-4f21-8677-bda1c0b367e3",
    To: "sayyidmahboob@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name :" +
      "" +
      document.getElementById("name").value +
      "<br> Email : " +
      document.getElementById("email").value +
      "<br> phone no: " +
      document.getElementById("phone").value +
      "<br> Message" +
      document.getElementById("message").value,
  }).then((message) => alert("Message Sent"));
}
