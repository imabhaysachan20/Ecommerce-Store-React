import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';


const themes = {
    light:"light",
    dark:"dark"
}   

const getThemeFromLocalStorage = ()=> {
    const theme = localStorage.getItem("theme") || themes.light;
    document.documentElement.setAttribute('data-theme',theme)
    return theme
 }


 const initialState = {
    user:null,
    theme:getThemeFromLocalStorage()
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            const user = { ...action.payload.user, token: action.payload.jwt };
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logoutUser:(state,action)=>{
            state.user= null;
            localStorage.removeItem("user");
            toast.success("Logged Out Successfully")
        },
        toggleTheme:(state,action)=>{
            state.theme = state.theme==="light"?themes.dark:themes.light;
            document.documentElement.setAttribute('data-theme',state.theme)
            localStorage.setItem('theme',state.theme)
        }
    }
})

export const {loginUser,logoutUser,toggleTheme} = userSlice.actions;


export default userSlice.reducer;