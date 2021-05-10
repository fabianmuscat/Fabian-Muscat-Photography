$(function(){
  $(".form").submit(function(){
    var name = $("#f_name").val();
    var surname = $("#l_name").val();
    var email = $("#email").val();


    if (name == "" && surname != "" && email != "") {
      alert("Please enter your name");

    } else if (name != "" && surname == "" && email != "") {
      alert("Please enter your last name");

    } else if (name != "" && surname != "" && email == "") {
      alert("Please enter your email");

    } else if (name == "" && surname == "" && email == "") {
      alert("Enter all Fields");
    } else {
      alert('Submitted!')
    }
    return false;
  })
});
