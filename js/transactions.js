$(document).ready(function () {

  let transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];

  if (transacciones.length === 0) {
    $("#vacio").removeClass("d-none");
    return;
  }

  transacciones.forEach(function (t) {
    $("#lista").append(`
      <tr>
        <td>${t.tipo}</td>
        <td>$${t.monto}</td>
      </tr>
    `);
  });

});

