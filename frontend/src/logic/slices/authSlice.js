import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk('authorization/login', async (uData) => {
    const { data } = await axios.post('/auth/login', uData)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchUserByToken = createAsyncThunk('authorization/token', async (token) => {
    const { data } = await axios.put('/auth/token', {"token": token})
        .catch(error => {
            if (error) {
                // localStorage.removeItem('session')
            }
        })
    return data
})

const initialState = {
    user: {
        token: [],
        items: [],
        status: 'loading'
    },
    isAuth: false
}

export const loginSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.user.token = []
            state.isAuth = false
            state.user.status = 'loading'
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.user.token = action.payload.token
            state.user.items = action.payload.user
            localStorage.setItem('session', JSON.stringify(action.payload.token))
            axios.defaults.headers.common = {'Authorization': 'Bearer ' + action.payload.token}
            state.isAuth = true
            state.user.status = 'loaded'
        },
        [fetchLogin.rejected]: (state) => {
            state.user.token = []
            state.isAuth = false
            state.user.status = 'error'
        },
        [fetchUserByToken.pending]: (state) => {
            state.user.token = []
            state.isAuth = false
            state.user.status = 'loading'
        },
        [fetchUserByToken.fulfilled]: (state, action) => {
            state.user.items = action.payload
            const token = JSON.parse(localStorage.getItem('session'))
            state.user.token = token
            state.isAuth = true
            state.user.status = 'loaded'
        },
        [fetchUserByToken.rejected]: (state) => {
            state.user.token = []
            state.isAuth = false
            state.user.status = 'error'
        }
    }
})

export const userReducer = loginSlice.reducer;
