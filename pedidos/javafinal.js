
function obtenerParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        hamburguesa: params.get('hamburguesa'),
        especificaciones: params.get('especificaciones')
    };
}

// muestra los detalles del pedido
function mostrarDetallesPedido() {
    const parametros = obtenerParametrosURL();
    
    // detalles de las burguers
    const detalleHamburguesa = document.getElementById('detalle-hamburguesa');
    
    // burguers
    const hamburguesas = {
        'orejas-cheddar': {
            nombre: 'Orejas con Cheddar',
            imagen: 'orejascheddar.png',
            descripcion: 'Una hamburguesa bañada en queso cheddar; Tres medallones de carne con abundante bacon y cheddar '
        },
        'lomo-caniche': {
            nombre: 'Lomo de Caniche',
            imagen: 'lomodecaniche.png',
            descripcion: 'Especialidad de la casa: Dos medallones de carne premium, bañada en un sabor parrillero exquisito junto a cebolla caramelizada'
        },
        'ojitos-tomate': {
            nombre: 'Ojitos en Tomate',
            imagen: 'ojitostomate.png',
            descripcion: 'Hamburguesa con tomates naturales; Dos medallones de carne, lechuga y tomate'
        }
    };
    
    // Mostrar la hamburguesa seleccionada
    if (parametros.hamburguesa && hamburguesas[parametros.hamburguesa]) {
        const hamburguesa = hamburguesas[parametros.hamburguesa];
        detalleHamburguesa.innerHTML = `
            <div class="hamburguesa-seleccionada">
                <img src="${hamburguesa.imagen}" alt="${hamburguesa.nombre}">
                <div class="hamburguesa-info">
                    <h4>${hamburguesa.nombre}</h4>
                    <p>${hamburguesa.descripcion}</p>
                </div>
            </div>
        `;
    } else {
        detalleHamburguesa.innerHTML = '<p>No se ha seleccionado ninguna hamburguesa</p>';
    }
    
    // Mostrar especificaciones
    const especificacionesTexto = document.getElementById('texto-especificaciones');
    if (parametros.especificaciones) {
        especificacionesTexto.textContent = parametros.especificaciones;
    }
}

// Establecer fecha actual
function establecerFechaActual() {
    const fechaElemento = document.getElementById('fecha-actual');
    const ahora = new Date();
    const opciones = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    fechaElemento.textContent = ahora.toLocaleDateString('es-ES', opciones);
}

// Confirmar pedido
function configurarBotonConfirmar() {
    const btnConfirmar = document.getElementById('btn-confirmar');
    const inputNombre = document.getElementById('nombre-cliente');
    
    btnConfirmar.addEventListener('click', function() {
        if (inputNombre.value.trim() === '') {
            alert('Por favor, ingresa tu nombre o apodo para que podamos llamarte.');
            inputNombre.focus();
            return;
        }
        
        // datos
        alert(`¡Pedido confirmado, ${inputNombre.value}! Tu hamburguesa estará lista en aproximadamente 20-30 minutos.`);
        
        // Redirigir a página 
    });
}

// Inicializar página cuando se carga
document.addEventListener('DOMContentLoaded', function() {
    establecerFechaActual();
    mostrarDetallesPedido();
    configurarBotonConfirmar();
});