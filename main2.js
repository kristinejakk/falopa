document.getElementById('nuevo').addEventListener('click', function () {
    document.querySelector(`[data-gym="inicio"]`).classList.toggle('oculto');
    document.querySelector(`[data-gym="form"]`).classList.toggle('oculto');
});

let botones = document.querySelectorAll('.volver, .cerrar');
botones.forEach((boton) => {
    boton.addEventListener('click', function () {
        let vistas = document.querySelectorAll('[data-gym]');
        vistas.forEach((vista) => {
            vista.classList.add('oculto');
        });
        vistas[0].classList.remove('oculto');
    });
});

document.getElementById('alumnos').addEventListener('click', function () {
    document.querySelector('[data-gym="inicio"]').classList.toggle('oculto');
    document.querySelector('[data-gym="alumnos"]').classList.toggle('oculto');
});

document
    .querySelector('[data-gym="form"] form')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        let ingreso_fecha = fecha.value;
        let ingreso_descripcion = descripcion.value;
        let ingreso_reps = reps.value;
        const nuevo_card = document.createElement('div');

        nuevo_card.classList.add('card', 'mb-3');
        nuevo_card.innerHTML = `
    <div class="card-body mb-2">
        <h2 class="card-title mb-3">Mi entrenamiento</h2>

        <p class="card-text fw-bold">
        Fecha: <span class="fw-normal">${ingreso_fecha}</span>
         </p>
        <p class="card-text fw-bold">
        Descripción del entrenamiento:
        <span class="fw-normal"
            >${ingreso_descripcion}</span
        >
        </p>
        <p class="card-text fw-bold">
            Cantidad de repeticiones:
            <span class="fw-normal">${ingreso_reps}</span>
        </p>
    </div>
    <div class="d-flex justify-content-end">
        <img
            src="imagenes/lapiz.svg"
            alt="ícono editar"
            class="me-3 editar"
            style="width: 2vw; height: auto"
        />
        <img
            src="imagenes/tacho.svg"
            alt="ícono eliminar"
            class="me-3 eliminar"
            style="width: 2vw; height: auto"
        />
    </div>`;
        document.getElementById('cards').prepend(nuevo_card);
        document.querySelector('[data-gym="form"] form').reset();
        document
            .querySelector('[data-gym="inicio"]')
            .classList.toggle('oculto');
        document.querySelector('[data-gym="form"]').classList.toggle('oculto');
    });
