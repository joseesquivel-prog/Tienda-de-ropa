// Resto del código...

function cargarDetallesPago() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    const detalleCarrito = document.getElementById('detalle-carrito');
    
    if (carritoGuardado && detalleCarrito) {
        let total = 0;
        detalleCarrito.innerHTML = '<ul></ul>';
        const ul = detalleCarrito.querySelector('ul');
        
        carritoGuardado.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.producto}</span><span>$${item.precio}</span>`;
            ul.appendChild(li);
            total += item.precio;
        });

        const totalElement = document.createElement('p');
        totalElement.className = 'total';
        totalElement.innerText = `Total: $${total}`;
        detalleCarrito.appendChild(totalElement);
    }
}

function confirmarCompra() {
    alert('Compra confirmada. Gracias por su compra.');
    localStorage.removeItem('carrito');
    window.location.href = 'index.html';
}

function cancelarCompra() {
    localStorage.removeItem('carrito');
    window.location.href = 'index.html';
}

// Llamar cargarDetallesPago() cuando la página de pago se carga
if (window.location.pathname.includes('pago.html')) {
    window.onload = cargarDetallesPago;
}
