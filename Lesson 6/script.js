$(function () {
    let users = [];
    $('.signin-box').hide()


    $('#signUp').on('click', function () {
        if ($('#firstName').val() && $('#lastName').val() && $('#email').val() && $('#password').val() !== '') {
            if (localStorage.length > 0 && localStorage.getItem('users')) {
                users = JSON.parse(localStorage.getItem('users'))
            }
            else {
                console.log('pusto')
            }
            if (!users.some(users => users.email.toLowerCase() === $('#email').val().toLowerCase())) {
                let firstName = $('#firstName').val();
                let lastName = $('#lastName').val();
                let email = $('#email').val();
                let password = $('#password').val();
                let newUser = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                $('#firstName').val('')
                $('#lastName').val('')
                $('#password').val('')
                $('#email').val('')
                $('.signUp-error').hide()
                $('.input-error').hide()
            }
            else if (users.some(users => users.email.toLowerCase() === $('#email').val().toLowerCase())) {
                $('.signUp-error').show()
            }
        }
        else{
            $('.input-error').show()
        }
    })
    $('#signIn').on('click', function () {
        let logEmail = $("#logEmail").val();
        let logPassword = $('#logPassword').val();
        $('.input-error').hide()
        $('.signUp-error').hide()

        if (localStorage.length > 0 && localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
            $('.signIn-error').show()
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === logEmail && users[i].password === logPassword) {
                    $('.signup-box').hide()
                    $('.signin-box').hide()
                    $('.user-box').show()
                    $('#userName').html(users[i].firstName + " " + users[i].lastName)
                    $('#userEmail').html(users[i].email)
                    $("#logEmail").val('');
                    $('#logPassword').val('')
                    $('.signIn-error').hide()
                    $('.empty').hide()
                }

            }
        }
        else {
            $('.empty').show()
        }
    })
    $('#userSignOut').on('click', function () {
        $('.signup-box').hide()
        $('.signin-box').show()
        $('.user-box').hide()
        $('.input-error').hide()
        $('.signUp-error').hide()
        $('.signIn-error').hide()
    })
    $('#blueSignIn').on('click', () => {
        $('.signup-box').hide()
        $('.user-box').hide()
        $('.signin-box').show()
        $('.input-error').hide()
        $('.signUp-error').hide()
        $('.signIn-error').hide()
    })
    $('#blueSignUp').on('click', () => {
        $('.signup-box').show()
        $('.user-box').hide()
        $('.signin-box').hide()
        $('.input-error').hide()
        $('.signUp-error').hide()
        $('.signIn-error').hide()
    })
})