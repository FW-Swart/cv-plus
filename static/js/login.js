$(document).ready(function() {
    $('#email').focus();

    $('form[name="userLoginfrm"]').on('submit', function(e) {
        let error = false;
        const email = $.trim($('#email').val())
        const password = $.trim($('#password').val())

        if (email == '' || password == '') {
            return false
        }

        $('input').on('focus', function() {
            $('#login-message').hide();
        })

        $('input[type="text"], input[type="password"]').on('focus', function() {
            $('#email').removeClass('input-error')
            $('#password').removeClass('input-error')
        })

        // $('form[name="frmLogin"] input[type="submit"]').prop('disabled', true)
        $.ajax({
            url: 'login/auth',
            method: 'POST',
            data: $(this).serialize(),
            success: function(result) {
                const data = JSON.parse(result)
                if (data.success) {
                    $('form[name="userLoginfrm"] input[type="submit"]').prop('disabled', false)
                    // dit moet iets van de cvmake worden vermoed ik
                    window.location.href = "/";
                } else {
                    $('#login-message').html('Unkown error.').show()
                }
            }
        })
    })
});