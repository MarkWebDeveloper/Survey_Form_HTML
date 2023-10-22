let formData = document.getElementById("survey_form");

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let description = document.getElementById("dropdown-menu");
    let comment = document.getElementById("text_box");

    if (name.value == "" || email.value == "" || age.value == ""|| description.value == "" || comment.value == "") {
        alert("Ensure you fill out all the fields!");
      } else {
        alert("This form has been successfully submitted!");
        console.log(
          `This form's data is:  Name: ${name.value}, Email: ${email.value}, Age: ${age.value}, Description: ${description.value}, Comment: ${comment.value}`
        );
    
        name.value = "";
        email.value = "";
        age.value = "";
        description.value = "";
        comment.value = "";
      }
    });


