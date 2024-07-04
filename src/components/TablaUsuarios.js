import React, { useEffect, useState } from 'react';

function TablaUsuarios({ url }) {
const [users,setUsers]=useState([]);
const {message,setMessage}=useState('')

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data.users)
                setMessage(data.message)
            } catch (error) {
                console.log('Error al buscar la lista de usuarios', error);
                console.error('Stack trace:', error.stack);
            }
        };
        fetchUser();
    }, [url]);
    return (
        <>
            <h1>{message}</h1>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Delegacion</th>
                    <th>Rol</th>
                    <th>Image_url</th>
                    <th>Fecha de registro</th>
                    <th>Modificar datos</th>
                    <th>Cambiar rol</th>
                    <th>Eliminar datos</th>
                </tr>
                </thead>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.nombre}</td>
                        <td>{user.email}</td>
                        <td>{user.delegacion}</td>
                        <td>{user.role}</td>
                        <td>{user.image_url}</td>
                        <td>{user.created_at}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                ))}
            </table>

        </>
    );
}
export default TablaUsuarios;