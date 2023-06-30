import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserSubscriptions = createAsyncThunk('user/info/subscriptions', async () => {
    const { data } = await axios.get('/user/subscription')
    return data
})

export const fetchUserUnsubscribe = createAsyncThunk('user/info/unsubscribe', async (id) => {
    const { data } = await axios.post('user/unsubscribe', { 'id': id })
    return data
})

export const fetchUserSubscribe = createAsyncThunk('user/info/subscribe', async (id) => {
    const { data } = await axios.post('user/subscribe', { 'id': id })
    return data
})

const initialState = {
    subscriptions: {
        items: [],
        status: 'loading'
    }
}

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    extraReducers: {
        [fetchUserSubscriptions.pending]: (state) => {
            state.subscriptions.items = []
            state.subscriptions.status = 'loading'
        },
        [fetchUserSubscriptions.fulfilled]: (state, action) => {
            state.subscriptions.items = action.payload
            state.subscriptions.status = 'loaded'
        },
        [fetchUserSubscriptions.rejected]: (state) => {
            state.subscriptions.items = []
            state.subscriptions.status = 'error'
        },
        [fetchUserUnsubscribe.pending]: (state) => {
            state.subscriptions.items = []
            state.subscriptions.status = 'loading'
        },
        [fetchUserUnsubscribe.fulfilled]: (state, action) => {
            state.subscriptions.items = action.payload
            state.subscriptions.status = 'loaded'
        },
        [fetchUserUnsubscribe.rejected]: (state) => {
            state.subscriptions.items = []
            state.subscriptions.status = 'error'
        }
    }
})

export const userInfoReducer = userInfoSlice.reducer;
