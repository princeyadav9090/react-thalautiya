import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Redirect to login if no token
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.error(err);
                localStorage.removeItem('token'); // Clear invalid token
                navigate('/login'); // Redirect to login
            });
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state while checking authentication
    }

    return <>{children}</>;
};

export default UserProtectWrapper;