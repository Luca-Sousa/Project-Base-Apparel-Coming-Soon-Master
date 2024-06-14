$(function(){

    $('#email').focus(function(){
        if ($('#messageEmpty').is(':visible') || $('#messageError').is(':visible')) {
            $('#messageEmpty').hide();
            $('#messageError').hide();
        }
        resetInvalidField($(this));
    });

    $('form').submit(function(event){
        event.preventDefault();

        var email = $('input[name=email]').val();
        var isValid = true;

        if (email === '') {
            applyFieldInvalid($('input[name=email]'));
            $('#messageEmpty').show();
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid($('input[name=email]'));
            $('#messageError').show();
            isValid = false;
        }

        if (isValid) {
            $('#messageSuccess').removeClass('hidden');
            $('#messageSuccess').addClass('flex animate-move-in');

            setTimeout(function() {
                $('#messageSuccess').removeClass('animate-move-in');
                $('#messageSuccess').addClass('animate-move-out');
                $('input[name=email]').val('');

                setTimeout(function() {
                    $('#messageSuccess').removeClass('animate-move-out');
                    $('#messageSuccess').removeClass('flex');
                    $('#messageSuccess').addClass('hidden');
                }, 500);
            }, 7000);
        }
    });

    function applyFieldInvalid(el){
        el.removeClass('border border-gray-200');
        el.addClass('border-2 border-col-SR');
    }

    function resetInvalidField(el){
        el.removeClass('border-2 border-col-SR');
        el.addClass('border border-gray-200');
        el.val('');
    }
    
});