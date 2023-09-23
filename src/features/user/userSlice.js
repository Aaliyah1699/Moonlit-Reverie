import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
    autumn: 'autumn',
    coffee: 'coffee',
    halloween: 'halloween',
    bumblebee: 'bumblebee',
};

const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
};

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem('theme') || themes.autumn;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
            toast.success('The ravens will wait for your return');
        },
        toggleTheme: (state) => {
            const { halloween, autumn } = themes;
            state.theme = state.theme === halloween ? autumn : halloween;
            document.documentElement.setAttribute('data-theme', state.theme);
            localStorage.setItem('theme', state.theme);
        },
    },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
