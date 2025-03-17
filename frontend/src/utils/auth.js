export const isAuthenticated = () => {
    return JSON.parse(localStorage.getItem('isAuthenticated') || 'false');
};

export const getRole = () => {
    return localStorage.getItem('role') || null;
};

export const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('role', 'admin');
        return true;
    } else if (username === 'student' && password === 'student123') {
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('role', 'student');
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
    window.location.reload(); // Refresh app state after logout
};
