$(document).ready(function () {

  let saldo = localStorage.getItem("saldo");
  saldo = saldo ? parseInt(saldo) : 0;

  $("#saldo").text("$" + saldo);

  $("#depositForm").submit(function (e) {
    e.preventDefault();

    const monto = parseInt($("#monto").val());

    if (monto > 0) {
      saldo += monto;
      localStorage.setItem("saldo", saldo);

      let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
      transacciones.push({ tipo: "Depósito", monto: monto });
      localStorage.setItem("transacciones", JSON.stringify(transacciones));

      $("#saldo").text("$" + saldo);
      $("#mensaje").removeClass("d-none");
      $("#monto").val("");
    }
  });

});

