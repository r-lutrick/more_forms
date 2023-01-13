import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log(newUser.firstName.length > 2 ? "working" : "Not working")
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true)
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    var emailRegex = /.+@.+\..+/;
    var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    return (
        <>
            <form onSubmit={createUser} className="form-group w-50 m-auto" >
                <h3>{formMessage()}</h3>
                <div>
                    <label>First Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} />
                    {
                        firstName.length < 2 && firstName.length > 0 ? <p className='text-danger'>Must be at least 2 characters</p> : ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setLastName(e.target.value)} />
                    {
                        lastName.length < 2 && lastName.length > 0 ? <p className='text-danger'>Must be at least 2 characters</p> : ""
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                    {
                        !email.match(emailRegex) && email.length > 0 ?
                            <p className='text-danger'>incorrect format ie: email@email.com</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                    {
                        !password.match(passRegex) && password.length > 0 ?
                            <p className='text-danger'>Password must contain a number and speacial character</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} />
                    {
                        confirmPassword !== password ?
                            <p className='text-danger'>Passwords must match</p> :
                            ''
                    }
                </div>
                <br />
                <input type="submit" value="Create User" className='btn btn-outline-dark' />
            </form>
            <hr />
            <div>
                First name: {firstName}
            </div>
            <div>
                Last name: {lastName}
            </div>
            <div>
                Email Address: {email}
            </div>
            <div>
                Password: {password}
            </div>
        </>
    );
};

export default UserForm;
