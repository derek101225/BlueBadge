import {useState} from 'react';
import './Auth.css';

const Auth = () => {
    const [firstName, setFirst] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setlogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup';
        //if login is true, return the string of login else retrun signup
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setlogin(!login) //set login to be the opposite of its current
        setFirst('');
        setLastName('');
        setEmail('');
        setPassword('');

    }

    const signupFields = () => {
       return !login ? (
            <div>
                <label htmlFor='first'>First Name</label>
                <br />
                <input type='text' id='first' value={firstName} onChange={(event) => setFirst(event.target.value)}></input>
                <br/>
                <label htmlFor='lastName'>Last Name</label>
                <br/>
                <input type='text' id='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)}></input>

            </div>
        ) : null
    }


    return(
        <div>
            <form>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor='email'>Email:</label>
                <br/>
                <input type='text' id='email' value={email} placeholder='email@email.com' onChange={(event) => {
                    console.log(event); setEmail(event.target.value)
                }} />
                <br />
                <label htmlFor='password'>password</label>
                <br/>
                <input type='password' id='password' value={password} onChange={(event) => {
                    console.log(event.target.value); setPassword(event.target.value)
                }} />
                <br/>
                <button onClick={loginToggle}>Login/Sighup</button>
            </form>
        </div>
    )
}

export default Auth;