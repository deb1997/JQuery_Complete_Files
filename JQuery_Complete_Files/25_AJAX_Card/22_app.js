let callAJAX = () => {
    // JQuery AJAX to get random person object
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            processData(person);
        }
    });
};

setInterval(callAJAX,1000);

let processData = (person) => {
    let fullName = `${person.name.first} ${person.name.last}`;
    let image = `${person.picture.medium}`;
    let age = `${person.dob.age} Yrs`;
    $('#person-name').text(fullName);
    $('#person-img').attr('src',image);
    $('#person-age').text(age);
};