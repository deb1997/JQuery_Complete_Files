
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
    let personCard = `<div class="col-md-3 mt-5 mb-2">
                        <div class="card text-center t_card">
                            <div class="card-body">
                                <img src="${image}" class="img-fluid img-thumbnail rounded-circle w-50 t_img">
                                <h3 class="mt-2">${fullName}</h3>
                                <p class="lead">${age}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolore, ducimus eos esse eum explicabo ipsum nihil recusandae reiciendis soluta.</p>
                                <div class="d-flex flex-row justify-content-between">
                                    <div class="p-3">
                                        <i class="fab fa-facebook-f text-teal fa-2x"></i>
                                    </div>
                                    <div class="p-3">
                                        <i class="fab fa-twitter text-teal fa-2x"></i>
                                    </div>
                                    <div class="p-3">
                                        <i class="fab fa-github text-teal fa-2x"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
    $('#card-row').append(personCard);
};