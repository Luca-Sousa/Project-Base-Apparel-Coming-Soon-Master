$(function(){

    $('#email').focus(function(){
        resetInvalidField($(this));
    });

    // Função para lidar com o clique no botão de submit
    $('form').submit(function(event){
        // Evitar o envio padrão do formulário
        event.preventDefault();

        var email = $('input[name=email]').val();
        console.log('email');
        var isValid = true;

        // Verificação de Email
        if (email === '') {
            applyFieldInvalid($('input[name=email]'));
            $('#message').append('<p>Please provide a valid email</p>');
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid($('input[name=email]'));
            $('#message').append('<br><p>Please provide a valid email</p>');
            isValid = false;
        }

        if (isValid) {
            alert("enviado com sucesso");
        }
    });

    // Função para aplicar estilo de campo inválido
    function applyFieldInvalid(el){
        el.css('border', '1px solid col-Soft-Red');
    }

    // Função para resetar estilo de campo inválido
    function resetInvalidField(el){
        el.css('border', '1px solid col-Des-Red');
        el.val('');
    }

    // Função para resetar os estilos dos inputs de rádio e checkbox
    function restartInputsCheckBox() {
        $(".query-type-wraper").css({
            'border': '1px solid var(--Medium--Grey)',
            'background-color': 'var(--white)'
        });
        $(".radio-mark").css("display", "none");
        $("input[type=radio]").css("display", "block");
        $(".checkbox-mark").css("display", "none");
        $("input[type=checkbox]").css("display", "block");
    }
    
});