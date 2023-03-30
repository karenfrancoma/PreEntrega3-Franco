// objeto que almacena los productos y sus detalles
const products = {
  'product-1': {
    name: 'Norte',
    price: 100
  },
  'product-2': {
    name: 'Oriental',
    price: 200
  },
  'product-3': {
    name: 'Occidental',
    price: 400
  },
  'product-4': {
    name: 'Platino',
    price: 900
  }
};

// función que se ejecuta cuando se envía el formulario
document.getElementById('cartForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevenir el envío del formulario


  
  const items = []; // array para almacenar los productos seleccionados
  
  // iterar sobre los productos y sus cantidades
  for (const [productId, productQuantity] of Object.entries(this.elements)) {
    if (productId.startsWith('product-') && productQuantity.value > 0) {
      const product = products[productId]; // obtener los detalles del producto
      const quantity = parseInt(productQuantity.value); // convertir la cantidad a número
      
      // añadir el producto a la lista de items
      items.push({
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }
  
  // si se seleccionaron productos, mostrar la factura
  if (items.length > 0) {
    showInvoice(items);
    saveInvoice(items);
  }
});

// función que se ejecuta cuando se envía el formulario
document.getElementById('cartForm1').addEventListener('submit', function(event) {
  event.preventDefault(); // prevenir el envío del formulario


  
  const items = []; // array para almacenar los productos seleccionados
  
  // iterar sobre los productos y sus cantidades
  for (const [productId, productQuantity] of Object.entries(this.elements)) {
    if (productId.startsWith('product-') && productQuantity.value > 0) {
      const product = products[productId]; // obtener los detalles del producto
      const quantity = parseInt(productQuantity.value); // convertir la cantidad a número
      
      // añadir el producto a la lista de items
      items.push({
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }
  
  // si se seleccionaron productos, mostrar la factura
  if (items.length > 0) {
    showInvoice(items);
    saveInvoice(items);
  }
});

// función que se ejecuta cuando se envía el formulario
document.getElementById('cartForm2').addEventListener('submit', function(event) {
  event.preventDefault(); // prevenir el envío del formulario


  
  const items = []; // array para almacenar los productos seleccionados
  
  // iterar sobre los productos y sus cantidades
  for (const [productId, productQuantity] of Object.entries(this.elements)) {
    if (productId.startsWith('product-') && productQuantity.value > 0) {
      const product = products[productId]; // obtener los detalles del producto
      const quantity = parseInt(productQuantity.value); // convertir la cantidad a número
      
      // añadir el producto a la lista de items
      items.push({
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }
  
  // si se seleccionaron productos, mostrar la factura
  if (items.length > 0) {
    showInvoice(items);
    saveInvoice(items);
  }
});

// función que se ejecuta cuando se envía el formulario
document.getElementById('cartForm3').addEventListener('submit', function(event) {
  event.preventDefault(); // prevenir el envío del formulario


  
  const items = []; // array para almacenar los productos seleccionados
  
  // iterar sobre los productos y sus cantidades
  for (const [productId, productQuantity] of Object.entries(this.elements)) {
    if (productId.startsWith('product-') && productQuantity.value > 0) {
      const product = products[productId]; // obtener los detalles del producto
      const quantity = parseInt(productQuantity.value); // convertir la cantidad a número
      
      // añadir el producto a la lista de items
      items.push({
        name: product.name,
        price: product.price,
        quantity: quantity
      });
    }
  }
  
  // si se seleccionaron productos, mostrar la factura
  if (items.length > 0) {
    showInvoice(items);
    saveInvoice(items);
  }
});

// función que muestra la factura
function showInvoice(items) {
  const invoiceBody = document.getElementById('invoice-body');
  const invoiceTotal = document.getElementById('invoice-total');
  
  // limpiar la factura anterior, si la hay
  invoiceBody.innerHTML = '';
  invoiceTotal.textContent = '';
  
  // iterar sobre los items y agregarlos a la factura
  let total = 0;
  for (const item of items) {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    // crear una fila para el item
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity.toLocaleString()}</td>
      <td>${item.price.toLocaleString()}</td>
      <td>${itemTotal.toLocaleString()}</td>
    `;
    
    invoiceBody.appendChild(row);
  }
  
  // mostrar el total
  invoiceTotal.textContent = total.toLocaleString();
  
  // mostrar la factura
  document.getElementById('invoice').classList.remove('d-none');
}

// función que guarda la factura en Local Storage
function saveInvoice(items) {
  const invoice = {
    items: items,
  };
  const invoices = getInvoices();
  invoices.push(invoice);
  localStorage.setItem('invoices', JSON.stringify(invoices));
}

// función que obtiene la lista de facturas guardadas en Local Storage
function getInvoices() {
  const invoicesJSON = localStorage.getItem('invoices');
  if (invoicesJSON) {
    return JSON.parse(invoicesJSON);
  } else {
    return [];
  }
}
