import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        // setHasBeenSubmitted(true)
    };

    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome, please submit the form";
    //     }
    // };

    return (
        <>
            <form onSubmit={createUser} className="form-group w-50 m-auto" >
                {/* <h3>{formMessage()}</h3> */}
                <div>
                    <label>First Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <input type="submit" value="Create User" className='btn btn-outline-dark' /> */}
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
