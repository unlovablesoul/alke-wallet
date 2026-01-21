
$(document).ready(function () {

  $("#loginForm").submit(function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    if (email === "admin@alke.cl" && password === "1234") {
      localStorage.setItem("usuario", email);
      window.location.href = "menu.html";
    } else {
      $("#error").removeClass("d-none");
    }
  });

});

