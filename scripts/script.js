$(function(){
  $(".form").submit(function(){
    var name = $("#f_name").val();
    var surname = $("#l_name").val();
    var email = $("#email").val();

    const info = [name,surname,email];

    try {
      var emailValidation = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      var valid = emailValidation.test(email);

      for (var i=0; i<info.length; i++) {
        // Checking if the input is a number.
        if (isNaN(info[i]) == false && info[i] != "" && email != "") throw "Numbers are not accepted!";
        if (isNaN(info[i]) == false && info[i] != "" && email == "") throw "Fill in all fields and numbers are not accepted!";
      }

      if (valid) {
        alert("Email is valid");
      } else if (valid == false && email != "") {
        alert("Email is invalid");
      }

      if (name == "" || surname == "" || email == "") {
        alert('Fill in all fields');
      } else if (name != "" && surname != "" && email != "" && valid) {
        alert("Submitted");
      }


    } catch(err) {
      alert(err);
    }

    return false;
  });
});
