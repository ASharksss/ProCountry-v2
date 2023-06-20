import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInstitutionCategory = createAsyncThunk('institution/categories', async () => {
    const { data } = await axios.get('/institution/categories')
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchInstitutionSubcategory = createAsyncThunk('institution/subcategories', async (id) => {
    const { data } = await axios.get('/institution/subcategories/' + id)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})


const initialState = {
    category: {
        items: [],
        status: 'loading'
    },
    subcategory: {
        items: [],
        status: 'loading',
        leader: [],
        head: []
    }
}

export const institutionCategorySllice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [fetchInstitutionCategory.pending]: (state) => {
            state.category.items = []
            state.category.status = 'loading'
        },
        [fetchInstitutionCategory.fulfilled]: (state, action) => {
            state.category.items = action.payload
            state.category.status = 'loaded'
        },
        [fetchInstitutionCategory.rejected]: (state) => {
            state.category.items = []
            state.category.status = 'error'
        },
        [fetchInstitutionSubcategory.pending]: (state) => {
            state.subcategory.items = []
            state.subcategory.leader = []
            state.subcategory.head = []
            state.category.status = 'loading'
        },
        [fetchInstitutionSubcategory.fulfilled]: (state, action) => {
            state.subcategory.items = action.payload.subcategories
            state.subcategory.leader = action.payload.leader
            state.subcategory.head = action.payload.head
            state.category.status = 'loaded'
        },
        [fetchInstitutionSubcategory.rejected]: (state) => {
            state.subcategory.items = []
            state.subcategory.leader = []
            state.subcategory.head = []
            state.category.status = 'error'
        }
    }
})

export const institutionCategoryReducer = institutionCategorySllice.reducer;
