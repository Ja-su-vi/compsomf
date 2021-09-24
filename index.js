function myFunction() {
    var x = document.getElementById("show");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  