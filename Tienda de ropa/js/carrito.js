let carrito = [];

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '<h2>Carrito de Compras</h2><ul></ul><p class="total">Total: $0</p><button class="vaciar-carrito" onclick="vaciarCarrito()">Vaciar Carrito</button>';
    

    const ul = carritoElement.querySelector('ul');
    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.producto}</span><span>$${item.precio}</span>`;
        ul.appendChild(li);
        total += item.precio;
    });

    const totalElement = carritoElement.querySelector('.total');
    totalElement.innerText = `Total: $${total}`;
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}





function pagar() {
    // Aquí podrías guardar el carrito en localStorage o algún sistema de almacenamiento temporal
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = 'pago.html';
}

function cargarCarrito() {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
        carrito = carritoGuardado;
    }
    actualizarCarrito();
}





