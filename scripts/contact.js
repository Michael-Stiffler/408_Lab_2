function showForm() {
  document.getElementById("key_firstname").innerHTML =
    document.getElementById("fname").name;
  document.getElementById("firstname").innerHTML =
    document.getElementById("fname").value;
  document.getElementById("key_lastname").innerHTML =
    document.getElementById("lname").name;
  document.getElementById("lastname").innerHTML =
    document.getElementById("lname").value;
  document.getElementById("key_email").innerHTML =
    document.getElementById("email").name;
  document.getElementById("useremail").innerHTML =
    document.getElementById("email").value;
  document.getElementById("key_action").innerHTML =
    document.getElementById("form").name;
}
