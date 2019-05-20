// External JQuery
$('#red-btn').click(function() {
    let theText = $(this).text();
    if(theText === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
    $('#red-card').toggle(1000);
});

// Shortcut code
/*
$('#red-btn').click(function() {
    ($(this).text() === 'HIDE')? $(this).text('SHOW'): $(this).text('HIDE');
    $('#red-card').toggle(1000);
});*/
