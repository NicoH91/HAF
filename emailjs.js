document.getElementById('sendButton').addEventListener('click', function (event) {
    event.preventDefault();

    let name = document.querySelector('input[name="nombre"]').value;
    let lastName = document.querySelector('input[name="apellido"]').value;
    let message = document.querySelector('textarea[name="mensaje"]').value;

    // Verificar si los campos están vacíos
    if (name.trim() === '' || lastName.trim() === '' || message.trim() === '') {
        
        Swal.fire({
            title: 'Error',
            text: 'Por favor, completa todos los campos del formulario.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return; 
    }

    let params = {
        from_name: name + ' ' + lastName,
        message: message
    };

    emailjs.send('service_j2045yt', 'template_h9ou3or', params)
        .then(function (response) {
            console.log('Correo electrónico enviado', response);

            // Activar SweetAlert
            Swal.fire({
                title: 'Correo electrónico enviado',
                text: 'Gracias por tu consulta. Nos pondremos en contacto contigo pronto.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });

            // Restablecer los valores de los campos
            document.querySelector('input[name="nombre"]').value = '';
            document.querySelector('input[name="apellido"]').value = '';
            document.querySelector('textarea[name="mensaje"]').value = '';
        }, function (error) {
            console.error('Error al enviar el correo electrónico', error);

            // Activar SweetAlert
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        });

    
    return true;
});
