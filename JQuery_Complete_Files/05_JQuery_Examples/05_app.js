// SMS App
$('#text-area').keyup(function() {
    $('#count').text(100 - $(this).val().length);
});

// Change Password
$('#check').change(function() {
    let passwordBox = $('#password-box');
    if(passwordBox.attr('type') === 'password'){
        passwordBox.attr('type','text');
    }
    else{
        passwordBox.attr('type','password');
    }
});