import React, { useState} from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleLogin = async () => {
        try {
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const respuesta = await peticion.json();
            console.log(respuesta)
            if (respuesta.message === 'Login exitoso') {
                // Aquí podrías guardar el usuario en el estado global o en localStorage
                setMessage('Login exitoso para el usuario con id:'+ respuesta.user.id);
                localStorage.setItem('tndm_id', respuesta.user.id)
                localStorage.setItem('tndm_email', respuesta.user.email)
                localStorage.setItem('tndm_token', respuesta.token)
            } else
                setMessage('Credenciales incorrectas');
            }
        catch(error) {
            console.error('Error en el login', error);
            setMessage('Error en el login');
        }
    };
    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
};
export default Login;