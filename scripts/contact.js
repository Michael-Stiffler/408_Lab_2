function showForm() {
  document.getElementById("firstname").innerHTML =
    document.getElementById("fname").value;
  document.getElementById("lastname").innerHTML =
    document.getElementById("lname").value;
  document.getElementById("useremail").innerHTML =
    document.getElementById("email").value;
  document.getElementById("key_action").innerHTML =
    document.getElementById("form").action;
}
