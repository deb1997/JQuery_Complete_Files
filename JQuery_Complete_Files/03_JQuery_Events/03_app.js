// Click event
$('#btn-1').click(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('Login');
});

// Dbl Click
$('#btn-2').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('Register');
});

// MouseEnter
$('#btn-3').mouseenter(function() {
    if($(this).hasClass('btn-teal')){
        $(this).removeClass('btn-teal').addClass('btn-warning').text('Sign In');
    }
    else {
        $(this).removeClass('btn-warning').addClass('btn-teal').text('Sign Up');
    }
});

// Change Event
$('#select-box').change(function() {
    $('#option').text($(this).val());
});

// Keyup event
$('#text-box').keyup(function() {
    $('#text-entered').text($(this).val());
});