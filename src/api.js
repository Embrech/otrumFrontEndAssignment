const BASE_URL = 'http://localhost:8080';

export const fetchRegister = async () => {
    try {
        const response = await fetch(`${BASE_URL}/register/`, {
            method: 'GET'
        });
        while (!response.ok) {
            throw new Error('Failed to fetch register data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching register:', error);
        throw error;
    }
};

export const saveRegister = async (registerData) => {
    try {
        const response = await fetch(`${BASE_URL}/register/update/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        });
        if (!response.ok) {
            throw new Error('Failed to save register data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error saving register:', error);
        throw error;
    }
};
