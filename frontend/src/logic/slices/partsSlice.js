import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPartyList = createAsyncThunk('party/list', async () => {
    const { data } = await axios.get('/party/list')
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchPartyMembers = createAsyncThunk('party/members', async (id) => {
    const { data } = await axios.get('/party/' + id)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

const initialState = {
    parts: {
        items: [],
        status: 'loading'
    },
    partyMembers: {
        items: [],
        status: 'loading'
    }
}

export const partySlice = createSlice({
    name: 'parts',
    initialState,
    extraReducers: {
        [fetchPartyList.pending]: (state) => {
            state.parts.items = []
            state.parts.status = 'loading'
        },
        [fetchPartyList.fulfilled]: (state, action) => {
            state.parts.items = action.payload
            state.parts.status = 'loaded'
        },
        [fetchPartyList.rejected]: (state) => {
            state.parts.items = []
            state.parts.status = 'error'
        },
        [fetchPartyMembers.pending]: (state) => {
            state.partyMembers.items = []
            state.partyMembers.status = 'loading'
        },
        [fetchPartyMembers.fulfilled]: (state, action) => {
            state.partyMembers.items = action.payload
            state.partyMembers.status = 'loaded'
        },
        [fetchPartyMembers.rejected]: (state) => {
            state.partyMembers.items = []
            state.partyMembers.status = 'error'
        },
    }
})

export const partyReducer = partySlice.reducer;
