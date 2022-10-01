import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if (result.user) {
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/")
        } else {
            alert("Please enter connect details")
        }
    }
    return (
        <div className='login'>
            <div className='front'>
                <h1 className='reg'>Login</h1>
                <input type="text" className="inputBox" placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" className="inputBox" placeholder='Enter Password'
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} className="appButton" type="button">Login</button>
            </div>
        </div>
    )
}

export default Login