import React, { useState } from 'react';

const FormRegistro = () => {
    const [nombre, setNombre] = useState('');
    const [delegacion, setDelegacion] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        console.log(nombre, delegacion, email, password);
        try {
            const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    delegacion: delegacion,
                    email: email,
                    password: password
                })
            });
            if (!response.ok) {
                // Si el servidor devuelve un código de error HTTP, lanza una excepción
                const text = await response.text();
                throw new Error(`Error en la solicitud: ${response.status} ${text}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error registrando usuario:', error);
        }
    };

    return (
        <>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="delegacion">Delegación</label>
                <input
                    type="text"
                    placeholder="Escribe tu delegación"
                    id="delegacion"
                    value={delegacion}
                    onChange={(e) => setDelegacion(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Email para administrar cuenta"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    placeholder="Escribe una contraseña segura"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleRegister}>Registrar</button>
        </>
    );
};

export default FormRegistro;