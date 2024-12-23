const form = document.getElementById("registrationForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let n = document.getElementById("fname").value;
  let b = document.getElementById("lname").value;

  if (n == "" || n == null) {
    document.getElementById("spage").innerHTML = "First name cannot be empty";
  } else if (!/^[a-zA-Z\s]+$/.test(n)) {
    document.getElementById("spage").innerHTML =
      "Enter a valid first name (letters and spaces only)";
  } else if (b == "" || b == null) {
    document.getElementById("spage").innerHTML = "Last name cannot be empty";
  } else if (!/^[a-zA-Z\s]+$/.test(b)) {
    document.getElementById("spage").innerHTML =
      "Enter a valid last name (letters and spaces only)";
  } else {
    document.getElementById("spage").innerHTML = "";
  }

  var pwd = document.getElementById("password").value;
  if (pwd.length < 5) {
    document.getElementById("pass").innerHTML =
      "Password must contain 6 characters";
  } else {
    document.getElementById("pass").innerHTML = "";
  }

  let e = document.getElementById("email").value;
  if (e == null || e == "") {
    document.getElementById("em").innerHTML = "Enter your email";
  } else if (
    !/^(([a-zA-Z0-9\.\_]{6,16})+\@([a-z]{3,7})+\.([a-z A-Z]{2,3}))+$/.test(e)
  ) {
    document.getElementById("em").innerHTML = "Enter a valid email";
  } else {
    document.getElementById("em").innerHTML = "";
  }

  let N = document.getElementById("num").value;
  if (N == "" || N == null) {
    document.getElementById("no").innerHTML = "Enter your Number";
  } else if (!/^([0-9])+$/.test(N)) {
    document.getElementById("no").innerHTML = "Enter a valid Number";
  } else if (N.length < 10 || N.length > 10) {
    document.getElementById("no").innerHTML = "Enter a valid Number";
  } else {
    document.getElementById("no").innerHTML = "";
  }

  let T = document.getElementById("text").value;
  if (T == "" || T == null) {
    document.getElementById("tex").innerHTML = "Enter your Address";
  } else {
    document.getElementById("tex").innerHTML = "";
  }

  var G = document.getElementsByName("radio1");
  var k = 0;
  for (var i = 0; i < G.length; i++) {
    if (G[i].checked) {
      k++;
    }
  }
  if (k == 0) {
    document.getElementById("gen").innerHTML = "Please select a gender";
  } else {
    document.getElementById("gen").innerHTML = "";
  }

  var C = document.getElementsByName("checkbox");
  var y = 0;
  for (var i = 0; i < C.length; i++) {
    if (C[i].checked) {
      y++;
    }
  }
  if (y == 0) {
    document.getElementById("check").innerHTML = "Please select a Hobby";
  } else {
    document.getElementById("check").innerHTML = "";
  }

  let D = document.getElementById("date").value;
  if (D == "") {
    document.getElementById("de").innerHTML = "Please enter your date of birth";
  } else {
    document.getElementById("de").innerHTML = "";
  }

  let S = document.getElementById("country").value;
  if (S == "") {
    document.getElementById("coun").innerHTML = "Please enter your country";
  } else {
    document.getElementById("coun").innerHTML = "";
  }
});
