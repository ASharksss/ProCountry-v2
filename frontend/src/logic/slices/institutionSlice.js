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
    const { data } = await axios.get('/institution/subcategory/' + id)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchInstitutionObjects = createAsyncThunk('institution/subcategory/objects', async (id) => {
    const { data } = await axios.get('/institution/subcategory/objects/' + id)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchInstitutionObjectInfo = createAsyncThunk('institution/object', async (id) => {
    const { data } = await axios.get('/institution/object/' + id)
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
    },
    objects: {
        items: [],
        status: 'loading',
        head: []
    },
    objectInfo: {
        items: [],
        status: 'loading'
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
            state.subcategory.status = 'loading'
        },
        [fetchInstitutionSubcategory.fulfilled]: (state, action) => {
            state.subcategory.items = action.payload.subcategories
            state.subcategory.leader = action.payload.leader
            state.subcategory.head = action.payload.head
            state.subcategory.status = 'loaded'
        },
        [fetchInstitutionSubcategory.rejected]: (state) => {
            state.subcategory.items = []
            state.subcategory.leader = []
            state.subcategory.head = []
            state.subcategory.status = 'error'
        },
        [fetchInstitutionObjects.pending]: (state) => {
            state.objects.items = []
            state.objects.head = []
            state.objects.status = 'loading'
        },
        [fetchInstitutionObjects.fulfilled]: (state, action) => {
            state.objects.items = action.payload.institution
            state.objects.head = action.payload.head
            state.objects.status = 'loaded'
        },
        [fetchInstitutionObjects.rejected]: (state) => {
            state.objects.items = []
            state.objects.head = []
            state.objects.status = 'error'
        },
        [fetchInstitutionObjectInfo.pending]: (state) => {
            state.objectInfo.items = []
            state.objectInfo.status = 'loading'
        },
        [fetchInstitutionObjectInfo.fulfilled]: (state, action) => {
            state.objectInfo.items = action.payload
            state.objectInfo.status = 'loaded'
        },
        [fetchInstitutionObjectInfo.rejected]: (state) => {
            state.objectInfo.items = []
            state.objectInfo.status = 'error'
        },
    }
})

export const institutionCategoryReducer = institutionCategorySllice.reducer;
