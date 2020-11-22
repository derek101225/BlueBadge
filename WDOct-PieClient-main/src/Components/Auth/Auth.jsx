import {useState} from 'react';
import './Auth.css';

const Auth = (props) => {
  console.log(props);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const handleSubmit = (event) => {
    // stops browser from refreshing when form is submitted
    event.preventDefault();
    // sets up the value of the url dependent on if logging in or signing up 
    const url = login ? 'http://localhost:4000/user/login' : 'http://localhost:4000/user/register';
    // sets up the value of the data we are going to send to the url based on login value
    const bodyObj = login ? {
      email: email,
      password: password
    } : {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(bodyObj)
    })
    .then(res => res.json())
    .then(data => login ? props.updateToken(data.token) : undefined)
  }

  const title = () => {
    return login ? 'Login' : 'Signup';
    // if Login is true, return the string of 'login'. Else, return 'Signup';
  }

  const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login); //=> set login to be the opposite of its current value
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  const signupFields = () => {
    return !login ? ( //if login is false
      <div>
        <label htmlFor="firstName">First Name</label>
        <br/>
        <input 
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        />
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <br/>
        <input 
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        />
      </div>
    ) : null
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor="email">Email:</label>
        <br/>
        <input 
        type="text" 
        id="email" 
        // two-way data binding. This builds a closed circuit to display and update an input field
        // The data comes in and changes the state variable via setEmail. The state variable (email) is tied to the input field via the value attribute. 
        value={email} 
        placeholder="email@email.com" 
        onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
        <input 
        type="password"
        id="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value)
        }}
        />
        <br/>
        <button onClick={loginToggle}>Login/Signup Toggle</button>
        <br/>
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  );
};

export default Auth;

