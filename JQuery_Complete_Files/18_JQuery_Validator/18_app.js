$.validator.setDefaults( {
    submitHandler: function () {
        alert( "submitted!" );
    }
});

// Custom Validation
$.validator.methods.range = function( value, element ) {
    return /^[a-zA-Z0-9]+$/ .test( value );
};

$(document).ready(function() {
    $('#registerForm').validate({
        rules : {
            firstname : {
                required : true,
                minlength : 5
            },
            lastname : {
                required : true,
                minlength : 5
            },
            username : {
                required : true,
                minlength : 5
            },
            email : {
                required : true,
                email : true
            },
            password : {
                required : true,
                range : true,
                minlength : 5
            },
            c_password : {
                required : true,
                range : true,
                minlength : 5,
                equalTo : '#password'
            },
            terms : {
                required : true
            }
        },
        messages : {
            firstname : {
                required : 'Please Enter First Name',
                minlength : 'Enter At least 5 letters for First Name'
            },
            lastname : {
                required : 'Please Enter Last Name',
                minlength : 'Enter At least 5 letters for Last Name'
            },
            username : {
                required : 'Please Enter User Name',
                minlength : 'Enter At least 5 letters for User Name'
            },
            email : {
                required : 'Please Enter an Email Address',
                email : 'Please enter a valid Email Address'
            },
            password : {
                required : 'Please Enter Password',
                range : 'No Special Characters are Allowed',
                minlength : 'Enter At least 5 letters for Password'
            },
            c_password : {
                required : 'Please Enter Confirm Password',
                range : 'No Special Characters are Allowed',
                minlength : 'Enter At least 5 letters for Confirm Password',
                equalTo : 'Both the Passwords not Matched'
            },
            terms : {
                required : 'Please Accept the Terms & Conditions'
            }
        },
        errorPlacement: function ( error, element ) {
            // Add the `invalid-feedback` class to the error element
            error.addClass( "invalid-feedback" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.next( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
        }
    });
});