$(document).ready(function(){
    $('.ui.form')
    .form({
        fields: {
        firstName: {
            identifier: 'firstName',
            rules: [
            {
                type   : 'empty',
                prompt : 'Please enter your first name'
            }
            ]
        },
        lastName: {
            identifier: 'lastName',
            rules: [
            {
                type   : 'empty',
                prompt : 'Please enter your last name'
            }
            ]
        },
        email: {
            identifier: 'email',
            rules: [
            {
                type   : 'email',
                prompt : 'Please key in your email'
            }
            ]
        },
        username: {
            identifier: 'username',
            rules: [
            {
                type   : 'empty',
                prompt : 'Please enter a username'
            }
            ]
        },
        password: {
            identifier: 'password',
            rules: [    
            {
                type   : 'empty',
                prompt : 'Please enter a password'
            },
            {
                type   : 'minLength[6]',
                prompt : 'Your password must be at least {ruleValue} characters'
            }
            ]
        },
        terms: {
            identifier: 'terms',
            rules: [
            {
                type   : 'checked',
                prompt : 'You must agree to the terms and conditions'
            }
            ]
        }
        }
    });
}); 