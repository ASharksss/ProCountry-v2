import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchDistrict = createAsyncThunk('geoposition/districts', async () => {
    const { data } = await axios.get('/geoposition/districts')
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchRegion = createAsyncThunk('geoposition/regions', async (id) => {
    const { data } = await axios.get(`/geoposition/${id}/regions`)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchCity = createAsyncThunk('geoposition/cities', async (id) => {
    const { data } = await axios.get(`/geoposition/${id}/cities`)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchArea = createAsyncThunk('geoposition/areas', async (id) => {
    const { data } = await axios.get(`/geoposition/${id}/areas`)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    return data
})

export const fetchGeoData = createAsyncThunk('geoposition/data', async () => {
    let localGeo = JSON.parse(localStorage.getItem('geoposition'))
    const { data } = await axios.post('/geoposition/data', localGeo)
        .catch(error => {
            if (error) {
                window.alert(error.response.data.detail.message)
            }
        })
    if(localGeo.districts === '') {
        localGeo.districts = data[0].districts[0].id
        localGeo.regions = data[0].regions[0].id
        localGeo.cities = data[0].cities[0].id
        localStorage.setItem('geoposition', [JSON.stringify(localGeo)])
    }
    return data
})

const initialState = {
    districts: {
        items: [],
        status: 'loading'
    },
    regions: {
        items: [],
        status: 'loading'
    },
    cities: {
        items: [],
        status: 'loading'
    },
    areas: {
        items: [],
        status: 'loading'
    },
    defaultValue: {
        items: [],
        status: 'loading'
    }
}

const geopositionSllice = createSlice({
    name: 'district',
    initialState,
    reducers: {
        geoResetRegions: (state) => {
            state.regions.items = []
        },
        geoResetCities: (state) => {
            state.cities.items = []
        },
        geoResetAreas: (state) => {
            state.areas.items = []
        }
    },
    extraReducers: {
        [fetchDistrict.pending]: (state) => {
            state.districts.items = []
            state.districts.status = 'loading'
        },
        [fetchDistrict.fulfilled]: (state, action) => {
            state.districts.items = action.payload
            state.districts.status = 'loaded'
        },
        [fetchDistrict.rejected]: (state) => {
            state.districts.items = []
            state.districts.status = 'error'
        },
        [fetchRegion.pending]: (state) => {
            state.regions.items = []
            state.regions.status = 'loading'
        },
        [fetchRegion.fulfilled]: (state, action) => {
            state.regions.items = action.payload
            state.regions.status = 'loaded'
        },
        [fetchRegion.rejected]: (state) => {
            state.regions.items = []
            state.regions.status = 'error'
        },
        [fetchCity.pending]: (state) => {
            state.cities.items = []
            state.cities.status = 'loading'
        },
        [fetchCity.fulfilled]: (state, action) => {
            state.cities.items = action.payload
            state.cities.status = 'loaded'
        },
        [fetchCity.rejected]: (state) => {
            state.cities.items = []
            state.cities.status = 'error'
        },
        [fetchArea.pending]: (state) => {
            state.areas.items = []
            state.areas.status = 'loading'
        },
        [fetchArea.fulfilled]: (state, action) => {
            state.areas.items = action.payload
            state.areas.status = 'loaded'
        },
        [fetchArea.rejected]: (state) => {
            state.areas.items = []
            state.areas.status = 'error'
        },
        [fetchGeoData.pending]: (state) => {
            state.defaultValue.items = []
            state.defaultValue.status = 'loading'
        },
        [fetchGeoData.fulfilled]: (state, action) => {
            state.defaultValue.items = action.payload
            state.defaultValue.status = 'loaded'
        },
        [fetchGeoData.rejected]: (state) => {
            state.defaultValue.items = []
            state.defaultValue.status = 'error'
        },
    }
})

export const geopositionReducer = geopositionSllice.reducer;
export const { geoResetAreas, geoResetCities, geoResetRegions } = geopositionSllice.actions;