import { useMemo, useState } from "react";

export function useUser() {
    
    const [name, setName] = useState('');
    const [token, setToken] = useState('');

    const setUserData = (user) => {
        setName(user.name);
        setToken(user.token);
    };

    return useMemo(() => ({
        name,
        token,
        setUserData
    }), [
        name,
        token,
        setUserData
    ]);
};