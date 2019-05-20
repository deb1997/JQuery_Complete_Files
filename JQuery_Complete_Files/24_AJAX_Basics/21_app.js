/*

Dummy Data generation
----------------------
mockroo.com

Hosting JSON on Google
-----------------------
myjson.com

for Random User Generation
---------------------------
https://randomuser.me/

onreadystatechange	Defines a function to be called when the readyState property changes
readyState	Holds the status of the XMLHttpRequest.

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status	200: "OK"
403: "Forbidden"
404: "Page not found"
For a complete list go to the Http Messages Reference
statusText	Returns the status-text (e.g. "OK" or "Not Found")

 */



// JavaScript AJAX
$('#js-ajax').click(function() {

    // Create an AJAX Request
    let http = new XMLHttpRequest();

    // Prepare the AJAX Request
    http.open('GET','https://api.myjson.com/bins/vaede',true);

    // Send the request
    http.send();

    // Check the status of Request
    http.onreadystatechange = () => {
        // if response is ready and its safe
        if(http.readyState === 4 && http.status === 200){
            let data = http.responseText;
            let persons = JSON.parse(data);
            processData(persons);
        }
    };
});

// JQuery AJAX
$('#jquery-ajax').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/1cv45e',
        success : function(data) {
            processData(data);
        }
    });
});

// Process the data
let processData = (persons) => {
    let tableRow = '';
    for(let person of persons){
        tableRow += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.gender}</td>
                        <td>${person.email}</td>
                        <td>${person.ip_address}</td>
                     </tr>`;
    }
    $('#t_body').empty().append(tableRow);
};