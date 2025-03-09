export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};

export const getRole = () => {
    return localStorage.getItem('role');
};

export const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('role', 'admin');
        return true;
    } else if (username === 'student' && password === 'student123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('role', 'student');
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
};