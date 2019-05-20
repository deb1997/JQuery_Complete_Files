// Hide & Show
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $('#card-1').hide(500);
        $(this).text('SHOW');
    }
    else{
        $('#card-1').show(500);
        $(this).text('HIDE');
    }
});

// Hide & Show = Toggle
$('#btn-2').click(function() {
    ($(this).text() === 'HIDE') ? $(this).text('SHOW'): $(this).text('HIDE');
    $('#card-2').toggle(500);
});


// FadeIn & FadeOut
$('#btn-3').click(function() {
    if($(this).text() === 'FADEOUT'){
        $('#card-3').fadeOut(500);
        $(this).text('FADEIN');
    }
    else{
        $('#card-3').fadeIn(500);
        $(this).text('FADEOUT');
    }
});


// FadeIn & FadeOut = FadeToggle
$('#btn-4').click(function() {
    ($(this).text() === 'FADEOUT') ? $(this).text('FADEIN'): $(this).text('FADEOUT');
    $('#card-4').fadeToggle(500);
});

// slideup & slideDown => slideToggle()