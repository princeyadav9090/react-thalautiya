import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:2500/users/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    localStorage.removeItem('token'); // Clear the token
                    navigate('/'); // Redirect to the Start page
                }
            })
            .catch((err) => {
                console.error('Error during logout:', err);
                localStorage.removeItem('token'); // Clear the token even if logout fails
                navigate('/'); // Redirect to the Start page
            });
    }, [navigate, token]);

    return <div>Logging out...</div>;
};

export default UserLogout;