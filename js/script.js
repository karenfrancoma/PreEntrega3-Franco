//Variable para guardar datos de factura
let factura = [];

//ELEMENTOS DEL DOM

    const inputNombre = document.getElementById("nombreComprador"),
  inputApellido = document.getElementById("apellidoComprador"),
  inputLocacion = document.getElementById("locacionSeleccionada"),
  inputCantidadTickets = document.getElementById("cantidadTicketsElegida"),
  btnContinuar = document.getElementById("btnContinuar"),
  modal = document.getElementById('staticBackdrop');


//CLASE CONSTRUCTORA
class Ticket {
  constructor(nombre, apellido, locacion, valor, cantidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.locacion = locacion;
    this.valor = parseInt(valor);
    this.cantidad = parseInt(cantidad);
  }
}



function generarFactura(factura) {
  const compra = new Ticket(
    inputNombre.value,
    inputApellido.value,
    inputLocacion.value,
    inputCantidadTickets.value,
  );

  factura.push(compra);
}

function guardarEnStorage(factura) {
  localStorage.setItem("facturaCompra", JSON.stringify(factura));
}



function createBill(contenedorHTML) {
  contenedorHTML.innerHTML = ''; 

        let divColTarjeta = document.createElement('div');

       divColTarjeta.className = 'modal';

        divColTarjeta.innerHTML = `
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Your Bill</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h6>Nombre</h6>
              <p class='modal-text'>${inputNombre.value}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>`;

        contenedorHTML.append(divColTarjeta);
    
}

btnContinuar.onclick = (e) => {
    e.preventDefault();
    createBill(modal);
    console.log(inputNombre.value);
}