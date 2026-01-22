// Initial Product Data
const productos = [
    {
        id: 1,
        nombre: "Auriculares Premium Wireless",
        precio: 299.99,
        descripcion: "Sonido de alta fidelidad con cancelación de ruido activa y diseño ergonómico."
    },
    {
        id: 2,
        nombre: "Smartwatch Elite",
        precio: 450.00,
        descripcion: "Seguimiento avanzado de salud, GPS integrado y acabado en cristal de zafiro."
    },
    {
        id: 3,
        nombre: "Cámara Mirrorless 4K",
        precio: 1200.00,
        descripcion: "Captura momentos inolvidables con una resolución 4K y sensor de fotograma completo."
    },
    {
        id: 4,
        nombre: "Lámpara de Escritorio LED",
        precio: 45.50,
        descripcion: "Iluminación ajustable con carga inalámbrica integrada para dispositivos móviles."
    }
];

// Select DOM elements
const listaProductos = document.getElementById('lista-productos');
const btnAgregar = document.getElementById('btn-agregar');

/**
 * Renders the list of products into the DOM
 */
function renderizarProductos() {
    // Clear current list
    listaProductos.innerHTML = '';

    // Iterate and create elements
    productos.forEach((producto, index) => {
        const li = document.createElement('li');
        li.className = 'product-card';
        // Add animation delay for staggered entrance
        li.style.animationDelay = `${index * 0.1}s`;

        li.innerHTML = `
            <div class="product-info">
                <h2 class="product-name">${producto.nombre}</h2>
                <div class="product-price">$${producto.precio.toFixed(2)}</div>
                <p class="product-desc">${producto.descripcion}</p>
            </div>
        `;
        
        listaProductos.appendChild(li);
    });
}

/**
 * Adds a new random product to the list
 */
function agregarProducto() {
    const nuevosProductos = [
        { nombre: "Tablet Pro X", precio: 899.00, descripcion: "Potencia de portátil en un diseño ultra delgado." },
        { nombre: "Teclado Mecánico RGB", precio: 129.99, descripcion: "Switches táctiles y retroiluminación personalizable." },
        { nombre: "Monitor UltraWide 34\"", precio: 599.50, descripcion: "Experiencia inmersiva para gaming y productividad." },
        { nombre: "Altavoz Bluetooth Portátil", precio: 79.90, descripcion: "Sonido 360 grados resistente al agua." },
        { nombre: "Mochila Tech Antirrobo", precio: 55.00, descripcion: "Diseño seguro con puerto de carga USB integrado." }
    ];

    // Pick a random product from the list specifically for demonstration purposes
    const productoAleatorio = nuevosProductos[Math.floor(Math.random() * nuevosProductos.length)];
    
    // Create a new unique ID (simple implementation)
    const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;

    // Add to data array
    productos.push({
        id: nuevoId,
        ...productoAleatorio
    });

    // Re-render
    renderizarProductos();

    // Scroll to bottom to see new item
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', renderizarProductos);
btnAgregar.addEventListener('click', agregarProducto);
