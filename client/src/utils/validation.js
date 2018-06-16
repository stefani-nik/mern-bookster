export const registerFormValidation = (state) =>
{
    let errors = {
        usernameErr : '',
        emailErr : '',
        passwordErr : '',
        confirmPasswordErr : ''
    };

    if(state.username.length < 5)
    {
        errors.usernameErr = "Username must be at least 5 characters long."
    }

    if(!state.username.match(/^[A-Za-z0-9_]+$/))
    {
        errors.usernameErr = "Username can contain only letters, digits and userscore."
    }

    if(!state.email.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/))
    {
        errors.emailErr = "The email is not valid."
    }

    if(state.password.length < 5)
    {
        errors.passwordErr = "Password must be at least 5 characters long."
    }

    if(state.password !== state.confirmPassword)
    {
        errors.confirmPasswordErr = "The passwords do not match"
    }

    return errors;
}
