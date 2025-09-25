
const botonesHamburguesa = document.querySelectorAll('.hamburguesa-btn');
const btnEspecificaciones = document.getElementById('btn-especificaciones');
const menuEspecificaciones = document.getElementById('especificaciones-menu');
const btnGuardar = document.getElementById('btn-guardar');
const textoEspecificaciones = document.getElementById('especificaciones-texto');


document.addEventListener('DOMContentLoaded', function() {
    // variables
    let hamburguesaSeleccionada = null;
    let especificacionesGuardadas = '';

    // seleccionar hamburguesa
    const botonesHamburguesa = document.querySelectorAll('.hamburguesa-btn');
    
    botonesHamburguesa.forEach(boton => {
        boton.addEventListener('click', function() {
            // remueve la selección anterior
            botonesHamburguesa.forEach(btn => {
                btn.classList.remove('seleccionada');
            });
            
            // marca la seleccion
            this.classList.add('seleccionada');
            hamburguesaSeleccionada = this.id;
            
            console.log('Hamburguesa seleccionada:', hamburguesaSeleccionada);
        });
    });

    // muestra u oculta especificaciones
    const btnEspecificaciones = document.getElementById('btn-especificaciones');
    const menuEspecificaciones = document.getElementById('especificaciones-menu');
    
    if (btnEspecificaciones && menuEspecificaciones) {
        btnEspecificaciones.addEventListener('click', function() {
            if (menuEspecificaciones.style.display === 'block') {
                menuEspecificaciones.style.display = 'none';
                this.innerHTML = '<span>+</span> Agregar Especificaciones al Chef';
            } else {
                menuEspecificaciones.style.display = 'block';
                this.innerHTML = '<span>-</span> Ocultar Especificaciones';
            }
        });
    }

    // guarda las especificaciones
    const btnGuardar = document.getElementById('btn-guardar');
    const textoEspecificaciones = document.getElementById('especificaciones-texto');
    
    if (btnGuardar && textoEspecificaciones) {
        btnGuardar.addEventListener('click', function() {
            especificacionesGuardadas = textoEspecificaciones.value;
            alert('Especificaciones guardadas correctamente');
            menuEspecificaciones.style.display = 'none';
            btnEspecificaciones.innerHTML = '<span>+</span> Especificaciones Guardadas';
        });
    }

    // continua con el pedido
    const btnContinuar = document.getElementById('btn-continuar');
    
    if (btnContinuar) {
        btnContinuar.addEventListener('click', function() {
            console.log('Hamburguesa seleccionada:', hamburguesaSeleccionada);
            console.log('Especificaciones:', especificacionesGuardadas);
            
            if (!hamburguesaSeleccionada) {
                alert('Por favor, selecciona una hamburguesa antes de continuar.');
                return;
            }
            

            const especificacionesCodificadas = encodeURIComponent(especificacionesGuardadas);
            
            // redirigir a la página final
            window.location.href = `final.html?hamburguesa=${hamburguesaSeleccionada}&especificaciones=${especificacionesCodificadas}`;
        });
    }

    // oculta el menu deespecificaciones
    if (menuEspecificaciones) {
        menuEspecificaciones.style.display = 'none';
    }
});