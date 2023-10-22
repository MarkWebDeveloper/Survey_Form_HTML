let formData = document.getElementById("survey_form");

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let description = document.getElementById("dropdown-menu");
    let recommend = document.getElementsByName("recommend");
    let comment = document.getElementById("text_box");

    if (name.value == "" || email.value == "" || age.value == ""|| description.value == "" || recommend.value == "" || comment.value == "") {
        alert("Ensure you fill out all the fields!");
      } else {
        alert("This form has been successfully submitted!");
        console.log(
          `This form's data is:  Name: ${name.value}, Email: ${email.value}, Age: ${age.value}, Description: ${description.value}, Recommend: ${document.querySelector('input[name="recommend"]:checked').value}, Comment: ${comment.value}`
        );
    
        name.value = "";
        email.value = "";
        age.value = "";
        description.value = "";
        recommend.value = "";
        comment.value = "";
      }
    });


