$(function(){

    var msgEmpty = $('#messageEmpty');
    var msgError = $('#messageError');
    var inputEmail = $('input[name=email]');
    var iconError = $('#iconError');

    $('#email').focus(function(){
        if (msgEmpty.is(':visible') || msgError.is(':visible')) {
            msgEmpty.hide();
            msgError.hide();
        }
        resetInvalidField($(this));
    });

    $('form').submit(function(event){
        event.preventDefault();

        var email = inputEmail.val();
        var isValid = true;

        if (email === '') {
            applyFieldInvalid(inputEmail);
            msgEmpty.show();
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid(inputEmail);
            msgError.show();
            isValid = false;
        }

        if (isValid) {

            var msmSuccess = $('#messageSuccess');
            var emailDisabled = $('#email');
            var btnDisabled = $('#btn');

            msmSuccess.removeClass('hidden').addClass('flex animate-move-in');
            emailDisabled.prop('disabled', true);
            btnDisabled.prop('disabled', true);

            setTimeout(function() {
                msmSuccess.removeClass('animate-move-in').addClass('animate-move-out');
                inputEmail.val('');

                setTimeout(function() {
                    msmSuccess.removeClass('animate-move-out flex').addClass('hidden');
                    emailDisabled.prop('disabled', false);
                    btnDisabled.prop('disabled', false);
                }, 500);
            }, 7000);
        }
    });

    function applyFieldInvalid(el){
        el.removeClass('border border-gray-200 pr-24').addClass('border-2 border-col-SR pr-28');
        iconError.removeClass('hidden').addClass('flex');
    }

    function resetInvalidField(el){
        el.removeClass('border-2 border-col-SR pr-28').addClass('border border-gray-200 pr-24').val('');
        iconError.removeClass('flex').addClass('hidden');
    }
    
});