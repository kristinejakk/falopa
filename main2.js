document
    .querySelector('[data-gym="alumnos"]')
    .addEventListener('click', function () {
        document
            .querySelector('[data-gym="agenda"]')
            .classList.toggle('oculto');
        document.querySelector('[data-gym="info"]').classList.toggle('oculto');
        document
            .querySelector('[data-gym="banner"]')
            .classList.toggle('oculto');
    });
