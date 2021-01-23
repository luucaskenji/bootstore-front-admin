import axios from 'axios';

export default {
    login: ({ username, password }) => {
        return axios
            .post('https://medita-ai-back.herokuapp.com/admin/users/sign-in', { username, password })
            .then(r => {
                localStorage.setItem('adminToken', r.data.token);
            })
            .catch(() => {
                throw new Error('Invalid data');
            })
    },
    logout: () => {
        return axios
            .post('https://medita-ai-back.herokuapp.com/admin/users/sign-out')
            .then(() => localStorage.removeItem('adminToken'))
    },
    checkError: ({ status }) => {
        if (status === 403) {
            localStorage.removeItem('adminToken');
            
            return Promise.reject();
        }
        else return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('adminToken') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => Promise.resolve()
};