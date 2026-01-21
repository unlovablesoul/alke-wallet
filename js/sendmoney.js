$(document).ready(function () {

  let saldo = localStorage.getItem("saldo");
  saldo = saldo ? parseInt(saldo) : 0;

  $("#saldo").text("$" + saldo);

  $("#sendForm").submit(function (e) {
    e.preventDefault();

    const monto = parseInt($("#monto").val());

    if (monto <= saldo) {
      saldo -= monto;
      localStorage.setItem("saldo", saldo);

      let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
      transacciones.push({ tipo: "Envío", monto: monto });
      localStorage.setItem("transacciones", JSON.stringify(transacciones));

      $("#saldo").text("$" + saldo);
      $("#ok").removeClass("d-none");
      $("#error").addClass("d-none");
      $("#monto").val("");
    } else {
      $("#error").removeClass("d-none");
      $("#ok").addClass("d-none");
    }
  });

});
