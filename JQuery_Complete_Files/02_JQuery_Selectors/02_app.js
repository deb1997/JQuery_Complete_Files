// Tag Selector , Id Selector , Class Selector
$('.lead').click(function() {
    $(this).css({
        'background-color': 'orange',
         'padding' : '10px',
         'box-shadow' : '0 0 10px black',
         'border-radius' : '20px'
    });
});

// Attribute Selection
let textBox = $('input[type="text"]');
textBox.focus(function() {
    $(this).css({
        'background-color': 'lightgreen',
    });
});

textBox.blur(function() {
    $(this).css({
        'background-color': 'white',
    });
});

let passwordBox = $('input[type="password"]');
passwordBox.focus(function() {
    $(this).css({
        'background-color': 'orange',
    });
});

passwordBox.blur(function() {
    $(this).css({
        'background-color': 'white',
    });
});