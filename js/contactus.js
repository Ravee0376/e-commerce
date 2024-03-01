document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Getting the values from the form inputs using getElementById
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Preparing the display string using template literals
    var displayText = `<h2>Submitted Information:</h2><br>
                      <h3>  Name: ${name}<br></h3>
                      <h3>   Email: ${email}<br></h3>
                      <h3> Subject: ${subject}<br></h3>
                      <h3> Message: ${message}</h3>
                   
                   
                     
                     `;

    // Displaying the form data
    document.getElementById("formDataDisplay").innerHTML = displayText;
  });






